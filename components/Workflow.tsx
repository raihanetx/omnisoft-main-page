import React from 'react';

const steps = [
    { iconClass: "fa-solid fa-lightbulb", title: "1. Planning", description: "We define goals and project scope." },
    { iconClass: "fa-solid fa-drafting-compass", title: "2. Design", description: "We create wireframes and UI/UX mockups." },
    { iconClass: "fa-solid fa-laptop-code", title: "3. Development", description: "Our team codes and builds your application." },
    { iconClass: "fa-solid fa-vial-circle-check", title: "4. Testing", description: "We ensure quality through rigorous testing." },
    { iconClass: "fa-solid fa-rocket", title: "5. Deployment", description: "We launch your project on secure servers." },
    { iconClass: "fa-solid fa-headset", title: "6. Support", description: "We provide ongoing maintenance and support." }
];

const Workflow: React.FC = () => {
    return (
        <section id="workflow" className="py-20">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Our Workflow</h2>
                </div>
                <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-12 lg:gap-x-12">
                    {steps.map((step) => (
                        <div key={step.title} className="workflow-step text-center flex-1">
                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center mb-6 text-white">
                                <i className={`${step.iconClass} text-4xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;