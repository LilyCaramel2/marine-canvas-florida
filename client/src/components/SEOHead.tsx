import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

/**
 * SEOHead — sets document title and updates meta tags on every route change.
 * Uses native DOM manipulation; no external dependencies required.
 * Restores the base index.html values on unmount so no stale tags persist.
 */
const SEOHead = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
}: SEOHeadProps) => {
  useEffect(() => {
    // ── Title ──
    const previousTitle = document.title;
    document.title = title;

    // ── Helper: upsert a <meta> tag ──
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector
          .replace(/[\[\]"]/g, '')
          .split('=');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
      return el;
    };

    // ── Helper: upsert a <link> tag ──
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
      return el;
    };

    // ── Standard meta ──
    const descEl = setMeta('meta[name="description"]', 'content', description);
    const titleEl = setMeta('meta[name="title"]', 'content', title);

    // ── Open Graph ──
    const ogTitleEl = setMeta('meta[property="og:title"]', 'content', ogTitle ?? title);
    const ogDescEl = setMeta('meta[property="og:description"]', 'content', ogDescription ?? description);
    const ogUrlEl = ogUrl
      ? setMeta('meta[property="og:url"]', 'content', ogUrl)
      : null;

    // ── Twitter ──
    const twTitleEl = setMeta('meta[property="twitter:title"]', 'content', ogTitle ?? title);
    const twDescEl = setMeta('meta[property="twitter:description"]', 'content', ogDescription ?? description);
    const twUrlEl = ogUrl
      ? setMeta('meta[property="twitter:url"]', 'content', ogUrl)
      : null;

    // ── Canonical ──
    const canonicalEl = canonical ? setLink('canonical', canonical) : null;

    // ── Cleanup: restore previous values on unmount ──
    return () => {
      document.title = previousTitle;
      descEl.setAttribute('content', 'Premium custom marine canvas solutions in Tarpon Springs, FL. Bimini tops, enclosures, boat covers, and marine upholstery for luxury vessels. Free consultation available.');
      titleEl.setAttribute('content', 'Marine Canvas Florida | Custom Boat Canvas & Upholstery in Tarpon Springs');
      ogTitleEl.setAttribute('content', 'Marine Canvas Florida | Custom Boat Canvas & Upholstery');
      ogDescEl.setAttribute('content', 'Premium custom marine canvas solutions for luxury vessels in Tarpon Springs, Florida.');
      if (ogUrlEl) ogUrlEl.setAttribute('content', 'https://marinecanvasflorida.com/');
      twTitleEl.setAttribute('content', 'Marine Canvas Florida | Custom Boat Canvas & Upholstery');
      twDescEl.setAttribute('content', 'Premium custom marine canvas solutions for luxury vessels in Tarpon Springs, Florida.');
      if (twUrlEl) twUrlEl.setAttribute('content', 'https://marinecanvasflorida.com/');
      if (canonicalEl) canonicalEl.setAttribute('href', 'https://marinecanvasflorida.com/');
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogUrl]);

  // Renders nothing — side-effect only
  return null;
};

export default SEOHead;
