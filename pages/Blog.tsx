import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Mustache from '../components/Mustache';

// Placeholder blog posts - can be replaced with real content later
const blogPosts = [
  {
    id: 1,
    title: "Welcome to Our New Website",
    excerpt: "We're excited to launch our brand new website! Discover our services, book appointments online, and stay connected with Wilson Barbershop Co.",
    date: "January 2025",
    readTime: "2 min read",
    image: "/images/old-site/hero-bg.jpg"
  },
  {
    id: 2,
    title: "Tips for Maintaining Your Haircut",
    excerpt: "Learn how to keep your fresh cut looking sharp between visits. From product recommendations to styling tips, we've got you covered.",
    date: "Coming Soon",
    readTime: "5 min read",
    image: "/images/old-site/instagram-1.jpg"
  },
  {
    id: 3,
    title: "The Art of the Hot Towel Shave",
    excerpt: "Discover the traditional craft behind our luxury hot towel shave service. A timeless experience that combines relaxation with precision.",
    date: "Coming Soon",
    readTime: "4 min read",
    image: "/images/old-site/instagram-5.jpg"
  }
];

const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog | Barbering Tips & News"
        description="Stay updated with the latest news, grooming tips, and barbering insights from Wilson Barbershop Co. in Newcastle."
        canonicalPath="/blog"
      />

      <div className="pt-24 min-h-screen bg-brand-dark">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Link
              to="/"
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h1>
            <Mustache className="w-12 h-4 text-brand-gold mx-auto mb-6 opacity-80" />
            <p className="text-neutral-400 leading-relaxed">
              Grooming tips, barbering insights, and news from the shop.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-brand-charcoal border border-neutral-800 rounded-sm overflow-hidden group hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center bg-neutral-900 p-8 rounded-sm max-w-2xl mx-auto">
            <h3 className="text-white font-serif text-2xl mb-4">More Content Coming Soon</h3>
            <p className="text-neutral-400 mb-8">
              We're working on bringing you more grooming tips, style guides, and behind-the-scenes content.
              Follow us on Instagram for the latest updates!
            </p>
            <a
              href="https://www.instagram.com/wilsonbarberco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Follow @wilsonbarberco</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
