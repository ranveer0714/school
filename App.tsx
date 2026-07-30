import React, { useEffect, useMemo, useState } from 'react';
import Header from './include/Header';
import Hero from './Hero';
import About from './About';
import Principal from './Principal';
import Facilities from './Facilities';
import LearningPrograms from './LearningProgram';
import Activities from './Activities';
import Gallery from './Gallery';
import VideoGallery from './VideoGallery';
import Testimonials from './Testimonials';
import Events from './Events';
import Charity from './Charity';
import Admission from './Admission';
import Contact from './Contact';
import Footer from './include/Footer';

const ROUTES = {
  '/': {
    title: 'Home',
    content: (
      <>
        <Hero />
        <Testimonials />
      </>
    ),
  },
  '/about': {
    title: 'About Us',
    content: (
      <>
        <About />
        <Principal />
        <Facilities />
      </>
    ),
  },
  '/programs': {
    title: 'Programs',
    content: <LearningPrograms />,
  },
  '/activities': {
    title: 'Activities',
    content: (
      <>
        <Activities />
        <Events />
      </>
    ),
  },
  '/gallery': {
    title: 'Gallery',
    content: (
      <>
        <Gallery />
        <VideoGallery />
      </>
    ),
  },
  '/admission': {
    title: 'Admission',
    content: <Admission />,
  },
  '/charity': {
    title: 'Charity',
    content: <Charity />,
  },
  '/contact': {
    title: 'Contact',
    content: <Contact />,
  },
} as const;

type RoutePath = keyof typeof ROUTES;

function getRoutePath(): RoutePath {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
  return normalizedPath in ROUTES ? (normalizedPath as RoutePath) : '/';
}

function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(getRoutePath);
  const currentRoute = useMemo(() => ROUTES[currentPath], [currentPath]);

  useEffect(() => {
    const syncRoute = () => {
      setCurrentPath(getRoutePath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleInternalLinkClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const url = new URL(link.href);
      const nextPath = (url.pathname.replace(/\/+$/, '') || '/') as RoutePath;

      if (url.origin !== window.location.origin || !(nextPath in ROUTES)) {
        return;
      }

      event.preventDefault();

      if (nextPath !== currentPath) {
        window.history.pushState({}, '', nextPath);
        setCurrentPath(nextPath);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', syncRoute);
    document.addEventListener('click', handleInternalLinkClick);

    return () => {
      window.removeEventListener('popstate', syncRoute);
      document.removeEventListener('click', handleInternalLinkClick);
    };
  }, [currentPath]);

  useEffect(() => {
    document.title = `${currentRoute.title} | Little Champ`;
  }, [currentRoute.title]);

  return (
    <div className="min-h-screen w-full font-sans overflow-x-hidden">
      <Header currentPath={currentPath} />
      <main className={currentPath === '/' ? '' : 'pt-20'} key={currentPath}>
        {currentRoute.content}
      </main>
      <Footer />
    </div>
  );
}

export default App;
