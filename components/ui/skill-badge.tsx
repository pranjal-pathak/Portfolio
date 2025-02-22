'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  icon: string;
  name: string;
  className?: string;
}

export function SkillBadge({ icon, name, className }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 rounded-full shadow-lg transition-colors',
        'border border-zinc-200 dark:border-zinc-800',
        'hover:border-zinc-300 dark:hover:border-zinc-700',
        className
      )}
    >
      <Image
        src={icon || '/placeholder.svg'}
        alt={name}
        width={20}
        height={20}
        className="w-5 h-5"
      />
      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{name}</span>
    </motion.div>
  );
}
