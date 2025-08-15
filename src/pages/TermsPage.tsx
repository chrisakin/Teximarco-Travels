import React from 'react';
import { FileText, AlertTriangle, CreditCard, Shield } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';

const TermsPage = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        {
          text: 'By accessing and using Texitravels services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
        },
        {
          text: 'These terms apply to all visitors, users, and others who access or use our services, including our website, mobile applications, and any related services.',
        },
      ],
    },
    {
      title: 'Service Description',
      icon: Shield,
      content: [
        {
          text: 'Texitravels is a travel booking platform that provides access to flights, hotels, visa services, and other travel-related services. We act as an intermediary between you and travel service providers.',
        },
        {
          text: 'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.',
        },
      ],
    },
    {
      title: 'Booking and Payment Terms',
      icon: CreditCard,
      content: [
        {
          text: 'All bookings are subject to availability and confirmation by the relevant service provider. Prices are subject to change until payment is completed and booking is confirmed.',
        },
        {
          text: 'Payment must be made in full at the time of booking unless otherwise specified. We accept major credit cards, debit cards, and other payment methods as displayed on our platform.',
        },
        {
          text: 'Cancellation and modification policies vary by service provider and are clearly stated during the booking process. Additional fees may apply for changes or cancellations.',
        },
      ],
    },
    {
      title: 'User Responsibilities',
      icon: AlertTriangle,
      content: [
        {
          text: 'You are responsible for providing accurate and complete information when making bookings. Any errors in information provided may result in additional charges or booking cancellation.',
        },
        {
          text: 'You must ensure that you have all necessary travel documents, including valid passports, visas, and health certificates, before traveling.',
        },
        {
          text: 'You agree to use our services only for lawful purposes and in accordance with these terms and applicable laws.',
        },
      ],
    },
  ];

  const prohibitedActivities = [
    'Using our services for any illegal or unauthorized purpose',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with or disrupting our services',
    'Transmitting viruses or malicious code',
    'Impersonating another person or entity',
    'Collecting user information without consent',
    'Using automated systems to access our services without permission',
  ];

  return (
    <div>
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services"
        icon={FileText}
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <Card className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Welcome to Texitravels. These Terms of Service ("Terms") govern your use of our website, 
              mobile applications, and services. By using our services, you agree to these terms.
            </p>
            <p>
              These terms constitute a legally binding agreement between you and Texitravels. 
              Please read them carefully and contact us if you have any questions.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Last updated:</strong> January 2025
            </p>
          </div>
        </Card>

        {/* Main Sections */}
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Card key={index} className="mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Icon className="w-6 h-6 text-sky-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-gray-600">{item.text}</p>
                ))}
              </div>
            </Card>
          );
        })}

        {/* Prohibited Activities */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prohibited Activities</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <div className="space-y-2">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The content, features, and functionality of our services are owned by Texitravels 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works of our content 
              without our express written permission.
            </p>
          </div>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Texitravels acts as an intermediary between you and travel service providers. 
              We are not responsible for the actions, errors, omissions, or breaches of contract 
              by third-party service providers.
            </p>
            <p>
              To the maximum extent permitted by law, Texitravels shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from 
              your use of our services.
            </p>
            <p>
              Our total liability to you for any claims arising from these terms or your use 
              of our services shall not exceed the amount you paid to us in the 12 months 
              preceding the claim.
            </p>
          </div>
        </Card>

        {/* Force Majeure */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Force Majeure</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We shall not be liable for any failure or delay in performance under these terms 
              due to circumstances beyond our reasonable control, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Natural disasters, pandemics, or other acts of God</li>
              <li>War, terrorism, or civil unrest</li>
              <li>Government actions or regulations</li>
              <li>Labor strikes or disputes</li>
              <li>Technical failures or cyber attacks</li>
            </ul>
          </div>
        </Card>

        {/* Privacy */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, 
              use, and protect your information when you use our services.
            </p>
            <p>
              By using our services, you agree to the collection and use of information 
              in accordance with our Privacy Policy.
            </p>
          </div>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              These terms shall be governed by and construed in accordance with the laws of Nigeria, 
              without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising from these terms or your use of our services shall be subject 
              to the exclusive jurisdiction of the courts of Lagos, Nigeria.
            </p>
          </div>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We reserve the right to modify these terms at any time. We will notify you of 
              any material changes by posting the updated terms on our website and updating 
              the "Last updated" date.
            </p>
            <p>
              Your continued use of our services after any changes constitutes acceptance 
              of the new terms.
            </p>
          </div>
        </Card>

        {/* Contact Information */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@texitravels.com</p>
                <p><strong>Phone:</strong> +234 800 TEXI (8394)</p>
                <p><strong>Address:</strong> 123 Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsPage;