import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

// --- Type Definitions ---
interface Message {
    text: string;
    sender: 'user' | 'bot';
}

// --- Typing Indicator Component ---
const TypingIndicator: React.FC = () => (
    <div className="flex items-center space-x-1.5 p-2">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
    </div>
);

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! I'm the Omnisoft AI assistant. How can I help you with your project today?", sender: 'bot' }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    
    const chatboxRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // Auto-focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300); // Wait for transition
        }
    }, [isOpen]);
    
    // Handle Escape key to close
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const submitMessage = async (messageText: string) => {
        const trimmedInput = messageText.trim();
        if (trimmedInput === '' || isTyping) return;

        const newUserMessage: Message = { text: trimmedInput, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setUserInput('');
        setIsTyping(true);
        
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `You are a helpful AI assistant for a digital solutions company called Omnisoft. Keep your answers concise and friendly. User question: "${trimmedInput}"`,
            });
            const botResponse: Message = { text: response.text, sender: 'bot' };
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            const errorResponse: Message = {
                text: "Sorry, I'm having a little trouble connecting right now. Please try again in a moment.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, errorResponse]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        submitMessage(userInput);
    };

    const handleSuggestionClick = (suggestion: string) => {
        submitMessage(suggestion);
    };

    const suggestions = ["What services do you offer?", "Tell me about your projects", "How can I contact you?"];

    return (
        <>
            {/* Chat Popup Window */}
            <div
                className={`fixed bottom-6 right-6 z-[60] w-[calc(100vw-3rem)] max-w-md h-[70vh] max-h-[600px] bg-white/80 dark:bg-[#1E1B2E]/80 backdrop-blur-xl border border-slate-200 dark:border-violet-800/60 rounded-2xl shadow-2xl shadow-black/40 text-slate-900 dark:text-white flex flex-col origin-bottom-right transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
                aria-modal="true"
                role="dialog"
                aria-hidden={!isOpen}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10 flex-shrink-0">
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">Omnisoft AI</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Online</p>
                        </div>
                    </div>
                     <button onClick={() => setIsOpen(false)} className="text-slate-600/70 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors p-2 -mr-2" aria-label="Close chat">
                        <i className="fa-solid fa-chevron-down text-xl"></i>
                    </button>
                </div>

                {/* Messages */}
                <div ref={chatboxRef} className="flex-grow overflow-y-auto p-4 space-y-4 hide-scrollbar">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
                             {msg.sender === 'bot' && (
                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center border border-black/10 dark:border-white/10">
                                    <i className="fa-solid fa-robot text-sm text-violet-600 dark:text-violet-300"></i>
                                </div>
                            )}
                            <div className={`rounded-xl px-4 py-2.5 ${msg.sender === 'user' ? 'bg-violet-600 text-white rounded-br-none' : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none'}`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex items-start gap-3 mr-auto">
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center border border-black/10 dark:border-white/10">
                                <i className="fa-solid fa-robot text-sm text-violet-600 dark:text-violet-300"></i>
                            </div>
                            <div className="rounded-xl px-3 py-2 bg-slate-200 dark:bg-slate-700 rounded-bl-none">
                                <TypingIndicator />
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Suggestions & Input */}
                <div className="p-4 border-t border-black/10 dark:border-white/10 flex-shrink-0 bg-black/5 dark:bg-black/10">
                    {messages.length <= 1 && (
                         <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-2 hide-scrollbar">
                            {suggestions.map(s => (
                               <button 
                                  key={s} 
                                  onClick={() => handleSuggestionClick(s)}
                                  className="px-3 py-1.5 bg-violet-200/50 dark:bg-violet-500/20 text-violet-800 dark:text-violet-300 text-xs font-medium rounded-full hover:bg-violet-200/80 dark:hover:bg-violet-500/40 transition-colors whitespace-nowrap"
                               >
                                  {s}
                               </button>
                            ))}
                         </div>
                    )}
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type a message..."
                            className="w-full bg-slate-200 dark:bg-slate-700/50 text-slate-900 dark:text-white text-sm placeholder-slate-500 dark:placeholder-slate-400 rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:ring-2 ring-violet-500 border-none transition-all duration-300"
                            aria-label="Chat input"
                            disabled={isTyping}
                         />
                        <button type="submit" className="w-10 h-10 bg-violet-600 rounded-full flex-shrink-0 flex items-center justify-center text-white hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:bg-violet-800 disabled:cursor-not-allowed" aria-label="Send message" disabled={userInput.trim() === '' || isTyping}>
                            <i className="fa-solid fa-paper-plane text-sm"></i>
                        </button>
                    </form>
                </div>
            </div>


            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-black/30 z-[59] transition-all duration-300 ease-in-out hover:bg-violet-700 focus:outline-none focus:ring-4 ring-violet-500/50 transform-gpu ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 hover:scale-110'}`}
                aria-label="Open chatbot"
                aria-expanded={isOpen}
                tabIndex={isOpen ? -1 : 0}
            >
                <i className={`fa-solid fa-robot text-2xl absolute transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></i>
            </button>
        </>
    );
};

export default Chatbot;