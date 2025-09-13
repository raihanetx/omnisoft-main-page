import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

const blogPosts = [
    {
        img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
        category: 'Web Development',
        date: 'July 15, 2024',
        title: 'The Future of Frontend: Trends to Watch in 2025',
        excerpt: 'Exploring the latest frameworks, tools, and methodologies shaping the future of web development. From AI integration to server components...',
        author: 'Mehedi Hasan',
        authorImg: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Mehedi%20Hasan&backgroundColor=c0eef2,d1d4f9,ffdfbf,ffd5dc'
    },
    {
        img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
        category: 'Backend',
        date: 'July 10, 2024',
        title: 'Building Scalable APIs with Node.js and GraphQL',
        excerpt: 'A deep dive into creating robust and scalable backend services that can handle high traffic loads with efficiency and reliability.',
        author: 'Ahmmed Imtiaz',
        authorImg: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Ahmmed%20Imtiaz&backgroundColor=c0eef2,d1d4f9,ffdfbf,ffd5dc'
    },
    {
        img: 'https://images.unsplash.com/photo-1559028006-44d576086ba8?q=80&w=1974&auto=format&fit=crop',
        category: 'UI/UX Design',
        date: 'July 5, 2024',
        title: 'Design Systems: The Secret to Consistent User Experiences',
        excerpt: 'Learn how implementing a design system can streamline your workflow, improve collaboration, and create a cohesive brand identity.',
        author: 'Sudipto Sen',
        authorImg: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Sudipto%20Sen&backgroundColor=c0eef2,d1d4f9,ffdfbf,ffd5dc'
    },
    {
        img: 'https://images.unsplash.com/photo-1607703750731-d123a46a9a5d?q=80&w=2070&auto=format&fit=crop',
        category: 'DevOps',
        date: 'June 28, 2024',
        title: 'Automating Your Workflow with CI/CD Pipelines',
        excerpt: 'Discover how continuous integration and continuous delivery can accelerate your development cycle and improve code quality.',
        author: 'Farhan Ahmed',
        authorImg: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Farhan%20Ahmed&backgroundColor=c0eef2,d1d4f9,ffdfbf,ffd5dc'
    },
    {
        img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
        category: 'Mobile Apps',
        date: 'June 22, 2024',
        title: 'React Native vs. Native: Choosing the Right Path',
        excerpt: 'An in-depth comparison of cross-platform and native development to help you decide which is best for your next mobile application.',
        author: 'Tariqul Islam',
        authorImg: 'https://api.dicebear.com/8.x/lorelei/svg?seed=Tariqul%20Islam&backgroundColor=c0eef2,d1d4f9,ffdfbf,ffd5dc'
    },
    {
        img: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop',
        category: 'Project Management',
        date: 'June 18, 2024',
        title: 'Agile Methodologies for Modern Tech Teams',
        excerpt: 'How adopting an agile workflow can increase your team’s productivity, adaptability, and overall project success.',
        author: 'AM Lokman',
        authorImg: 'https://api.dicebear.com/8.x/lorelei/svg?seed=AM%20Lokman&backgroundColor=c0eef2,d1d4f9,ffdfbf,ffd5dc'
    },
];

const BlogPage: React.FC = () => {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20">
                <section id="blog-hero" className="text-center mb-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">Omnisoft Insights</h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300">
                            Latest news, trends, and expert opinions.
                        </p>
                    </div>
                </section>
                
                <section id="blog-posts">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {blogPosts.map((post, index) => (
                                <div key={index} className="bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10">
                                    <div className="overflow-hidden">
                                        <a href="#" className="cursor-pointer">
                                            <img 
                                                src={post.img} 
                                                alt={post.title} 
                                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </a>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                                            <span className="text-violet-600 dark:text-violet-400 font-semibold">{post.category}</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-3 flex-grow text-slate-900 dark:text-white">
                                            <a href="#" className="transition-colors group-hover:text-violet-700 dark:group-hover:text-violet-300">{post.title}</a>
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6">{post.excerpt}</p>
                                        <div className="flex items-center mt-auto pt-4 border-t border-slate-200 dark:border-violet-800/60">
                                            <img 
                                                src={post.authorImg} 
                                                alt={post.author} 
                                                className="w-10 h-10 rounded-full mr-3 bg-slate-200 dark:bg-slate-700" 
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div>
                                                <p className="font-semibold text-slate-900 dark:text-white">{post.author}</p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">Staff Writer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Chatbot />
        </>
    );
};

export default BlogPage;