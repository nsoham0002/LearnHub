import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Users, Star, BookOpen, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-indigo-600">
            {course.level}
          </span>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-indigo-600">{course.category}</span>
            <span className="text-gray-300">•</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-sm text-gray-600">{course.rating}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
          <p className="text-gray-600 line-clamp-2 mb-4">{course.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {course.skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index}
                className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            {course.skills.length > 3 && (
              <span className="text-gray-500 text-xs">+{course.skills.length - 3} more</span>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{course.instructor}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{course.studentsEnrolled.toLocaleString()} students</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{course.modules.length} modules</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    {course.progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                <div 
                  style={{ width: `${course.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center text-indigo-600 font-medium">
            <span>View Course</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}