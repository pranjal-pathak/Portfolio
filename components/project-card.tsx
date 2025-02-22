'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  impactColor?: string;
  bulletPoints?: string[];
}

export function ProjectCard({
  title,
  description,
  technologies,
  impact,
  impactColor = 'primary',
  bulletPoints = [],
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="relative overflow-hidden bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black/50" />
        <CardContent className="relative p-6">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />

          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-zinc-400 mb-4">{description}</p>

          {bulletPoints.length > 0 && (
            <ul className="space-y-2 mb-4">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-zinc-400">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-primary/50" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-zinc-800/50 text-zinc-300 border-zinc-700/50"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <p className={`text-sm italic font-medium text-${impactColor}`}>{impact}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
