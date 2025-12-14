import React, { useState, useEffect, useRef } from 'react';
import { Chat } from "@google/genai";
import { Message } from '../types';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { MODELS } from '../constants';
import Icon from './Icon';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: "Greetings! I am the automated concierge for the Ministry of Information. How may I assist you with your visit to Auralia today?",
      timestamp: Date.now(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const session = createChatSession(MODELS.CHAT_FAST);
    setChatSession(session);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !chatSession || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    const modelMsg: Message = {
      id: modelMsgId,
      role: 'model',
      content: '', 
      timestamp: Date.now(),
      isLoading: true,
    };

    setMessages(prev => [...prev, modelMsg]);

    try {
      const stream = sendMessageStream(chatSession, userMsg.content);
      let fullText = '';

      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === modelMsgId 
            ? { ...msg, content: fullText }
            : msg
        ));
      }

      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId 
          ? { ...msg, isLoading: false }
          : msg
      ));

    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId 
          ? { ...msg, content: "The Ministry's connection is experiencing interference from solar flares. Please try again.", isLoading: false }
          : msg
      ));
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-background relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0d9488 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 z-10">
        <div className="text-center py-4">
            <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Official Government Service
            </span>
        </div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              max-w-[85%] md:max-w-[70%] rounded-2xl p-4 md:p-6 shadow-sm
              ${msg.role === 'user' 
                ? 'bg-primary text-white rounded-br-none' 
                : 'bg-white text-slate-700 border border-teal-100 rounded-bl-none'
              }
            `}>
                {msg.role === 'model' && (
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white">
                             <Icon name="landmark" size={12} />
                        </div>
                        <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                            Ministry Concierge
                        </span>
                    </div>
                )}
              <div className="prose prose-slate prose-sm md:prose-base max-w-none break-words whitespace-pre-wrap leading-relaxed">
                {msg.content}
              </div>
              {msg.isLoading && (
                  <div className="mt-2 flex gap-1">
                      <span className="w-2 h-2 bg-secondary rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 md:p-6 bg-white/80 backdrop-blur-md border-t border-teal-100 z-20">
        <div className="max-w-4xl mx-auto relative flex items-center gap-4">
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about visas, weather, or the best beaches..."
              rows={1}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-800 placeholder-slate-400 resize-none overflow-hidden min-h-[50px] max-h-[150px]"
              style={{ height: 'auto', minHeight: '52px' }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className={`
              p-3 md:p-4 rounded-xl flex items-center justify-center transition-all
              ${!inputValue.trim() || isLoading 
                ? 'bg-slate-100 text-slate-300 cursor-not-allowed' 
                : 'bg-secondary text-white hover:bg-amber-500 shadow-lg hover:shadow-amber-200'
              }
            `}
          >
            <Icon name="send" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
