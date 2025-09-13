import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="text-white h-[85vh] md:min-h-screen flex flex-col justify-center items-center -mt-[70px] pt-[70px] overflow-hidden relative">
            
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img 
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop" 
                    alt="Modern developer workstation with multiple monitors displaying code" 
                    className="w-full h-full object-cover"
                />
            </div>

             {/* Overlay to darken the background for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t dark:from-[#1a103c]/95 from-slate-100/95 dark:via-black/60 via-slate-900/60 to-transparent/30 z-10"></div>

            <div className="container mx-auto px-6 text-center relative z-20">
                {/* Text Content */}
                <div>
                    <h1 
                        className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight my-4 animate-fade-in-up text-white"
                        style={{ animationDelay: '0.2s' }}
                    >
                        omnisoft
                    </h1>
                    <p 
                        className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 animate-fade-in-up" 
                        style={{ animationDelay: '0.4s' }}
                    >
                        We build robust, scalable, and elegant digital solutions. <br className="hidden sm:block" />
                        Your vision, engineered with precision.
                    </p>
                    <div 
                        className="mt-12 animate-fade-in-up"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <a href="#contact" className="bg-violet-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-violet-500/40">Start a Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;