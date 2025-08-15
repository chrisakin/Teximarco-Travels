import React, { useState } from 'react';
import { Search, HelpCircle, Phone, Mail, MessageCircle, Book, CreditCard, Plane } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: Book },
    { id: 'booking', name: 'Booking', icon: Plane },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'visa', name: 'Visa Services', icon: HelpCircle },
    { id: 'account', name: 'Account', icon: MessageCircle },
  ];

  const faqs = [
    {
      category: 'booking',
      question: 'How do I book a flight?',
      answer: 'You can book a flight by using our search form on the homepage. Enter your departure and destination cities, select your travel dates, choose the number of passengers, and click search. You\'ll see available flights with prices and can select the one that suits you best.',
    },
    {
      category: 'booking',
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, you can modify or cancel your booking depending on the airline\'s policy. Log into your account, go to "My Bookings," and select the booking you want to change. Please note that modification and cancellation fees may apply.',
    },
    {
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express), debit cards, bank transfers, and mobile money payments. All payments are processed securely through our encrypted payment system.',
    },
    {
      category: 'payment',
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use industry-standard SSL encryption to protect your payment information. We never store your complete card details on our servers, and all transactions are processed through secure payment gateways.',
    },
    {
      category: 'visa',
      question: 'How long does visa processing take?',
      answer: 'Visa processing times vary by country and visa type. Generally, tourist visas take 15-30 days, while business visas may take 20-45 days. We provide estimated processing times for each country on our visa services page.',
    },
    {
      category: 'visa',
      question: 'What documents do I need for a visa application?',
      answer: 'Required documents vary by destination, but typically include: valid passport, completed application form, passport photos, bank statements, employment letter, travel itinerary, and accommodation proof. We provide a detailed checklist for each country.',
    },
    {
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click on "Sign Up" in the top right corner of our website. Fill in your personal information, create a secure password, and verify your email address. You can also sign up using your Google account for faster registration.',
    },
    {
      category: 'account',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.',
    },
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: '24/7 Phone Support',
      description: 'Speak with our travel experts',
      contact: '+234 800 TEXI (8394)',
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'support@texitravels.com',
      action: 'Send Email',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: 'Start Chat',
    },
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const searchedFaqs = searchQuery 
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  return (
    <div>
      <PageHeader
        title="Help Center"
        subtitle="Find answers to your questions and get the support you need"
        icon={HelpCircle}
        backgroundImage="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search */}
        <div className="mb-12">
          <Card className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </Card>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-sky-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          {searchedFaqs.length > 0 ? (
            <div className="space-y-4 max-w-4xl mx-auto">
              {searchedFaqs.map((faq, index) => (
                <Card key={index} hover>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center group-open:bg-sky-600 transition-colors">
                          <div className="w-3 h-0.5 bg-sky-600 group-open:bg-white transition-colors"></div>
                          <div className="w-0.5 h-3 bg-sky-600 group-open:bg-white absolute group-open:rotate-90 transition-all"></div>
                        </div>
                      </div>
                    </summary>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or browse different categories</p>
            </div>
          )}
        </div>

        {/* Contact Options */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Our support team is here to assist you 24/7</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <p className="text-sky-600 font-medium mb-4">{option.contact}</p>
                  <Button variant="outline" size="sm">
                    {option.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;