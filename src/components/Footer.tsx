import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">LearnHub</span>
            </div>
            <p className="text-indigo-200 mb-4">
              Empowering learners worldwide with quality education and practical skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-100 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                  My Progress
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-100 uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-100 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="text-indigo-300">support@learnhub.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="text-indigo-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="text-indigo-300">123 Learning Street, Education City, 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-800">
          <p className="text-center text-indigo-300">
            © {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}