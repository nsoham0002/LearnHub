import React from 'react';
import { Search, HelpCircle, MessageCircle, Book, FileText, Mail } from 'lucide-react';

export default function Help() {
  const faqs = [
    {
      question: "How do I start a course?",
      answer: "Simply browse our course catalog, click on a course you're interested in, and click the 'Start Course' button. You can track your progress in the 'Progress' section."
    },
    {
      question: "Can I download course materials?",
      answer: "Yes, most courses offer downloadable resources like PDFs, exercise files, and supplementary materials that you can access from the course modules."
    },
    {
      question: "How do I get a certificate?",
      answer: "Complete all required modules and assignments in a course to receive your certificate. Certificates can be downloaded from your profile page."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Payment details can be managed in your account settings."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Help & Support</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions or reach out to our support team for assistance.
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <MessageCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Chat with our support team in real-time for immediate assistance.
            </p>
            <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300">
              Start Chat →
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <Book className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Knowledge Base</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Browse our comprehensive guides and tutorials.
            </p>
            <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300">
              View Articles →
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <Mail className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Support</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Send us an email and we'll get back to you within 24 hours.
            </p>
            <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300">
              Contact Us →
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}