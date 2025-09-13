import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img 
                            src="https://i.postimg.cc/WbjDdSk9/1757219071669.png" 
                            alt="Omnisoft team working on digital solutions" 
                            className="rounded-lg w-full"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
                        <p className="text-slate-400 mb-6">Omnisoft is a dynamic technology company delivering cutting-edge software solutions, specializing in full-stack development, backend, frontend, and graphic design.</p>
                        <h3 className="text-2xl font-semibold mb-3">Our mission</h3>
                        <ul className="space-y-2 text-slate-300">
                            <li className="flex items-center gap-3"><i className="fa-solid fa-check-circle text-white"></i> Build scalable and secure software systems.</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-check-circle text-white"></i> Deliver intuitive and engaging user experiences.</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-check-circle text-white"></i> Drive growth by leveraging the latest technologies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;