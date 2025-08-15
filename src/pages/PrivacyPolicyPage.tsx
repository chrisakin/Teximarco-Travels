import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Eye,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect personal information you provide directly to us, such as when you create an account, make a booking, or contact us. This includes your name, email address, phone number, passport information, and payment details.',
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about how you use our services, including your IP address, browser type, device information, pages visited, and the time and date of your visits.',
        },
        {
          subtitle: 'Location Information',
          text: 'With your consent, we may collect location information from your device to provide location-based services and improve your travel experience.',
        },
      ],
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our travel services, process bookings, handle payments, and provide customer support.',
        },
        {
          subtitle: 'Communication',
          text: 'We may use your information to send you service-related communications, marketing materials (with your consent), and important updates about our services.',
        },
        {
          subtitle: 'Personalization',
          text: 'We use your information to personalize your experience, recommend relevant travel options, and improve our AI-powered trip planning features.',
        },
      ],
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We share information with trusted third-party service providers who help us operate our business, such as payment processors, airlines, hotels, and visa processing agencies.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, regulation, or legal process, or to protect the rights, property, or safety of Texitravels, our users, or others.',
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.',
        },
      ],
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        },
        {
          subtitle: 'Encryption',
          text: 'We use industry-standard encryption to protect sensitive information, including payment details and passport information, both in transit and at rest.',
        },
        {
          subtitle: 'Access Controls',
          text: 'We limit access to your personal information to employees and contractors who need it to perform their job functions and are bound by confidentiality obligations.',
        },
      ],
    },
  ];

  const rights = [
    'Access your personal information',
    'Correct inaccurate information',
    'Delete your personal information',
    'Restrict processing of your information',
    'Data portability',
    'Object to processing',
    'Withdraw consent',
  ];

  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        icon={Shield}
        backgroundImage="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <Card className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              At Texitravels, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy explains how we collect, use, share, 
              and protect your information when you use our services.
            </p>
            <p>
              This policy applies to all information collected through our website, mobile applications, 
              and other digital services. By using our services, you agree to the collection and use 
              of information in accordance with this policy.
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
              
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}

        {/* Your Rights */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {rights.map((right, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4">
              To exercise any of these rights, please contact us at privacy@texitravels.com. 
              We will respond to your request within 30 days.
            </p>
          </div>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              Cookies are small data files stored on your device that help us remember your preferences 
              and improve our services.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                <p>Required for the website to function properly and cannot be disabled.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website to improve performance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                <p>Used to deliver personalized advertisements and track campaign effectiveness.</p>
              </div>
            </div>
            <p>
              You can control cookie settings through your browser preferences. However, disabling 
              certain cookies may affect the functionality of our services.
            </p>
          </div>
        </Card>

        {/* International Transfers */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers comply with applicable data protection laws and implement 
              appropriate safeguards to protect your information.
            </p>
            <p>
              When we transfer your information internationally, we use standard contractual clauses 
              approved by relevant authorities or rely on adequacy decisions where available.
            </p>
          </div>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              for which it was collected, comply with legal obligations, resolve disputes, and enforce 
              our agreements.
            </p>
            <p>
              Specific retention periods vary depending on the type of information and the purpose for 
              which it was collected. For example, booking information may be retained for up to 7 years 
              for accounting and legal purposes.
            </p>
          </div>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you are a parent or guardian 
              and believe your child has provided us with personal information, please contact us.
            </p>
            <p>
              If we discover that we have collected personal information from a child under 13, 
              we will take steps to delete such information from our systems.
            </p>
          </div>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or applicable laws. We will notify you of any material changes by posting the updated 
              policy on our website and updating the "Last updated" date.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about 
              how we protect your information.
            </p>
          </div>
        </Card>

        {/* Contact Information */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@texitravels.com</p>
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

export default PrivacyPolicyPage;