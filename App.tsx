

import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import WhyChooseUs from './components/WhyChooseUs';
import Workflow from './components/Workflow';
import Reviews from './components/Reviews';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PricePrediction from './components/PricePrediction';

// Lazy load the Chatbot component
const Chatbot = lazy(() => import('./components/Chatbot'));

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <TechStack />
                <Projects />
                <Workflow />
                <Reviews />
                <WhyChooseUs />
                <Team />
                <PricePrediction />
                <FAQ />
            </main>
            <Footer />
            <Suspense fallback={null}>
                <Chatbot />
            </Suspense>
        </>
    );
};

export default App;