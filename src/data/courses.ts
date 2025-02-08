import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build real-world projects and master modern web development practices.',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    duration: '6 hours',
    progress: 65,
    category: 'Web Development',
    level: 'Beginner',
    rating: 4.8,
    studentsEnrolled: 1234,
    lastUpdated: '2024-03-15',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    modules: [
      {
        id: 'm1',
        title: 'HTML Basics',
        duration: '1h 30m',
        videoUrl: 'https://www.youtube.com/embed/sample1',
        completed: true,
        description: 'Learn the building blocks of web pages and document structure.',
        resources: [
          {
            id: 'r1',
            title: 'HTML5 Cheat Sheet',
            type: 'pdf',
            url: '#'
          }
        ]
      },
      {
        id: 'm2',
        title: 'CSS Fundamentals',
        duration: '2h',
        videoUrl: 'https://www.youtube.com/embed/sample2',
        completed: true,
        description: 'Master styling and layout techniques for modern websites.',
        resources: [
          {
            id: 'r3',
            title: 'CSS Grid Guide',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science, statistics, and Python programming. Learn to analyze real-world data and build predictive models.',
    instructor: 'Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    duration: '8 hours',
    progress: 25,
    category: 'Data Science',
    level: 'Intermediate',
    rating: 4.9,
    studentsEnrolled: 2156,
    lastUpdated: '2024-03-10',
    skills: ['Python', 'Statistics', 'Data Analysis', 'Machine Learning'],
    modules: [
      {
        id: 'm1',
        title: 'Introduction to Python',
        duration: '2h',
        videoUrl: 'https://www.youtube.com/embed/sample4',
        completed: true,
        description: 'Get started with Python programming for data science.',
        resources: [
          {
            id: 'r5',
            title: 'Python Setup Guide',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native. Learn to create beautiful, native mobile experiences.',
    instructor: 'Alex Turner',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
    duration: '10 hours',
    progress: 0,
    category: 'Mobile Development',
    level: 'Advanced',
    rating: 4.7,
    studentsEnrolled: 1876,
    lastUpdated: '2024-03-01',
    skills: ['React Native', 'JavaScript', 'Mobile UI/UX', 'API Integration'],
    modules: [
      {
        id: 'm1',
        title: 'React Native Basics',
        duration: '2h 30m',
        videoUrl: 'https://www.youtube.com/embed/sample7',
        completed: false,
        description: 'Introduction to React Native components and styling.',
        resources: [
          {
            id: 'r8',
            title: 'Setup Guide',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'UI/UX Design Masterclass',
    description: 'Master the principles of user interface and user experience design. Learn to create beautiful and functional designs.',
    instructor: 'Emma Rodriguez',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    duration: '12 hours',
    progress: 15,
    category: 'Design',
    level: 'Intermediate',
    rating: 4.9,
    studentsEnrolled: 3421,
    lastUpdated: '2024-03-05',
    skills: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    modules: [
      {
        id: 'm1',
        title: 'Design Principles',
        duration: '3h',
        videoUrl: 'https://www.youtube.com/embed/sample9',
        completed: true,
        description: 'Learn fundamental design principles and color theory.',
        resources: [
          {
            id: 'r10',
            title: 'Design Resources Pack',
            type: 'link',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Advanced JavaScript and Modern ES6+',
    description: 'Deep dive into advanced JavaScript concepts, modern ES6+ features, and best practices for professional development.',
    instructor: 'David Miller',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1000',
    duration: '14 hours',
    progress: 0,
    category: 'Web Development',
    level: 'Advanced',
    rating: 4.9,
    studentsEnrolled: 2890,
    lastUpdated: '2024-03-18',
    skills: ['JavaScript', 'ES6+', 'Async/Await', 'Design Patterns'],
    modules: [
      {
        id: 'm1',
        title: 'Modern JavaScript Features',
        duration: '3h',
        videoUrl: 'https://www.youtube.com/embed/sample10',
        completed: false,
        description: 'Explore modern JavaScript features and their practical applications.',
        resources: [
          {
            id: 'r11',
            title: 'ES6+ Cheat Sheet',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Cloud Computing with AWS',
    description: 'Learn to build and deploy scalable applications using Amazon Web Services (AWS) cloud platform.',
    instructor: 'Jennifer Lee',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    duration: '16 hours',
    progress: 0,
    category: 'Cloud Computing',
    level: 'Intermediate',
    rating: 4.8,
    studentsEnrolled: 1567,
    lastUpdated: '2024-03-12',
    skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Serverless'],
    modules: [
      {
        id: 'm1',
        title: 'AWS Fundamentals',
        duration: '4h',
        videoUrl: 'https://www.youtube.com/embed/sample11',
        completed: false,
        description: 'Introduction to AWS services and cloud concepts.',
        resources: [
          {
            id: 'r12',
            title: 'AWS Services Overview',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'Artificial Intelligence Fundamentals',
    description: 'Explore the basics of AI, machine learning algorithms, and their practical applications in solving real-world problems.',
    instructor: 'Robert Chang',
    thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000',
    duration: '20 hours',
    progress: 0,
    category: 'Artificial Intelligence',
    level: 'Advanced',
    rating: 4.9,
    studentsEnrolled: 1890,
    lastUpdated: '2024-03-08',
    skills: ['Machine Learning', 'Neural Networks', 'Python', 'TensorFlow'],
    modules: [
      {
        id: 'm1',
        title: 'Introduction to AI',
        duration: '4h',
        videoUrl: 'https://www.youtube.com/embed/sample12',
        completed: false,
        description: 'Understanding AI concepts and applications.',
        resources: [
          {
            id: 'r13',
            title: 'AI Fundamentals Guide',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '8',
    title: 'Digital Marketing Mastery',
    description: 'Master modern digital marketing strategies, SEO, social media marketing, and analytics to grow your online presence.',
    instructor: 'Lisa Anderson',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000',
    duration: '15 hours',
    progress: 0,
    category: 'Marketing',
    level: 'Beginner',
    rating: 4.7,
    studentsEnrolled: 2345,
    lastUpdated: '2024-03-14',
    skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    modules: [
      {
        id: 'm1',
        title: 'Digital Marketing Overview',
        duration: '3h',
        videoUrl: 'https://www.youtube.com/embed/sample13',
        completed: false,
        description: 'Introduction to digital marketing channels and strategies.',
        resources: [
          {
            id: 'r14',
            title: 'Marketing Strategy Template',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '9',
    title: 'Blockchain Development',
    description: 'Learn to build decentralized applications (DApps) using blockchain technology and smart contracts.',
    instructor: 'Marcus Wilson',
    thumbnail: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000',
    duration: '18 hours',
    progress: 0,
    category: 'Blockchain',
    level: 'Advanced',
    rating: 4.8,
    studentsEnrolled: 1234,
    lastUpdated: '2024-03-16',
    skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'Ethereum'],
    modules: [
      {
        id: 'm1',
        title: 'Blockchain Basics',
        duration: '4h',
        videoUrl: 'https://www.youtube.com/embed/sample14',
        completed: false,
        description: 'Understanding blockchain technology and its applications.',
        resources: [
          {
            id: 'r15',
            title: 'Blockchain Fundamentals',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  },
  {
    id: '10',
    title: 'Game Development with Unity',
    description: 'Create engaging 2D and 3D games using Unity game engine and C# programming language.',
    instructor: 'Chris Parker',
    thumbnail: 'https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=1000',
    duration: '25 hours',
    progress: 0,
    category: 'Game Development',
    level: 'Intermediate',
    rating: 4.9,
    studentsEnrolled: 1678,
    lastUpdated: '2024-03-17',
    skills: ['Unity', 'C#', '2D/3D Graphics', 'Game Design'],
    modules: [
      {
        id: 'm1',
        title: 'Unity Fundamentals',
        duration: '5h',
        videoUrl: 'https://www.youtube.com/embed/sample15',
        completed: false,
        description: 'Getting started with Unity game engine.',
        resources: [
          {
            id: 'r16',
            title: 'Unity Best Practices',
            type: 'pdf',
            url: '#'
          }
        ]
      }
    ]
  }
];