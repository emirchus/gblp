import { BookOpen, CheckSquare, Play } from 'lucide-react';
import React from 'react';

import { Button } from '../ui/button';

export const SideNavigation = () => {
  return (
    <div className="hidden flex-col space-y-4 p-4 lg:flex">
      <Button variant="outline" size="icon" className="bg-white">
        <BookOpen className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="bg-white">
        <Play className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="bg-white">
        <CheckSquare className="h-4 w-4" />
      </Button>
    </div>
  );
};
