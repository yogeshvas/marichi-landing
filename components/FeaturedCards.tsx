
import React from 'react';
import { Mic, ArrowUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/Card';
import { Button } from './ui/Button';

const FeaturedCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: V3 */}
        <Card
          className="bg-[#F9FAFB] flex flex-col min-h-[600px] group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CardHeader>
            <div className="absolute inset-0 gradient-bg opacity-30 blur-3xl rounded-full scale-150 group-hover:scale-125 transition-transform duration-1000" />
            <div className="relative z-10 w-full max-w-xs aspect-square bg-white/20 backdrop-blur-xl rounded-[40px] border border-white/40 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full gradient-bg opacity-80" />
              <Button
                variant="outline"
                className="absolute bottom-6 left-6"
              >
                Play
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">The most expressive text to speech model</h2>
            <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
              Our AI voice generator delivers emotional depth and rich delivery, setting a new standard in expressive speech. Available now in Alpha.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="primary" size="lg">Discover Eleven v3</Button>
              <Button variant="secondary" size="lg">Sign up</Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Agents */}
        <Card
          className="bg-[#F9FAFB] flex flex-col min-h-[600px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CardHeader>
            <div className="relative w-full max-w-sm h-[400px] bg-white rounded-[40px] border border-neutral-100 shadow-xl overflow-hidden flex flex-col">
              <div className="flex-1 p-8">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-neutral-100 p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                      Hello, can I check my order status?
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-8 h-8 rounded-full gradient-bg" />
                    <div className="bg-black text-white p-3 rounded-2xl rounded-tl-none text-sm max-w-[80%]">
                      Your order is on its way with FedEx! It should arrive tomorrow by 8pm.
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-neutral-100">
                <div className="flex items-center gap-2 bg-neutral-50 p-3 rounded-full border border-neutral-200">
                  <span className="flex-1 text-neutral-400 text-sm pl-2">Enter your message</span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400">
                      <Mic size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400">
                      <ArrowUp size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">Agents Platform</h2>
            <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
              Speak to your customers with natural, human-sounding AI that feels truly personal.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="primary" size="lg">Discover Agents Platform</Button>
              <Button variant="secondary" size="lg">Contact sales</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedCards;
