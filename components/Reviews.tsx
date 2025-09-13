import React from 'react';

interface Review {
    img: string;
    name: string;
    text: string;
    rating: number;
}

const reviewsData: Review[] = [
    { name: 'Michael R.', text: 'They delivered on time, provided great support, and the final design exceeded my expectations.', rating: 4.5, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop' },
    { name: 'David K.', text: 'Omnisoft transformed our business website into something modern and professional. Highly recommended!', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
    { name: 'John J.', text: 'The service quality and attention to detail are outstanding. I will definitely work with them again.', rating: 5, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
    { name: 'David L.', text: 'A fantastic team to collaborate with. They are true professionals in their field. Highly satisfied.', rating: 5, img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop' },
    { name: 'Adam M.', text: 'Their innovative solutions helped our business grow significantly. I couldn\'t be happier with the results.', rating: 5, img: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop' },
    { name: 'Chris P.', text: 'The communication was excellent throughout the project. A very smooth and transparent process.', rating: 4.5, img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=800&auto=format&fit=crop' },
];


const Rating: React.FC<{ value: number }> = ({ value }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= value) {
            stars.push(<i key={i} className="fas fa-star"></i>);
        } else if (i - 0.5 === value) {
            stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
        } else {
            stars.push(<i key={i} className="far fa-star"></i>);
        }
    }
    return <div className="text-yellow-400 text-sm">{stars}</div>;
};

const Reviews: React.FC = () => {
    const half = Math.ceil(reviewsData.length / 2);
    const firstRowReviews = reviewsData.slice(0, half);
    const secondRowReviews = reviewsData.slice(half);
    
    return (
        <section id="reviews" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">What Our Clients Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">See what our satisfied clients say.</p>
                </div>
                <div className="carousel-container space-y-8">
                    <div className="scrolling-wrapper">
                        {[...firstRowReviews, ...firstRowReviews, ...firstRowReviews, ...firstRowReviews].map((review, index) => (
                            <div key={`r1-${review.name}-${index}`} className="flex flex-col bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 p-4 sm:p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-500/10 w-60 sm:w-80 md:w-96 mx-2 sm:mx-4 flex-shrink-0">
                                <i className="fa-solid fa-quote-left text-violet-500 text-3xl sm:text-4xl opacity-80 mb-3 sm:mb-4"></i>
                                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 flex-grow">{review.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img 
                                        src={review.img} 
                                        alt={review.name} 
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 bg-slate-700 object-cover" 
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold">{review.name}</h3>
                                        <Rating value={review.rating} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="scrolling-wrapper scroll-reverse">
                        {[...secondRowReviews, ...secondRowReviews, ...secondRowReviews, ...secondRowReviews].map((review, index) => (
                            <div key={`r2-${review.name}-${index}`} className="flex flex-col bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 p-4 sm:p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-500/10 w-60 sm:w-80 md:w-96 mx-2 sm:mx-4 flex-shrink-0">
                                <i className="fa-solid fa-quote-left text-violet-500 text-3xl sm:text-4xl opacity-80 mb-3 sm:mb-4"></i>
                                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 flex-grow">{review.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img 
                                        src={review.img} 
                                        alt={review.name} 
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 bg-slate-700 object-cover" 
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold">{review.name}</h3>
                                        <Rating value={review.rating} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;