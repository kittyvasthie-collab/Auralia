import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { GeneratedImage } from '../types';
import Icon from './Icon';

const ImageGenInterface: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<GeneratedImage[]>([]);
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16">("1:1");

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    try {
      const fullPrompt = `Cinematic, vibrant travel photography of Auralia, the fictional tropical country. ${prompt}`;
      const base64Image = await generateImage(fullPrompt, aspectRatio);
      
      if (base64Image) {
        const newImage: GeneratedImage = {
          id: Date.now().toString(),
          data: base64Image,
          prompt: prompt,
          timestamp: Date.now(),
        };
        setHistory(prev => [newImage, ...prev]);
        setPrompt('');
      } else {
        alert("The Royal Artist is taking a break. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error contacting the art studio.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto relative">
      <div className="p-4 md:p-8 max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-3">Scenic Postcard Studio</h2>
          <p className="text-slate-500 text-lg">Visualize your dream vacation. Generate custom views of our beautiful nation.</p>
        </div>

        <div className="bg-white border border-teal-100 rounded-3xl p-6 shadow-xl shadow-teal-900/5 mb-12">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Describe your view</label>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., A sunset festival on the Golden Coast with fireworks..."
                        className="w-full h-28 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-slate-800 resize-none placeholder-slate-400"
                    />
                </div>
                <div className="w-full md:w-56 flex flex-col gap-4">
                     <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Format</label>
                        <select 
                            value={aspectRatio}
                            onChange={(e) => setAspectRatio(e.target.value as any)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-slate-800"
                        >
                            <option value="1:1">Square (Social)</option>
                            <option value="16:9">Landscape (Postcard)</option>
                            <option value="9:16">Portrait (Mobile)</option>
                        </select>
                     </div>
                     <button
                        onClick={handleGenerate}
                        disabled={!prompt.trim() || isGenerating}
                        className={`
                            flex-1 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md
                            ${!prompt.trim() || isGenerating 
                                ? 'bg-slate-100 text-slate-300 cursor-not-allowed shadow-none' 
                                : 'bg-gradient-to-r from-secondary to-yellow-500 text-white hover:scale-[1.02] active:scale-[0.98]'
                            }
                        `}
                    >
                        {isGenerating ? (
                            <>
                                <Icon name="loader-2" className="animate-spin" />
                                Painting...
                            </>
                        ) : (
                            <>
                                <Icon name="camera" />
                                Create Postcard
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>

        <div className="space-y-8">
            <div className="flex items-center gap-4">
                 <div className="h-px bg-slate-200 flex-1"></div>
                 <h3 className="text-xl font-serif font-bold text-slate-700 flex items-center gap-2">
                    <Icon name="image" className="text-secondary" />
                    Gallery
                </h3>
                <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {history.length === 0 && !isGenerating && (
                    <div className="col-span-full py-16 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                        <Icon name="sun" size={48} className="mb-4 text-slate-300" />
                        <p>No postcards yet. Start imagining!</p>
                    </div>
                )}

                {history.map((img) => (
                    <div key={img.id} className="group relative rounded-lg overflow-hidden bg-white shadow-lg rotate-1 hover:rotate-0 transition-all duration-300 p-3 pb-8">
                        <div className="overflow-hidden rounded-sm relative aspect-square">
                             <img 
                                src={img.data} 
                                alt={img.prompt} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>
                        <div className="absolute bottom-2 left-4 right-4">
                            <p className="text-slate-600 font-handwriting text-sm italic truncate">
                                "{img.prompt}"
                            </p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                                Auralia • {new Date(img.timestamp).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenInterface;
