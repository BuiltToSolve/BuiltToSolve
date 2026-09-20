import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Products } from '@/components/sections/Products';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { PrivacyPolicy } from '@/components/pages/PrivacyPolicy';
import { useRouter } from '@/hooks/useRouter';

function App() {
  const { route, navigate } = useRouter();

  return (
    <div className="relative min-h-screen bg-bg text-slate-200 overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar currentRoute={route} onNavigate={navigate} />
      <main>
        {route === 'privacy-policy' ? (
          <PrivacyPolicy onNavigateHome={(target) => navigate(target || '#hero')} />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Products />
            <Contact />
          </>
        )}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
