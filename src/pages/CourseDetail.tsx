import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, CheckCircle, Clock, User, Users, Star, Calendar, Download, Link as LinkIcon, BookOpen } from 'lucide-react';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const [selectedModule, setSelectedModule] = useState(course?.modules[0]);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {course.category}
                </span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-1" />
                  <span>{course.studentsEnrolled.toLocaleString()} students</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-1" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="font-medium">{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-8">{course.description}</p>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills You'll Learn</h2>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {selectedModule && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Module</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2">{selectedModule.title}</h3>
                    <p className="text-gray-600 mb-4">{selectedModule.description}</p>
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                      {/* Video player would go here */}
                      <div className="w-full h-full flex items-center justify-center">
                        <Play className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                    {selectedModule.resources.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Resources</h4>
                        <div className="space-y-2">
                          {selectedModule.resources.map(resource => (
                            <a
                              key={resource.id}
                              href={resource.url}
                              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
                            >
                              {resource.type === 'pdf' ? (
                                <Download className="h-4 w-4" />
                              ) : (
                                <LinkIcon className="h-4 w-4" />
                              )}
                              <span>{resource.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Course Content</h2>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-gray-400 mr-1" />
                <span>{course.modules.length} modules</span>
              </div>
            </div>

            <div className="space-y-4">
              {course.modules.map(module => (
                <div 
                  key={module.id}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedModule?.id === module.id
                      ? 'bg-indigo-50 border border-indigo-100'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedModule(module)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Play className="h-5 w-5 text-indigo-600" />
                      )}
                      <h3 className="font-medium text-gray-900">{module.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{module.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}