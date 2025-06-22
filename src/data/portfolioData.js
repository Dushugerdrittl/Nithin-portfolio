import { FaAndroid, FaJava, FaReact } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiDart, SiJavascript, SiHtml5, SiCss3, SiGit, SiFirebase } from 'react-icons/si';

export const skills = [
  { name: 'Android', icon: <FaAndroid className="h-8 w-8" />, color: 'text-green-400' },
  { name: 'Flutter', icon: <SiFlutter className="h-8 w-8" />, color: 'text-blue-400' },
  { name: 'Kotlin', icon: <SiKotlin className="h-8 w-8" />, color: 'text-purple-500' },
  { name: 'Java', icon: <FaJava className="h-8 w-8" />, color: 'text-red-500' },
  { name: 'Dart', icon: <SiDart className="h-8 w-8" />, color: 'text-cyan-400' },
  { name: 'React', icon: <FaReact className="h-8 w-8" />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript className="h-8 w-8" />, color: 'text-yellow-400' },
  { name: 'HTML5', icon: <SiHtml5 className="h-8 w-8" />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <SiCss3 className="h-8 w-8" />, color: 'text-blue-600' },
  { name: 'Firebase', icon: <SiFirebase className="h-8 w-8" />, color: 'text-yellow-500' },
  { name: 'Git', icon: <SiGit className="h-8 w-8" />, color: 'text-red-600' },
];

export const projects = [
  {
    title: 'Customer Segmentation for Marketing using K-means Clustering',
    description: 'I implemented Customer Segmentation for Marketing using clustering techniques, analyzing customer behavior to identify distinct groups. I leveraged machine learning algorithms like K Means and DBSCAN to optimize targeted marketing strategies.',
    tags: ['Data Science', 'Clustering', 'Python', 'Marketing'],
    imageUrl: '/images/p_b_1.png', // Updated to local project image path
    sourceUrl: 'https://github.com/Dushugerdrittl/Customer_Segmentation',
  },
  {
    title: 'chatGPT course, Internship -BlackBucks',
    description: 'During my ChatGPT Course, I explored its applications across various software fields, leveraging AI for automation and enhanced user interactions. I integrated ChatGPT into diverse domains like customer support, coding assistance, and data analysis.',
    tags: ['AI', 'ChatGPT', 'Automation', 'Data Analysis'],
    imageUrl: '/images/I_1.jpg', // Updated to user provided card background image path
    sourceUrl: '/images/AI_intern.png',
    sourceLabel: 'View Certification',
  },
  {
    title: 'AIML and Data Science, Internship -Henotic Technologie Pvt Ltd',
    description: 'During my AI/ML & Data Science Internship, I developed a predictive model to assess bank loan repayment probabilities, leveraging machine learning techniques. I optimized feature selection and data processing to enhance accuracy and reliability.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Provider'],
    imageUrl: '/images/I_2.jpg', // Updated to user provided card background image path
    liveUrl: 'https://play.google.com/store/apps/details?id=com.example.fitness',
    sourceUrl: '/images/AIML_intern.jpg',
    sourceLabel: 'View Certification',
  },
  {
    title: 'Full Stack Development (Java), Internship -SkillDzire Pvt Ltd',
    description: 'I developed a sales webpage during my Full Stack Development Internship, enhancing UI/UX and backend efficiency. I optimized database interactions and ensured responsiveness for seamless user experience.',
    tags: ['Android', 'Java', 'XML', 'WebSocket'],
    imageUrl: '/images/I_3.jpg', // Updated to new image path as per user
    sourceUrl: '/images/FullStack_intern.jpg', // Updated to new certificate image path as per user
    sourceLabel: 'View Certification',
  },
  {
    title: 'own project-Budget_calculator_android_app',
    description: 'A delightfully themed budgeting app wrapped in a soft pink palette and subtle Hello Kitty charm. Built with a clean, intuitive layout, this Android app lets users track expenses, categorize budgets, and visualize their savings goals',
    tags: ['Android', 'Java', 'XML', 'WebSocket'],
    imageUrl: '/images/budget_cal.jpg', // Updated to new image path as per user
    sourceUrl: 'https://github.com/Dushugerdrittl/Budget_calculator', // Updated to user provided source code URL
    sourceLabel: 'Source Code',
  },
];
