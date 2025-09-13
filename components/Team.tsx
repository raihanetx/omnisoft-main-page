

import React, { useState, useMemo, useEffect, useRef } from 'react';

const allMembers = [
    { 
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", 
        name: "Alamin Khan", 
        role: "CEO, Co-Founder", 
        bio: "Visionary leader driving the company's strategic direction and fostering a culture of innovation.",
        skills: ["Business Strategy", "Client Relations", "Project Management"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1628157588553-5ee30a6c2623?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3", 
        name: "Tahcin Ul Karim", 
        role: "CTO, Co-Founder", 
        bio: "Architecting robust and scalable systems to power our next-generation digital solutions.",
        skills: ["System Architecture", "Full-Stack Dev", "DevOps"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop", 
        name: "Ahmmed Imtiaz", 
        role: "Backend Developer", 
        bio: "Expert in building powerful and efficient server-side logic and APIs for our applications.",
        skills: ["Node.js", "Express", "MongoDB"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop", 
        name: "Mehedi Hasan", 
        role: "Frontend Developer", 
        bio: "Passionate about creating intuitive and dynamic user interfaces with a focus on user experience.",
        skills: ["React", "Next.js", "UI Animation"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1974&auto=format&fit=crop", 
        name: "Tariqul Islam", 
        role: "Frontend Developer", 
        bio: "Crafting clean, elegant, and responsive user interfaces that bring designs to life.",
        skills: ["Vue.js", "Tailwind CSS", "Clean Code"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?q=80&w=1887&auto=format&fit=crop", 
        name: "Ahon Khan", 
        role: "Backend Developer", 
        bio: "Specializes in developing scalable web applications and maintaining server infrastructure.",
        skills: ["Laravel", "PHP", "MySQL"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", 
        name: "Sudipto Sen", 
        role: "Graphics Dept. Head", 
        bio: "Leads our creative team in designing beautiful, user-centric visuals and brand identities.",
        skills: ["UI/UX Design", "Figma", "Branding"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format=fit&crop", 
        name: "Raihan", 
        role: "Mobile App Developer", 
        bio: "Building seamless and high-performing mobile experiences for both Android and iOS platforms.",
        skills: ["React Native", "Firebase", "Cross-Platform"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format=fit&crop", 
        name: "Md. Ashik", 
        role: "Frontend Developer", 
        bio: "Dedicated to building complex, state-managed applications with a focus on performance.",
        skills: ["Angular", "TypeScript", "RxJS"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1542327897-4141c5336f56?q=80&w=2070&auto=format=fit&crop", 
        name: "AM Lokman", 
        role: "Content Management", 
        bio: "Strategizing and creating compelling content that drives engagement and online visibility.",
        skills: ["SEO", "Content Strategy", "Marketing"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    { 
        img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format=fit&crop", 
        name: "Farhan Ahmed", 
        role: "QA Engineer", 
        bio: "Ensuring our products meet the highest standards of quality through meticulous testing.",
        skills: ["Cypress", "Jest", "Automated Testing"],
        socials: { linkedin: '#', twitter: '#', github: '#' }
    },
];

const Team: React.FC = () => {
    // Helper to determine number of visible cards based on screen width
    const getNumVisible = () => {
        if (typeof window === 'undefined') return 4;
        const width = window.innerWidth;
        if (width < 640) { // For smaller mobile screens (e.g., iPhone SE)
            return 2;
        }
        if (width < 768) { // For larger mobile screens
            return 3;
        }
        return 4; // Desktop (md breakpoint and up), unchanged
    };

    const [numVisible, setNumVisible] = useState(getNumVisible());
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(numVisible);
    const trackRef = useRef<HTMLDivElement>(null);

    // Effect to update numVisible on window resize
    useEffect(() => {
        const handleResize = () => setNumVisible(getNumVisible());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect to reset carousel position when visibility changes
    useEffect(() => {
        setIsTransitioning(true);
        setCurrentIndex(numVisible);
    }, [numVisible]);

    // 1. Clone start/end items for seamless looping
    const clonedMembers = useMemo(() => {
        if (allMembers.length <= numVisible) return allMembers;
        const endClones = allMembers.slice(0, numVisible);
        const startClones = allMembers.slice(-numVisible);
        return [...startClones, ...allMembers, ...endClones];
    }, [numVisible]);

    // 2. Navigation handlers
    const handleNext = () => {
        if (!isTransitioning) return;
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    const handlePrev = () => {
        if (!isTransitioning) return;
        setCurrentIndex(prevIndex => prevIndex - 1);
    };
    
    // 3. Effect to re-enable transitions after a non-transitioned jump
    useEffect(() => {
        if (!isTransitioning) {
            const timer = setTimeout(() => setIsTransitioning(true), 50);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    const handleTransitionEnd = () => {
        if (currentIndex >= allMembers.length + numVisible) {
            setIsTransitioning(false);
            setCurrentIndex(numVisible);
        } else if (currentIndex < numVisible) {
            setIsTransitioning(false);
            setCurrentIndex(allMembers.length + currentIndex);
        }
    };
    
    // 4. Dynamic styles for the carousel track
    const trackStyle: React.CSSProperties = {
        transform: `translateX(calc(-${currentIndex * (100 / numVisible)}%))`,
        transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.83, 0, 0.17, 1)' : 'none',
    };

    return (
        <section id="team" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Our Team</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Meet the professionals behind Omnisoft.</p>
                </div>
            </div>
            
            <div className="relative max-w-7xl mx-auto">
                <div className="overflow-hidden" role="region" aria-label="Team Carousel">
                    <div 
                        ref={trackRef}
                        className="flex"
                        style={trackStyle}
                        onTransitionEnd={handleTransitionEnd}
                        role="list"
                    >
                        {clonedMembers.map((member, index) => (
                            <div 
                                key={index} 
                                className="flex-shrink-0 px-3"
                                style={{ width: `${100 / numVisible}%` }}
                                role="listitem"
                            >
                                <div className="relative group aspect-[4/5] rounded-2xl overflow-hidden shadow-lg w-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-white/10">
                                    <img 
                                        src={member.img} 
                                        alt={member.name} 
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left flex flex-col justify-end h-full">
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-gray-300 font-medium text-sm mt-1">{member.role}</p>
                                        <p className="text-xs text-gray-300 opacity-90 mt-3">{member.skills.slice(0, 3).join(' • ')}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12 z-10 w-12 h-12 rounded-full bg-violet-950/50 backdrop-blur-sm hover:bg-violet-950/80 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center"
                    aria-label="Previous Members"
                >
                    <i className="fa-solid fa-chevron-left text-xl"></i>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12 z-10 w-12 h-12 rounded-full bg-violet-950/50 backdrop-blur-sm hover:bg-violet-950/80 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center"
                    aria-label="Next Members"
                >
                    <i className="fa-solid fa-chevron-right text-xl"></i>
                </button>
            </div>
        </section>
    );
};

export default Team;