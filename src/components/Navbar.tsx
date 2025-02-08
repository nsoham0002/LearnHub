import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Layout, BarChart2, User, HelpCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">LearnHub</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Layout className="h-5 w-5" />
              <span>Courses</span>
            </Link>
            
            <Link to="/progress" className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <BarChart2 className="h-5 w-5" />
              <span>Progress</span>
            </Link>
            
            <Link to="/help" className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <HelpCircle className="h-5 w-5" />
              <span>Help</span>
            </Link>
            
            <Link to="/profile" className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}