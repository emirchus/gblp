import React from 'react';

import { Button } from '../ui/button';

export const BottomNavigation = () => {
  return (
    <div className="mt-4 flex items-center justify-between rounded-md border border-border bg-white p-4">
      <Button variant="outline" className="bg-white">
        Prev Lesson
      </Button>
      <div className="hidden space-x-2 sm:flex">
        {['A', 'B', 'C', 'D', 'E'].map(letter => (
          <Button key={letter} variant="outline" size="default" className="h-8 w-8 bg-white">
            {letter}
          </Button>
        ))}
      </div>
      <Button variant="outline" className="bg-white">
        Next Lesson
      </Button>
    </div>
  );
};
