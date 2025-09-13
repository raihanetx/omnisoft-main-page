import React, { useState, useMemo } from 'react';

// Configuration for the calculator
const serviceOptions = {
    web: { name: 'Web Application', base: 3000 },
    mobile: { name: 'Mobile Application', base: 5000 },
    design: { name: 'UI/UX Design', base: 1500 },
    devops: { name: 'Cloud & DevOps', base: 2000 },
};

const complexityOptions = {
    1: { name: 'Simple', multiplier: 1 },
    2: { name: 'Standard', multiplier: 1.5 },
    3: { name: 'Complex', multiplier: 2.5 },
};

const featureOptions = {
    auth: { name: 'User Authentication', cost: 500 },
    ecommerce: { name: 'E-commerce', cost: 1500 },
    admin: { name: 'Admin Panel', cost: 1000 },
    api: { name: 'API Integration', cost: 800 },
};

const PricePrediction: React.FC = () => {
    // State for user selections
    const [service, setService] = useState('web');
    const [complexity, setComplexity] = useState(2);
    const [features, setFeatures] = useState({
        auth: true,
        ecommerce: false,
        admin: true,
        api: false,
    });

    const handleFeatureChange = (feature: keyof typeof features) => {
        setFeatures(prev => ({ ...prev, [feature]: !prev[feature] }));
    };

    // Memoized calculation for performance
    const priceRange = useMemo(() => {
        const basePrice = serviceOptions[service as keyof typeof serviceOptions].base;
        const complexityMultiplier = complexityOptions[complexity as keyof typeof complexityOptions].multiplier;
        const selectedFeaturesCost = Object.keys(features)
            .filter(key => features[key as keyof typeof features])
            .reduce((total, key) => total + featureOptions[key as keyof typeof featureOptions].cost, 0);

        const estimatedCost = (basePrice * complexityMultiplier) + selectedFeaturesCost;

        const lowerBound = Math.round((estimatedCost * 0.85) / 100) * 100;
        const upperBound = Math.round((estimatedCost * 1.15) / 100) * 100;

        return { lower: lowerBound, upper: upperBound };
    }, [service, complexity, features]);

    return (
        <section id="ai-price-prediction" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Project Cost Estimator</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                        Get a quick project cost estimate.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 rounded-2xl shadow-2xl shadow-black/30 flex flex-col lg:flex-row">
                    {/* Controls Panel */}
                    <div className="w-full lg:w-3/5 p-8 md:p-10 space-y-8">
                        {/* Service Type */}
                        <div>
                            <label className="text-xl font-bold text-slate-900 dark:text-white">1. Select Service Type</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                {Object.entries(serviceOptions).map(([key, value]) => (
                                    <button key={key} onClick={() => setService(key)} className={`p-4 rounded-lg text-center transition-all duration-300 ${service === key ? 'bg-violet-600 text-white ring-2 ring-violet-500' : 'bg-slate-200/50 dark:bg-violet-900/50 hover:bg-slate-200 dark:hover:bg-violet-900'}`}>
                                        <span className="font-semibold">{value.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Complexity */}
                        <div>
                            <label htmlFor="complexity-slider" className="text-xl font-bold text-slate-900 dark:text-white">2. Define Project Complexity</label>
                            <input
                                id="complexity-slider"
                                type="range"
                                min="1"
                                max="3"
                                value={complexity}
                                onChange={(e) => setComplexity(parseInt(e.target.value))}
                                className="w-full h-2 bg-black/10 dark:bg-white/20 rounded-lg appearance-none cursor-pointer mt-4 accent-violet-500"
                            />
                            <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300 mt-2">
                                <span>Simple</span>
                                <span>Standard</span>
                                <span>Complex</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <label className="text-xl font-bold text-slate-900 dark:text-white">3. Choose Additional Features</label>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {Object.entries(featureOptions).map(([key, value]) => (
                                    <label key={key} className="flex items-center p-4 bg-slate-200/50 dark:bg-violet-900/50 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-violet-900 transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={features[key as keyof typeof features]}
                                            onChange={() => handleFeatureChange(key as keyof typeof features)}
                                            className="h-5 w-5 rounded bg-white/20 border-gray-500 text-violet-600 focus:ring-violet-500"
                                        />
                                        <span className="ml-3 font-medium text-slate-900 dark:text-white">{value.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Price Display */}
                    <div className="w-full lg:w-2/5 p-8 md:p-10 bg-slate-200/30 dark:bg-violet-900/30 lg:rounded-r-2xl flex flex-col justify-center items-center text-center">
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 tracking-wider uppercase">Estimated Price Range</h3>
                        <div className="my-4">
                            <span className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                ${priceRange.lower.toLocaleString()} - ${priceRange.upper.toLocaleString()}
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 max-w-xs">This is a preliminary estimate. Actual costs may vary based on detailed requirements.</p>
                        <a href="#contact" className="mt-8 bg-violet-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-violet-600/30">
                            Get a Detailed Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricePrediction;