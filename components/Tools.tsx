import React from 'react';

const Tools: React.FC = () => {
    return (
        <section id="tools" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Our Tools</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
                        Discover the powerful tools and technologies that drive our innovative solutions.
                    </p>
                </div>
                <div className="text-center text-slate-300 rounded-2xl bg-violet-950/40 border border-violet-800/60 p-12 max-w-3xl mx-auto">
                    <i className="fa-solid fa-screwdriver-wrench text-6xl text-slate-400 mb-6"></i>
                    <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
                    <p>We are currently curating a showcase of the essential tools in our arsenal. <br/>Check back soon to see what powers Omnisoft's success.</p>
                </div>
            </div>
        </section>
    );
};

export default Tools;