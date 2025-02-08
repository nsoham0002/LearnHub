export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  progress: number;
  modules: Module[];
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  studentsEnrolled: number;
  lastUpdated: string;
  skills: string[];
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  description: string;
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'link' | 'exercise';
  url: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  role: 'student' | 'instructor';
  joinedDate: string;
  completedCourses: number;
  inProgressCourses: number;
  certificates: Certificate[];
  preferences: {
    emailNotifications: boolean;
    darkMode: boolean;
    language: string;
  };
}

export interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  issueDate: string;
  credential: string;
}