
import React from 'react';
import { Users, Bot, Send, Database, MessageSquare, Zap, BarChart3, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import BlurText from './BlurText';

const FeaturedCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full text-emerald-600 text-sm font-semibold mb-4">
          Platform Features
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
          <BlurText
            text="Everything You Need to Scale"
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => { }}
            className="text-2xl mb-8 text-center text-black justify-center"
          />

        </h2>
        <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
          Powerful tools to automate, engage, and grow your WhatsApp business communication
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Shared Team Inbox */}
        <Card
          className="relative bg-gradient-to-br from-white to-slate-50 flex flex-col min-h-[520px] group overflow-hidden border border-slate-200/80 hover:border-emerald-300/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <CardHeader className="relative z-10">
            <div className="w-full max-w-sm h-[300px] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              {/* Inbox Header */}
              <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #10b981, #14b8a6)' }}
                    >
                      <Users size={18} style={{ color: '#ffffff' }} />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800 text-sm">Team Inbox</span>
                      <p className="text-xs text-slate-400">3 agents online</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full border-2 border-white" style={{ background: 'linear-gradient(135deg, #a78bfa, #a855f7)' }} />
                    <div className="w-7 h-7 rounded-full border-2 border-white" style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)' }} />
                    <div className="w-7 h-7 rounded-full border-2 border-white" style={{ background: 'linear-gradient(135deg, #34d399, #14b8a6)' }} />
                  </div>
                </div>
              </div>
              {/* Chat Items */}
              <div className="p-3 space-y-2">
                {[
                  { name: 'Priya Sharma', msg: 'Need help with my order...', time: '2m', status: 'open', unread: 2 },
                  { name: 'Rahul Verma', msg: 'Thanks for the quick response!', time: '8m', status: 'resolved', unread: 0 },
                  { name: 'Ankit Patel', msg: 'Is the product available?', time: '15m', status: 'pending', unread: 1 },
                ].map((chat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group/item">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                      style={{
                        background: i === 0 ? 'linear-gradient(135deg, #fb7185, #ec4899)' :
                          i === 1 ? 'linear-gradient(135deg, #60a5fa, #6366f1)' :
                            'linear-gradient(135deg, #fbbf24, #f97316)',
                        color: '#ffffff'
                      }}
                    >
                      {chat.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-800 text-sm">{chat.name}</span>
                        <span className="text-xs text-slate-400">{chat.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{chat.msg}</p>
                    </div>
                    {chat.unread > 0 && (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">{chat.unread}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 flex-1 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <MessageSquare size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-emerald-600">Team Collaboration</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-slate-800">Shared Team Inbox</h2>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Multi-agent dashboard with conversation assignment, status tracking, and internal notes for seamless team collaboration.
            </p>
            <div className="flex gap-3">
              <Button variant="primary" size="lg" className="flex items-center gap-2 shadow-lg shadow-emerald-500/25" style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)', color: '#ffffff' }}>
                <span>Get Started</span> <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Chatbot Builder */}
        <Card
          className="relative bg-gradient-to-br from-white to-violet-50/50 flex flex-col min-h-[520px] group overflow-hidden border border-slate-200/80 hover:border-violet-300/50 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <CardHeader className="relative z-10">
            <div className="w-full max-w-sm h-[300px] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-5">
              {/* Flow Builder Mockup */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #8b5cf6, #a855f7)' }}
                >
                  <Bot size={16} style={{ color: '#ffffff' }} />
                </div>
                <span className="font-semibold text-slate-800 text-sm">Flow Builder</span>
                <span className="ml-auto px-2 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-semibold rounded-full">No Code</span>
              </div>
              {/* Flow Nodes */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-32 py-2 px-3 rounded-xl text-xs font-medium text-center shadow-lg"
                    style={{ background: 'linear-gradient(to right, #8b5cf6, #a855f7)', color: '#ffffff' }}
                  >
                    Welcome Message
                  </div>
                  <div className="w-4 h-0.5 bg-slate-300" />
                  <Zap size={14} style={{ color: '#f59e0b' }} />
                </div>
                <div className="ml-4 w-0.5 h-4 bg-slate-300" />
                <div className="flex items-center gap-3 ml-6">
                  <div className="w-28 py-2 px-3 bg-slate-100 rounded-xl text-slate-600 text-xs font-medium text-center border border-slate-200">
                    User Input
                  </div>
                </div>
                <div className="ml-10 w-0.5 h-4 bg-slate-300" />
                <div className="flex gap-3 ml-4">
                  <div className="w-24 py-2 px-3 bg-emerald-100 rounded-xl text-emerald-600 text-xs font-medium text-center border border-emerald-200">
                    Order Status
                  </div>
                  <div className="w-24 py-2 px-3 bg-blue-100 rounded-xl text-blue-600 text-xs font-medium text-center border border-blue-200">
                    Support
                  </div>
                </div>
                <div className="flex gap-16 ml-8">
                  <div className="w-0.5 h-4 bg-slate-300" />
                  <div className="w-0.5 h-4 bg-slate-300" />
                </div>
                <div className="flex gap-3 ml-4">
                  <div className="w-24 py-2 px-3 bg-amber-100 rounded-xl text-amber-600 text-xs font-medium text-center border border-amber-200">
                    API Call
                  </div>
                  <div className="w-24 py-2 px-3 bg-rose-100 rounded-xl text-rose-600 text-xs font-medium text-center border border-rose-200">
                    Agent
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 flex-1 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-violet-600">Visual Automation</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-slate-800">No-Code Chatbot Builder</h2>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Drag & drop flow builder with conditional logic, keyword triggers, and seamless human handoff capabilities.
            </p>
            <div className="flex gap-3">
              <Button variant="primary" size="lg" className="flex items-center gap-2 shadow-lg shadow-violet-500/25" style={{ background: 'linear-gradient(to right, #8b5cf6, #a855f7)', color: '#ffffff' }}>
                <span>Build Your Bot</span> <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Broadcast & Campaigns */}
        <Card
          className="relative bg-gradient-to-br from-white to-amber-50/50 flex flex-col min-h-[520px] group overflow-hidden border border-slate-200/80 hover:border-amber-300/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background Glow */}
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <CardHeader className="relative z-10">
            <div className="w-full max-w-sm h-[300px] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-5">
              {/* Campaign Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}
                  >
                    <Send size={16} style={{ color: '#ffffff' }} />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm">Campaign Analytics</span>
                </div>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-semibold rounded-full flex items-center gap-1">
                  <CheckCircle2 size={10} style={{ color: '#10b981' }} /> Live
                </span>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Delivered', value: '12,847', change: '+23%', color: 'emerald' },
                  { label: 'Read Rate', value: '89.2%', change: '+8%', color: 'blue' },
                  { label: 'CTR', value: '24.5%', change: '+12%', color: 'violet' },
                  { label: 'Replies', value: '3,421', change: '+45%', color: 'amber' },
                ].map((stat, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
                    <div className="flex items-end justify-between">
                      <span className="text-lg font-bold text-slate-800">{stat.value}</span>
                      <span className={`text-[10px] font-semibold text-${stat.color}-500`}>{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Mini Chart */}
              <div className="h-16 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                    style={{ height: `${h}%`, background: 'linear-gradient(to top, #f59e0b, #fb923c)' }}
                  />
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 flex-1 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}
              >
                <BarChart3 size={16} style={{ color: '#ffffff' }} />
              </div>
              <span className="text-sm font-medium text-amber-600">Smart Campaigns</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-slate-800">Broadcast & Campaigns</h2>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Bulk messaging with contact segmentation, scheduled campaigns, and real-time analytics for maximum engagement.
            </p>
            <div className="flex gap-3">
              <Button variant="primary" size="lg" className="flex items-center gap-2 shadow-lg shadow-amber-500/25" style={{ background: 'linear-gradient(to right, #f59e0b, #f97316)', color: '#ffffff' }} >
                <span>Launch Campaign</span> <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 4: CRM Management */}
        <Card
          className="relative bg-gradient-to-br from-white to-blue-50/50 flex flex-col min-h-[520px] group overflow-hidden border border-slate-200/80 hover:border-blue-300/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Background Glow */}
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <CardHeader className="relative z-10">
            <div className="w-full max-w-sm h-[300px] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-5">
              {/* CRM Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
                  >
                    <Database size={16} style={{ color: '#ffffff' }} />
                  </div>
                  <span className="font-semibold text-slate-800 text-sm">Contact Manager</span>
                </div>
                <button className="px-3 py-1.5 bg-blue-500 text-white text-[10px] font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                  + Add
                </button>
              </div>
              {/* Contact Cards */}
              <div className="space-y-2">
                {[
                  { name: 'Vikram Singh', tags: ['VIP', 'Returning'], journey: 'Purchase', value: '₹45K' },
                  { name: 'Neha Kapoor', tags: ['New Lead'], journey: 'Browsing', value: '₹12K' },
                  { name: 'Arjun Reddy', tags: ['Enterprise'], journey: 'Negotiation', value: '₹2.5L' },
                ].map((contact, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                      style={{
                        background: i === 0 ? 'linear-gradient(135deg, #60a5fa, #6366f1)' :
                          i === 1 ? 'linear-gradient(135deg, #34d399, #14b8a6)' :
                            'linear-gradient(135deg, #a78bfa, #a855f7)',
                        color: '#ffffff'
                      }}
                    >
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-800 text-sm">{contact.name}</span>
                        {contact.tags.map((tag, j) => (
                          <span key={j} className={`px-1.5 py-0.5 text-[8px] font-semibold rounded ${tag === 'VIP' ? 'bg-amber-100 text-amber-600' :
                            tag === 'Enterprise' ? 'bg-violet-100 text-violet-600' :
                              tag === 'Returning' ? 'bg-emerald-100 text-emerald-600' :
                                'bg-blue-100 text-blue-600'
                            }`}>{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] text-slate-400">{contact.journey}</p>
                        <span className="text-xs font-semibold text-emerald-600">{contact.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 flex-1 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
              >
                <Database size={16} style={{ color: '#ffffff' }} />
              </div>
              <span className="text-sm font-medium text-blue-600">Smart CRM</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-slate-800">Contact & CRM Management</h2>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">
              Import contacts, apply tags, track user journeys, and maintain complete conversation history for each customer.
            </p>
            <div className="flex gap-3">
              <Button variant="primary" size="lg" className="flex items-center gap-2 shadow-lg shadow-blue-500/25" style={{ background: 'linear-gradient(to right, #3b82f6, #6366f1)', color: '#ffffff' }}>
                <span>Manage Contacts</span> <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedCards;
