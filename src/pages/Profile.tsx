import React from 'react';
import { User, Mail, Calendar, Award, BookOpen, Settings, Download } from 'lucide-react';

const userProfile = {
  id: '1',
  name: 'Soham Naik',
  email: 'soham.naik@example.com',
  avatar: '/src/assets/soham photo.jpg',
  bio: 'Passionate learner | Web Developer | Data Science Enthusiast',
  role: 'student',
  joinedDate: '2023-01-15',
  completedCourses: 8,
  inProgressCourses: 3,
  certificates: [
    {
      id: 'cert1',
      courseId: '1',
      courseName: 'Introduction to Web Development',
      issueDate: '2024-02-15',
      credential: 'WD-2024-001'
    },
    {
      id: 'cert2',
      courseId: '2',
      courseName: 'Data Science Fundamentals',
      issueDate: '2024-03-01',
      credential: 'DS-2024-002'
    }
  ],
  preferences: {
    emailNotifications: true,
    darkMode: false,
    language: 'English'
  }
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {userProfile.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">{userProfile.bio}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>{userProfile.email}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>Joined {userProfile.joinedDate}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Award className="h-5 w-5 mr-3" />
                  <span>{userProfile.completedCourses} Courses Completed</span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <Settings className="h-5 w-5 mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Current Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Current Progress
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Completed Courses</span>
                    <span className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                      {userProfile.completedCourses}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-400 rounded-full h-2"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-400">In Progress</span>
                    <span className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                      {userProfile.inProgressCourses}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-indigo-600 dark:bg-indigo-400 rounded-full h-2"
                      style={{ width: '30%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Certificates
              </h2>
              <div className="space-y-4">
                {userProfile.certificates.map(certificate => (
                  <div
                    key={certificate.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <Award className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                          {certificate.courseName}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Issued on {certificate.issueDate}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Credential: {certificate.credential}
                        </p>
                      </div>
                    </div>
                    <button className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                      <Download className="h-5 w-5 mr-1" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}