import { useParams } from 'wouter';
import { Link } from 'wouter';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

const BlogPostDetail = () => {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <SEOHead
          title="Post Not Found | Marine Canvas Florida Blog"
          description="The blog post you are looking for could not be found."
          canonical="https://marinecanvasflorida.com/blog"
          ogUrl="https://marinecanvasflorida.com/blog"
        />
        <div className="min-h-screen bg-background pt-24 pb-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <Link to="/blog">
              <div className="inline-flex items-center gap-2 text-primary font-semibold cursor-pointer hover:underline">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Convert markdown-style content to basic HTML paragraphs
  const renderContent = (content: string) => {
    return content
      .trim()
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('## ')) {
          return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={i} className="font-bold text-foreground mb-2">{line.replace(/\*\*/g, '')}</p>;
        }
        if (line.trim() === '') return null;
        // Handle inline bold
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={i} className="text-foreground/80 leading-relaxed mb-4">
            {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | Marine Canvas Florida Blog`}
        description={post.metaDescription}
        canonical={`https://marinecanvasflorida.com/blog/${post.slug}`}
        ogUrl={`https://marinecanvasflorida.com/blog/${post.slug}`}
      />
      <div className="min-h-screen bg-background pt-24 pb-16">
        {/* Hero image */}
        <div className="w-full h-64 md:h-96 overflow-hidden relative mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back link */}
          <Link to="/blog">
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-8 cursor-pointer hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </div>
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose max-w-none">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Discuss Your Project?</h3>
            <p className="text-foreground/70 mb-6">Whether marine canvas or industrial fabrication, we respond within 48 hours.</p>
            <Link to="/contact">
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all cursor-pointer">
                Get a Free Consultation
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetail;
