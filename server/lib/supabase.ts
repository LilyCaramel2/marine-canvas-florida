import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY ?? '';

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.warn('[supabase] SUPABASE_URL or SUPABASE_SERVICE_KEY not set — storage disabled');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

export const BUCKET = 'submission-files';

/**
 * Upload a single file buffer to Supabase Storage.
 * Returns the public URL or null on failure.
 */
export async function uploadFile(
  submissionId: string,
  fileName: string,
  buffer: Buffer,
  mimeType: string
): Promise<string | null> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return null;
  const path = `${submissionId}/${Date.now()}_${fileName}`;
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, buffer, { contentType: mimeType, upsert: false });
  if (error) {
    console.error('[supabase] upload error:', error.message);
    return null;
  }
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data?.publicUrl ?? null;
}

/**
 * Insert a form submission record.
 * Returns the inserted row id or null on failure.
 */
export async function saveSubmission(payload: {
  form_type: 'marine' | 'sailing' | 'industrial';
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  raw_fields?: Record<string, unknown>;
  file_names?: string[];
  file_urls?: string[];
  ip_address?: string;
}): Promise<string | null> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return null;
  const { data, error } = await supabase
    .from('form_submissions')
    .insert([payload])
    .select('id')
    .single();
  if (error) {
    console.error('[supabase] insert error:', error.message);
    return null;
  }
  return data?.id ?? null;
}
