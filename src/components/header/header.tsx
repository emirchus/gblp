import { StarFilledIcon } from '@radix-ui/react-icons';
import { Book, CheckSquare, Home, Menu, Play, Settings } from 'lucide-react';
import React from 'react';

import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export const Header = () => {
  return (
    <div className="container flex max-w-[1920px] items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white lg:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[200px] bg-[#b4ed7b]">
            <div className="mt-4 flex flex-col space-y-4">
              <button className="flex w-full items-center justify-start space-x-4 text-sm font-medium text-accent-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-white">
                  <Home className="h-4 w-4" />
                </div>
                <span className="inline">Home</span>
              </button>
              <button className="flex w-full items-center justify-start space-x-4 text-sm font-medium text-accent-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-white">
                  <Settings className="h-4 w-4" />
                </div>
                <span className="inline">Settings</span>
              </button>
              <button className="flex w-full items-center justify-start space-x-4 text-sm font-medium text-accent-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-white">
                  <Book className="h-4 w-4" />
                </div>
                <span className="inline">Slides</span>
              </button>
              <button className="flex w-full items-center justify-start space-x-4 text-sm font-medium text-accent-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-white">
                  <Play className="h-4 w-4" />
                </div>
                <span className="inline">Games</span>
              </button>
              <button className="flex w-full items-center justify-start space-x-4 text-sm font-medium text-accent-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-white">
                  <CheckSquare className="h-4 w-4" />
                </div>
                <span className="inline">Assessment</span>
              </button>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden space-x-2 lg:flex">
          <Button variant="outline" size="icon" className="bg-white">
            <Home className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center rounded-md border border-input bg-white px-3 py-1">
        <StarFilledIcon className="mr-2 h-4 w-4 text-yellow-400" />
        <span className="font-bold">100</span>
      </div>
    </div>
  );
};
