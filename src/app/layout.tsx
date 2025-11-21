
import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Planify',
  description: 'SMARTER SCHEDULES! SMOOTHER DAYS!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const backgroundImage = PlaceHolderImages.find(img => img.id === 'welcome-background');

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="font-body antialiased"
      >
        <div 
          className="fixed inset-0 z-[-1] bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImage?.imageUrl}')`,
          }}
        />
        <div className="fixed inset-0 z-[-1] bg-background/80"></div>
        <Providers>
          <FirebaseErrorListener />
          <SidebarProvider>
            <Sidebar>
              <AppSidebar />
            </Sidebar>
            <SidebarInset>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
