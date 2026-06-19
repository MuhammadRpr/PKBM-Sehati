import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
