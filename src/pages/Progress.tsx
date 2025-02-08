import React from 'react';
import { courses } from '../data/courses';
import { BarChart2 } from 'lucide-react';

export default function Progress() {
  const overallProgress = courses.reduce((acc, course) => acc + course.progress, 0) / courses.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-8">
          <BarChart2 className="h-8 w-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Your Progress</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Overall Progress</h2>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-right">
                <span className="text-sm font-semibold inline-block text-indigo-600">
                  {Math.round(overallProgress)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-indigo-200">
              <div 
                style={{ width: `${overallProgress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
              ></div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Progress</h2>
        <div className="space-y-6">
          {courses.map(course => (
            <div key={course.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-900">{course.title}</h3>
                <span className="text-sm font-semibold text-indigo-600">
                  {course.progress}%
                </span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-200">
                <div 
                  style={{ width: `${course.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}