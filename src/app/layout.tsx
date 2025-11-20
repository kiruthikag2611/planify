import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';

export const metadata: Metadata = {
  title: 'Planify',
  description: 'SMARTER SCHEDULES! SMOOTHER DAYS!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWNhZGVtaWF8ZW58MHx8fHwxNzIxODMzODc4fDA&ixlib=rb-4.0.3&q=80&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <Providers>
          <FirebaseErrorListener />
          <SidebarProvider>
            <Sidebar>
              <AppSidebar />
            </Sidebar>
            <SidebarInset className="z-10">
              {children}
            </SidebarInset>
          </SidebarProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
