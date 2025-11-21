'use client';

import { usePathname } from 'next/navigation';
import { Sidebar, SidebarInset, SidebarProvider } from './ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Toaster } from './ui/toaster';
import { FirebaseErrorListener } from './FirebaseErrorListener';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/'; // The welcome page is the root

  if (isAuthPage) {
    // For the welcome page, render children directly without the main app layout.
    // Also include Toaster here for any auth-related toasts.
    return (
        <>
            {children}
            <Toaster />
        </>
    );
  }

  // For all other pages, use the standard layout with the sidebar.
  return (
    <>
      <FirebaseErrorListener />
      <SidebarProvider>
        <Sidebar>
          <AppSidebar />
        </Sidebar>
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  );
}
