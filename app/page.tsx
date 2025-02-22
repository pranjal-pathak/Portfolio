'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Add this type definition after the imports
interface CollapsiblePointsProps {
  points: string[];
  visiblePoints?: number;
  isMobile: boolean;
}
import {
  
  Briefcase,
  Code2,
  Contact,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layout,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  
  User,
  Blocks,
  ServerIcon,
  Wrench,
  Palette,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ThemeToggle from '../components/ui/theme-toggle';

// Update the skillCategories with more appropriate icons
const skillCategories = {
  'Frontend Development': {
    icon: <Blocks className="w-4 h-4" />,
    color: 'from-[#3b82f6] to-[#1d4ed8]', // Refined blue gradient
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Chakra UI',
      'ShadCN',
    ],
  },
  'Backend & APIs': {
    icon: <ServerIcon className="w-4 h-4" />,
    color: 'from-[#22c55e] to-[#15803d]', // Refined green gradient
    skills: ['Node.js', 'GraphQL', 'REST APIs', 'PostgreSQL', 'Firestore'],
  },
  'Tools, Hosting & Deployment': {
    icon: <Wrench className="w-4 h-4" />,
    color: 'from-[#a855f7] to-[#7e22ce]', // Refined purple gradient
    skills: [
      'Git',
      'Docker',
      'Webpack',
      'Vite',
      'Babel',
      'Vercel',
      'Netlify',
      'CI/CD',
      'Firestore',
    ],
  },
  'Design & UI': {
    icon: <Palette className="w-4 h-4" />,
    color: 'from-[#f97316] to-[#c2410c]', // Refined orange gradient
    skills: ['Figma', 'Material UI', 'Framer Motion', 'UI/UX Design'],
  },
};

const projects = [
  {
    title: 'NimbleEdge Website',
    description:
      'An interactive, responsive website for NimbleEdge, a seed-funded AI startup. Features modular components, carousels, interactive flow diagrams, and feature cards.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    image: '/1.svg',
    github: 'https://github.com/pranjal-pathak/NimbleEdge-Website',
    live: 'https://nimble-edge.vercel.app/',
  },
  {
    title: 'Biopharma Research Trends Analyzer',
    description:
      'A web app for analyzing biopharma research trends with interactive charts, advanced filtering, and rich data tables.',
    technologies: ['HTML', 'CSS', 'Vanilla JS', 'Chart.JS'],
    image: '/2.svg',
    github: 'https://github.com/pranjal-pathak/Bootcamp_Pranjal_Pathak/tree/main/project',
    live: 'https://nexus365.netlify.app/',
  },
  {
    title: 'Keeper',
    description:
      'A bookmarking tool for coding problems, allowing users to save, categorize, and search challenges with ease.',
    technologies: ['HTML', 'CSS', 'Vanilla JS', 'Bootstrap', 'Local Storage'],
    image: '/3.svg',
    github: 'https://github.com/pranjal-pathak/Keeper',
    live: 'https://keeper-1.netlify.app/#',
  },
  {
    title: 'Task-Buddy',
    description:
      'A to-do list app for task management with authentication, edit/delete options, and a strike-off feature for completed tasks.',
    technologies: ['React', 'Tailwind', 'Firestore DB'],
    image: '/4.svg',
    github: 'https://github.com/pranjal-pathak/Task-Buddy',
    live: 'https://taskbuddy-510.web.app/',
  },
];


const CollapsiblePoints = ({ points, visiblePoints = 3, isMobile }: CollapsiblePointsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If not mobile, show all points
  if (!isMobile) {
    return (
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    );
  }

  // Mobile view with collapsible behavior
  const visibleContent = isExpanded ? points : points.slice(0, visiblePoints);

  return (
    <div className="space-y-2">
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
        {visibleContent.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {points.length > visiblePoints && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mt-2"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
};
 




export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] dark:from-background dark:to-background/95 text-foreground transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 z-50"
        style={{ scaleX }}
      />
      {/* Main container */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8"
        >
          <div className="flex items-center space-x-6">
            {' '}
            {/* Increased spacing between image and text */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/50 to-blue-600/50 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-background">
                {' '}
                {/* Reduced image size */}
                <Image
                  src="/pp.jpg"
                  alt="Pranjal Pathak"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                {' '}
                {/* Reduced size and weight */}
                Pranjal Pathak
              </h1>
              <p className="text-lg text-muted-foreground mt-1">Front-end Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                <Link href="mailto:pranjalpathak510@gmail.com">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                <Link
                  href="https://github.com/pranjal-pathak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                <Link
                  href="https://www.linkedin.com/in/pranjal-pathak-052605243/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500/90 via-blue-600/90 to-blue-700/90 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 transition-all duration-300 text-white shadow-md hover:shadow-lg"
            >
              <Link
                href="/Pranjal_Pathak.pdf"
                download="Pranjal_Pathak.pdf" // Forces download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Link>
            </Button>
          </div>
        </motion.header>

        {/* Navigation Pills */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {[
            { href: '#about', icon: <User className="w-4 h-4" />, label: 'About' },
            { href: '#experience', icon: <Briefcase className="w-4 h-4" />, label: 'Experience' },
            { href: '#projects', icon: <Briefcase className="w-4 h-4" />, label: 'Projects' },
            { href: '#skills', icon: <Code2 className="w-4 h-4" />, label: 'Skills' },
            { href: '#education', icon: <GraduationCap className="w-4 h-4" />, label: 'Education' },
            { href: '#contact', icon: <Contact className="w-4 h-4" />, label: 'Contact' },
          ].map(({ href, icon, label }) => (
            <Button
              key={href}
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Link href={href}>
                <span className="w-3 h-3 md:w-4 md:h-4">{icon}</span>
                <span className="ml-1 md:ml-2 text-xs md:text-sm">{label}</span>
              </Link>
            </Button>
          ))}
        </motion.nav>

        <main className="space-y-24">
          {/* About Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <User className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-semibold">About Me</h2>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 pointer-events-none" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                    Building for the Web, One Line at a Time
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    I&apos;m a <strong>Front-End Developer</strong> who loves building intuitive,
                    high-performance web applications with <strong>JavaScript</strong> and it&apos;s
                    ecosystem — React, Next.js, D3.js, and Eleventy. Whether it&apos;s crafting
                    seamless user interfaces or data-driven visualizations, I strive to make every
                    experience both functional and elegant. <strong>Problem-solving</strong> is at
                    the core of my work, with 1000+ challenges tackled across{' '}
                    <strong>LeetCode</strong> and <strong>InterviewBit Scaler</strong>. I enjoy
                    breaking down complex problems and finding the most effective solutions.
                  </p>
                  {/* Professional Badges - Consistent styling */}
                  <div className="flex flex-wrap gap-4 items-center mb-8">
                    {/* Experience Badge */}
                    <Link href={'#experience'}>
                      <div className="px-4 py-2 border rounded-md bg-muted/30 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-gray-500 " />
                        <span>1+ Years Experience</span>
                      </div>
                    </Link>

                    {/* LeetCode Profile */}
                    <Link
                      href="https://leetcode.com/u/PranjalPathak/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
                    >
                      <Image
                        src="/leetcode.png"
                        alt="LeetCode"
                        width={20}
                        height={20}
                        unoptimized
                      />
                      LeetCode Profile
                    </Link>

                    {/* Scaler Profile */}
                    <Link
                      href="https://www.scaler.com/academy/profile/63534114732e/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
                    >
                      <Image
                        src="/scaler.svg"
                        alt="Scaler Logo"
                        width={20} // Set appropriate width
                        height={20} // Set appropriate height
                        priority // Optional for better performance
                      />
                      Scaler Profile
                    </Link>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    Beyond the coding desk, I find creativity in curating{' '}
                    <strong>Spotify playlists</strong>, exploring cinema through my ever-growing{' '}
                    <strong>Letterboxd</strong> watchlist, and staying connected to
                    <strong> cricket</strong> -whether playing or following the game. These passions
                    fuel my curiosity, shape my perspective, and often inspire the way I approach
                    challenges in both code and life.
                  </p>
                  {/* Personal Interest Links - Matching style with professional badges */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <Link
                      href="https://open.spotify.com/user/o7qxsehhvtnws316i5xuiowkt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-[#1DB954]"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                      Spotify
                    </Link>

                    <Link
                      href="https://letterboxd.com/PranjalPathak/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors flex items-center gap-2"
                    >
                      <Image
                        src="/letterboxd.png"
                        alt="Letterboxd"
                        width={20}
                        height={20}
                        unoptimized
                      />
                      Letterboxd
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-semibold">Experience</h2>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg overflow-hidden">
              <CardHeader className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 pointer-events-none" />
                <div className="relative">
                  <CardTitle className="text-xl flex items-center space-x-3">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      <div
                        className="w-2 h-2 bg-gradient-to-r from-primary to-blue-500 rounded-full 
                ring-2 ring-primary/30 ring-offset-2 ring-offset-background
                transition-all duration-300 group-hover:scale-125 group-hover:ring-primary/50"
                      />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                      Front-end Engineer at Aganitha Cognitive Solutions
                    </span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground ml-5 mt-1">
                    October 2023 - Present • Hyderabad, India
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 space-y-8">
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground text-md">
                    Developed <strong>high-performance front-end applications</strong> for
                    enterprise clients in
                    <strong> BioTech, Pharma & Consumer Goods</strong>, enabling R&D scientists to
                    process and visualize <strong>massive datasets</strong>. Focused on optimizing{' '}
                    <strong>speed, interactivity, and user experience</strong>. Engineered intuitive{' '}
                    <strong>data visualizations</strong> and interactive dashboards, ensuring
                    seamless analysis and decision-making.
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                    Key Projects
                  </h4>

                  <div className="space-y-6">
                    {/* DISTILL Project */}
                    <div className="bg-muted/30 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600" />
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h5 className="font-medium text-lg mb-3 text-primary">
                        DISTILL: <strong>AI-Powered Research Assistant</strong> for Single-Cell RNA
                        Sequencing
                      </h5>
                      <p className="text-sm md:text-base text-muted-foreground mb-4">
                        Created <strong>responsive React front-end app</strong> for analyzing and
                        interpreting complex <strong>single-cell RNA sequencing</strong> data
                      </p>
                      <CollapsiblePoints
                        points={[
                          'Designed user interface from scratch on Figma following UI/UX design principles',
                          'Leveraged React libraries: Chakra UI, React Flow, Framer Motion, AG Grid, and React Select for dynamic user interfaces',
                          'Created interactive data visualizations with D3.js (UMAPs, box plots, differential gene expression plots)',
                          'Developed custom box and lasso selection features for data manipulation',
                          'Built mapping dashboard with React DnD for study comparison and meta-analysis',
                          'Integrated FastAPI for full CRUD functionality',
                          'Configured Dockerfiles and Nginx for internal server deployment',
                        ]}
                        isMobile={isMobile}
                      />
                      <div className="mt-4 ">
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/10 text-primary text-sm block"
                        >
                          Tool purchased by multiple leading global pharma clients with pipeline
                          expansion
                        </Badge>
                      </div>
                    </div>

                    {/* Odor Informatics Project - Updated to Use CollapsiblePoints */}
                    <div className="bg-muted/30 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600" />
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h5 className="font-medium text-lg mb-3 text-primary">
                        Odor Informatics: <strong>Chemical Compound Research Tool</strong>
                      </h5>
                      <p className="text-muted-foreground mb-4 text-sm md:text-base">
                        Built for <strong>$6Bn+ annual revenue FMCG client</strong> to streamline
                        chemical compound research.
                      </p>
                      <CollapsiblePoints
                        points={[
                          'Processed & analyzed data from 12,000+ scientific papers',
                          'Implemented user authentication (signup/sign-in)',
                          'Built PDF reader with annotation capabilities',
                          'Added CSV download functionality & in-app note-taking',
                          'Created advanced filtering & sorting with AG Grid',
                          'Optimized REST API integrations & Docker deployment',
                        ]}
                        isMobile={isMobile}
                      />

                      <div className="mt-4">
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/10 text-primary text-sm block"
                        >
                          Extensively used by client&apos;s R&D team to identify focus compounds
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <Layout className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-semibold">Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden group h-full flex flex-col rounded-lg">
                    <div className="relative w-full h-48">
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-2 right-2 flex space-x-2">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/80 hover:bg-primary/80 p-2 rounded-full transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span className="sr-only">View Source Code</span>
                          </Link>
                        )}
                        {project.live && (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-background/80 hover:bg-primary/80 p-2 rounded-full transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="sr-only">View Live Project</span>
                          </Link>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6 flex-grow flex flex-col">
                      <h3 className="font-semibold text-base md:text-lg mb-2 text-primary">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-muted/50 text-foreground hover:bg-muted/70 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-semibold">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skillCategories).map(([category, { icon, color, skills }]) => (
                <Card key={category} className="overflow-hidden group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg group-hover:text-primary transition-colors">
                      {icon}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            className={`text-xs md:text-sm bg-gradient-to-r ${color} text-white hover:opacity-90 transition-opacity`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            id="education"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-semibold">Education</h2>
            </div>

            {/* College Education */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg overflow-hidden">
              <CardContent className="p-4 md:p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 pointer-events-none" />
                <div className="relative">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                        B.Tech, Civil Engineering
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        JSS Academy of Technical Education, Noida
                      </p>
                    </div>
                    <div className="md:text-right">
                      <Badge variant="outline" className="mb-2 border-primary/30 text-foreground">
                        2016 - 2020
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scaler Academy */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg overflow-hidden">
              <CardContent className="p-4 md:p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 pointer-events-none" />
                <div className="relative">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="text-sm md:text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                        Scaler Academy
                      </h3>
                      <p className="text-muted-foreground">Computer Science</p>
                    </div>
                    <div className="md:text-right">
                      <Badge variant="outline" className="mb-2 border-primary/30 text-foreground">
                        2022 - 2023
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Contact Section */}
          {/* Contact Section */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 mb-8">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-semibold">Get In Touch</h2>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg overflow-hidden">
              <CardContent className="p-4 md:p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 pointer-events-none" />
                <div className="relative">
                  <p className="text-sm md:text-base text-muted-foreground mb-8">
                    I&apos;m currently open to new opportunities and collaborations. Whether you
                    have a project in mind or just want to connect, I&apos;d love to hear from you!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email */}
                    <Link
                      href="mailto:pranjalpathak510@gmail.com"
                      className="flex flex-col items-center p-6 bg-muted/30 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-all group"
                    >
                      <Mail className="h-6 w-6 mb-3 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-foreground mb-1">Email</span>
                      <span className="text-sm text-muted-foreground">
                        pranjalpathak510@gmail.com
                      </span>
                    </Link>

                    {/* Phone with Copy to Clipboard and Tooltip */}
                    <div className="relative flex flex-col items-center">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('+91 8130703086');
                          setShowTooltip(true); // Show tooltip
                          setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
                        }}
                        className="flex flex-col items-center p-6 bg-muted/30 rounded-lg border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all group w-full"
                      >
                        <Phone className="h-6 w-6 mb-3 text-blue-500 group-hover:scale-110 transition-transform" />
                        <span className="text-foreground mb-1">Phone</span>
                        <span className="text-sm text-muted-foreground">+91 8130703086</span>
                      </button>
                      {showTooltip && ( // Conditionally render the tooltip
                        <div className="absolute -top-8 bg-black text-white text-sm px-2 py-1 rounded-md">
                          Copied!
                        </div>
                      )}
                    </div>

                    {/* LinkedIn */}
                    <Link
                      href="https://www.linkedin.com/in/pranjal-pathak-052605243/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-6 bg-muted/30 rounded-lg border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all group"
                    >
                      <Linkedin className="h-6 w-6 mb-3 text-purple-500 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground mb-1">LinkedIn</span>
                      <span className="text-sm text-muted-foreground">pranjal-pathak</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Pranjal Pathak. All rights reserved.
            </p>
            <nav className="hidden md:flex gap-4">
              {[
                { href: '#about', label: 'About' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#education', label: 'Education' },
                { href: '#contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
