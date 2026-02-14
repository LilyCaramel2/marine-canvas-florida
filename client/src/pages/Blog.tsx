import React, { useState } from 'react';
import { Link } from 'wouter';
import { Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Marine Canvas Blog
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Expert insights, sailing tips, and marine canvas knowledge from Marine Canvas Florida.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-primary/20'
            }`}
          >
            All Posts
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-col gap-2 text-xs text-foreground/60 mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link to={`/blog/${post.slug}`}>
                  <a className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium">
                    Read More
                  </a>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/70 text-lg">
              No posts found in this category. Check back soon!
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to our newsletter for the latest marine canvas tips and sailing advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
