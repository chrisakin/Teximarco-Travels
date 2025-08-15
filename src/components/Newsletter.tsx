import React, { useState } from 'react';
import { Mail, Send, Plane } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with Travel Deals
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Get exclusive offers, travel tips, and destination guides delivered to your inbox. 
            Be the first to know about flash sales and special promotions.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center disabled:opacity-50"
              >
                {isSubscribed ? (
                  <>
                    <Plane className="w-5 h-5 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-sky-100 text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">50%</div>
              <div className="text-sky-100">Average savings on flights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sky-100">Customer support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100K+</div>
              <div className="text-sky-100">Newsletter subscribers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;