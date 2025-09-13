

import React from 'react';

const choices = [
    {
        imgSrc: "https://i.postimg.cc/rKt0wm2V/workstation-6059353.png",
        title: "Professional Team",
        description: "Our expert team delivers innovative solutions tailored to your business needs.",
    },
    {
        imgSrc: "https://i.postimg.cc/fSMcMyx8/checklist-18093887.png",
        title: "Quality of Work",
        description: "We deliver robust, scalable solutions meticulously crafted for performance.",
    },
    {
        imgSrc: "https://i.postimg.cc/wR1tJxtk/shield-7917952.png",
        title: "Trusted",
        description: "We build lasting partnerships on transparency, reliability, and on-time delivery.",
    },
    {
        imgSrc: "https://i.postimg.cc/CB1dTM4V/digital-money-6030673.png",
        title: "Affordable",
        description: "Get exceptional value with competitive pricing and flexible models for your success."
    }
];

const WhyChooseUs: React.FC = () => {
    return (
        <section id="choose-us" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Why Choose Us</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Key advantages of partnering with us.</p>
                </div>
                
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {choices.map((choice, index) => (
                            <div key={index} className="rounded-2xl group bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg p-8 border border-slate-200 dark:border-violet-800/60 flex flex-col justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 hover:border-violet-500 dark:hover:border-violet-500">
                                {/* Icon container */}
                                <div className="relative h-28 w-full flex justify-center items-center mb-6">
                                    <img 
                                        src={choice.imgSrc} 
                                        alt={choice.title}
                                        className="relative z-10 h-24 w-24 object-contain transition-all duration-300 group-hover:-translate-y-2 drop-shadow-xl"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    {/* Shadow element */}
                                    <div className="absolute bottom-4 w-20 h-5 bg-black/40 rounded-full transition-all duration-300 blur-lg group-hover:blur-xl group-hover:w-24"></div>
                                </div>
                                <div className="w-full text-center">
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{choice.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{choice.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;