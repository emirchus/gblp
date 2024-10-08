import { BottomNavigation } from '@/components/bottom-navigation';
import { Header } from '@/components/header';
import { SideNavigation } from '@/components/side-navigation';
import { TailNavigation } from '@/components/tail-navigation';
import { TopNavigation } from '@/components/top-navigation';

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden px-2">
        <SideNavigation />

        {/* Content Area */}
        <div className="flex flex-1 flex-col overflow-auto p-4">
          <div className="flex flex-grow flex-col rounded-lg bg-white p-4">
            <TopNavigation />
            {children}
          </div>

          <BottomNavigation />
        </div>

        <TailNavigation />
      </div>
    </div>
  );
}
