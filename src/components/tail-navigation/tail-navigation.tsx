import { HelpCircle, RotateCcw } from 'lucide-react';
import React from 'react';

import { Button } from '../ui/button';

export const TailNavigation = () => {
  return (
    <div className="hidden flex-col space-y-4 p-4 sm:flex">
      <Button variant="outline" size="icon" className="bg-white">
        <HelpCircle className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="bg-white">
        <RotateCcw className="h-4 w-4" />
      </Button>
    </div>
  );
};
