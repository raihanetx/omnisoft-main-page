import React from 'react';

const TechItem: React.FC<{ iconClass: string; name: string; }> = ({ iconClass, name }) => (
    <div title={name} className="flex flex-col items-center justify-center gap-2 bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 rounded-lg p-3 text-center w-24 h-24 md:w-32 md:h-32 mx-2 md:mx-4 flex-shrink-0">
        <i className={`${iconClass} text-3xl md:text-5xl`}></i>
        <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
    </div>
);

const techRow1 = [
    { iconClass: 'fab fa-js-square', name: 'JavaScript' },
    { iconClass: 'fab fa-node-js', name: 'Node.js' },
    { iconClass: 'fab fa-python', name: 'Python' },
    { iconClass: 'fab fa-php', name: 'PHP' },
    { iconClass: 'fab fa-laravel', name: 'Laravel' },
    { iconClass: 'fab fa-html5', name: 'HTML5' },
];

const techRow2 = [
    { iconClass: 'fab fa-css3-alt', name: 'CSS3' },
    { iconClass: 'fab fa-vuejs', name: 'Vue.js' },
    { iconClass: 'fa-solid fa-database', name: 'MongoDB' },
    { iconClass: 'fab fa-docker', name: 'Docker' },
    { iconClass: 'fab fa-git-alt', name: 'Git' },
    { iconClass: 'fab fa-aws', name: 'AWS' },
];

const TechStack: React.FC = () => {
    // Combine the tech rows to create longer arrays. This ensures the scrolling content
    // is wider than most viewports, preventing the animation from glitching at the loop point.
    // This is the same seamless scrolling technique used in the Reviews section.
    const combinedRow1 = [...techRow1, ...techRow2];
    const combinedRow2 = [...techRow2, ...techRow1];

    return (
        <section id="tech-stack" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Our Tech Stack</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Cutting-edge tech for scalable applications.</p>
                </div>
                <div className="carousel-container space-y-4">
                    <div className="scrolling-wrapper">
                        {[...combinedRow1, ...combinedRow1].map((tech, index) => <TechItem key={`${tech.name}-${index}`} {...tech} />)}
                    </div>
                    <div className="scrolling-wrapper scroll-reverse">
                         {[...combinedRow2, ...combinedRow2].map((tech, index) => <TechItem key={`${tech.name}-${index}`} {...tech} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;