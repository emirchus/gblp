'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const tabs = ['Slides', 'Games', 'Assessment'];

export const TopNavigation = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="mb-4 flex w-full items-center justify-center space-x-4">
      {tabs.map(tab => (
        <Button
          key={tab}
          variant={pathname.startsWith(`/${tab.toLowerCase()}`) ? 'outline' : 'ghost'}
          className={cn('rounded-md', {
            'text-muted-foreground/50': !pathname.startsWith(`/${tab.toLowerCase()}`),
          })}
          asChild
        >
          <Link href={`/${tab.toLowerCase()}`}>{tab}</Link>
        </Button>
      ))}
    </div>
  );
};
