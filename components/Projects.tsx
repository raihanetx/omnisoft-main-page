

import React, { useState, useCallback } from 'react';

const projectData = [
    {
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
        title: "Social Media Platform",
        description: "A dynamic social networking app with real-time chat, content sharing, and a personalized user feed.",
        techStack: ["React", "Firebase", "Node.js", "WebSocket"],
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
        title: "Analytics Dashboard",
        description: "A comprehensive dashboard providing real-time insights and data visualization for business stakeholders.",
        techStack: ["React", "D3.js", "Node.js", "PostgreSQL"],
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=872&auto=format&fit=crop",
        title: "E-commerce Storefront",
        description: "A fully-featured e-commerce platform with a modern storefront, product management, and a secure checkout process.",
        techStack: ["Next.js", "Stripe", "GraphQL", "Tailwind CSS"],
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=870&auto=format&fit=crop",
        title: "SaaS Platform",
        description: "A scalable Software-as-a-Service platform offering subscription-based services with multi-tenancy.",
        techStack: ["Vue.js", "Firebase", "Express", "MongoDB"],
        link: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=870&auto=format&fit=crop",
        title: "Travel Booking App",
        description: "A mobile-first application that allows users to seamlessly search for and book flights and hotels.",
        techStack: ["React Native", "Python", "Django", "REST APIs"],
        link: "#"
    }
];

const Projects: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
    }, []);

    const goToNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex === projectData.length - 1 ? 0 : prevIndex + 1));
    }, []);

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Project Demos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Our portfolio of successful solutions.</p>
                </div>
                
                <div className="relative max-w-7xl mx-auto">
                    {/* Carousel Container */}
                    <div className="max-w-5xl mx-auto">
                        <div className="rounded-2xl shadow-2xl shadow-black/40 bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 overflow-hidden">
                            {/* Sliding Track */}
                            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                {projectData.map((project, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
                                            {/* Image Side */}
                                            <div className="relative h-80 md:h-full">
                                                <img
                                                    src={project.img}
                                                    alt={project.title}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                            {/* Content Side */}
                                            <div className="p-6 md:p-8 flex flex-col justify-center">
                                                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.techStack.map(tech => (
                                                        <span key={tech} className="bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-300 text-xs font-medium px-2.5 py-1 rounded-md">{tech}</span>
                                                    ))}
                                                </div>
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300 transition self-start group">
                                                    View Project <span className="transform transition-transform duration-300 group-hover:translate-x-1">»</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Prev Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-8 z-10 w-12 h-12 rounded-full bg-slate-900/10 dark:bg-black/30 backdrop-blur-sm hover:bg-slate-900/20 dark:hover:bg-black/50 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 flex items-center justify-center"
                        aria-label="Previous Project"
                    >
                        <i className="fa-solid fa-chevron-left text-xl"></i>
                    </button>
                    
                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-8 z-10 w-12 h-12 rounded-full bg-slate-900/10 dark:bg-black/30 backdrop-blur-sm hover:bg-slate-900/20 dark:hover:bg-black/50 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 flex items-center justify-center"
                        aria-label="Next Project"
                    >
                        <i className="fa-solid fa-chevron-right text-xl"></i>
                    </button>
                </div>

                <div className="text-center mt-4">
                    <a href="projects.html" target="_blank" className="font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-2 text-lg">
                        Explore All Projects <span>»</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;