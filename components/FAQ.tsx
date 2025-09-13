import React, { useState } from 'react';

const faqData = [
    { question: 'What services does Omnisoft provide?', answer: 'We offer Web Development, Mobile App Development, UI/UX Design, and Software Solutions tailored to your business needs.' },
    { question: 'How long does it take to deliver a project?', answer: 'Project timelines vary based on complexity and scope. We provide a detailed project plan with milestones and deadlines after the initial consultation.' },
    { question: 'Do you provide after-sales support?', answer: 'Yes, we offer various support and maintenance packages to ensure your application runs smoothly after launch.' },
    { question: 'What is your pricing model?', answer: 'We offer flexible pricing models, including fixed-price, time and material, and dedicated team hiring, to best suit your project requirements.' },
    { question: 'What is your project management methodology?', answer: 'We primarily use Agile methodologies, allowing for flexibility, transparency, and collaboration. This ensures that we can adapt to changes and deliver value to our clients incrementally.' }
];

const FaqItem: React.FC<{ item: { question: string; answer: string; }; index: number; openIndex: number | null; setOpenIndex: (index: number | null) => void; }> = ({ item, index, openIndex, setOpenIndex }) => {
    const isOpen = index === openIndex;

    const toggleOpen = () => {
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <div className="border-b border-slate-300 dark:border-violet-800/60 py-5">
            <button
                onClick={toggleOpen}
                className="w-full flex justify-between items-center text-left text-lg md:text-xl font-semibold text-slate-900 dark:text-white focus:outline-none"
                aria-expanded={isOpen}
            >
                <span>{item.question}</span>
                <i className={`fa-solid fa-chevron-down text-xl text-violet-600 dark:text-violet-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const QuestionModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Your question has been submitted!');
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            aria-modal="true"
            role="dialog"
        >
            <div className="bg-slate-100/90 dark:bg-violet-950/90 backdrop-blur-sm border border-slate-200 dark:border-violet-800/60 rounded-2xl p-8 w-full max-w-lg mx-auto relative shadow-2xl shadow-black/40">
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-slate-600/70 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="Close modal">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">Ask a Question</h3>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full bg-slate-200/50 dark:bg-violet-900/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ring-violet-500/50 border-none" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full bg-slate-200/50 dark:bg-violet-900/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ring-violet-500/50 border-none" />
                        </div>
                        <div>
                            <label htmlFor="question" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Question</label>
                            <textarea id="question" name="question" rows={4} required className="w-full bg-slate-200/50 dark:bg-violet-900/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ring-violet-500/50 border-none"></textarea>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button type="submit" className="bg-violet-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-violet-600/30 inline-flex items-center gap-2">
                             <i className="fa-solid fa-paper-plane"></i> Submit Question
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="faq" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Answers to common questions.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {faqData.map((item, index) => (
                            <FaqItem
                                key={index}
                                item={item}
                                index={index}
                                openIndex={openIndex}
                                setOpenIndex={setOpenIndex}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Can't find the answer you're looking for?</p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-violet-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-violet-600/30"
                        >
                            <i className="fa-solid fa-pen-to-square"></i> Ask a New Question
                        </button>
                    </div>
                </div>
            </section>
            <QuestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default FAQ;