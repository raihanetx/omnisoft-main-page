import React, { useState, useEffect, useCallback } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };
    
    const navItems = [
        { id: 'home', href: '#home', label: 'Home' },
        { id: 'services', href: '#services', label: 'Services' },
        { id: 'projects', href: '#projects', label: 'Projects' },
        { id: 'ai-price-prediction', href: '#ai-price-prediction', label: 'AI Price Prediction' },
        { id: 'contact', href: '#contact', label: 'Contact' },
    ];

    // --- Active Nav Link Effect ---
    const handleScroll = useCallback(() => {
        const sections = document.querySelectorAll('section[id]');
        let current = 'home';
        sections.forEach(section => {
            const sectionTop = (section as HTMLElement).offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id') || 'home';
            }
        });
        setActiveSection(current);
    }, []);

    useEffect(() => {
        handleScroll(); 
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    // Effect to lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on unmount
        };
    }, [isMenuOpen]);


    return (
        <>
            <header id="main-header" className="fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 dark:bg-[#1a103c]/85 bg-white/85 backdrop-blur-lg border-b dark:border-white/10 border-slate-900/10">
                <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
                    {/* Left: Logo */}
                    <div className="justify-self-start">
                        <a href="#home" className="flex items-center">
                            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">omnisoft</span>
                        </a>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <nav id="desktop-nav" className="hidden lg:flex justify-self-center items-center gap-6">
                        {navItems.map((item) => (
                            <a 
                               key={item.href} 
                               href={item.href} 
                               className={`font-medium whitespace-nowrap transition-colors duration-300 py-2 px-3 rounded-full ${activeSection === item.id ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
                            >
                               {item.label}
                            </a>
                        ))}
                    </nav>
                    
                    {/* Right: Search, Theme, Mobile Menu */}
                    <div className="justify-self-end flex items-center gap-2 md:gap-4">
                        {/* Search Bar (Desktop) */}
                        <div className="hidden md:flex items-center relative">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="bg-slate-200 dark:bg-violet-900/50 text-slate-900 dark:text-white text-sm placeholder-slate-500 dark:placeholder-slate-400 rounded-full py-2 pl-10 pr-4 w-48 focus:outline-none focus:ring-2 ring-violet-500/50 border-none transition-all duration-300"
                                aria-label="Search"
                            />
                            <i className="fa-solid fa-magnifying-glass text-slate-400 dark:text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"></i>
                        </div>
                    
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-slate-200 dark:bg-violet-900/50 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-violet-900 transition-colors"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button 
                                id="menu-btn" 
                                className="text-slate-900 dark:text-white focus:outline-none z-[71] relative"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle menu"
                            >
                                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl transition-transform duration-300`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/60 z-[69] transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            ></div>

            {/* Mobile Menu Sidebar */}
            <div 
                id="mobile-menu" 
                className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-slate-100/95 dark:bg-[#1a103c]/95 backdrop-blur-sm shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-6 border-b border-black/10 dark:border-white/10">
                    <a href="#home" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                        <span className="text-2xl font-extrabold text-slate-900 dark:text-white">omnisoft</span>
                    </a>
                </div>
                <nav className="p-4 flex flex-col">
                    {navItems.map(item => (
                        <a 
                           key={item.href} 
                           href={item.href} 
                           className="block py-3 px-4 text-slate-800 dark:text-slate-200 text-left rounded-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                           onClick={() => setIsMenuOpen(false)}
                        >
                           {item.label}
                        </a>
                    ))}
                    {/* Theme Toggle (Mobile) */}
                    <div className="p-4 mt-4 border-t border-black/10 dark:border-white/10">
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center justify-between p-3 rounded-md bg-slate-200 dark:bg-violet-900/50 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-violet-900 transition-colors"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;