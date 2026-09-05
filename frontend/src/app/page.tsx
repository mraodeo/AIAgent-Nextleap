"use client";

import { useEffect, useState } from "react";
import { Activity, BarChart3, MessageSquare, Clock, UploadCloud, Settings, Download, Play, CheckCircle2, CheckCircle, TrendingUp, Sparkles, Hash, Database, Cpu, PieChart } from 'lucide-react';

interface PulseReport {
  metrics: {
    reviews_analyzed: number;
    total_in_window: number;
    dropped_praise: number;
    signal_kept_percentage: number;
    average_rating: number;
    rating_benchmark: number;
    window_start: string;
    window_end: string;
    top_theme_share: number;
    top_theme_name: string;
    top_theme_volume: number;
    editorial_budget_used: number;
    editorial_budget_max: number;
    synthesis_model: string;
  };
  themes: {
    rank: string;
    name: string;
    description: string;
    volume: number;
    rating: number;
    negative_percentage: number;
  }[];
  pulse_health: {
    name: string;
    value: string;
    verified: boolean;
  }[];
}

export default function Dashboard() {
  const [data, setData] = useState<PulseReport | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-base)]">
        <div className="text-[var(--color-accent-champagne)] animate-pulse flex items-center gap-3 font-mono text-sm tracking-widest">
          <Activity className="w-5 h-5 animate-spin-slow" />
          [SYSTEM INITIALIZING]
        </div>
      </div>
    );
  }

  const { metrics, themes, pulse_health } = data;

  return (
    <div className="flex h-screen overflow-hidden text-sm">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[var(--color-bg-base)]/50 backdrop-blur-md border-r border-[var(--color-border-subtle)] flex flex-col flex-shrink-0 z-20 shadow-2xl shadow-black/50">
        <div className="h-[72px] px-6 flex items-center justify-between border-b border-[var(--color-border-subtle)]">
          <div>
            <div className="font-bold text-lg text-white tracking-wide flex items-center gap-2">
              <Database className="w-5 h-5 text-[var(--color-accent-champagne)]" />
              Insight<span className="text-[var(--color-text-secondary)] font-normal">Agent</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-8 px-4 space-y-1.5">
          <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-tertiary)] font-bold mb-4 px-3">
            Analytics Core
          </div>
          {[
            { icon: PieChart, label: "Overview", active: true },
            { icon: Hash, label: "Narratives" },
            { icon: MessageSquare, label: "Raw Verbatims" },
            { icon: Activity, label: "Processing Logic" },
            { icon: Clock, label: "Execution Logs" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-[var(--color-accent-champagne-dim)] text-[var(--color-accent-champagne)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white'}`}>
              <item.icon className="w-4 h-4" />
              <span className="font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-text-tertiary)] font-mono">
          <div className="flex justify-between items-center mb-3">
            <span className="text-white">SYS_STATUS</span>
            <span className="text-[10px] text-[var(--color-accent-sage)] bg-[var(--color-accent-sage-dim)] border border-[var(--color-accent-sage)]/30 px-2 py-1 rounded-md">OPTIMAL</span>
          </div>
          <div className="flex items-center justify-between">
             <span>LAST_SYNC</span>
             <span className="text-white">8m ago</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden relative">
        
        {/* Top Header */}
        <header className="h-[72px] px-8 flex items-center justify-between border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]/80 backdrop-blur-lg sticky top-0 z-10">
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-medium text-white tracking-tight">Review Insights Dashboard</h1>
            
            <div className="h-5 w-[1px] bg-[var(--color-border-strong)]" />
            
            <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--color-text-secondary)]">
              <span className="flex items-center gap-1.5 bg-[var(--color-bg-surface)] px-3 py-1.5 rounded-md border border-[var(--color-border-subtle)]">
                <Clock className="w-3 h-3" />
                Q3 TRAILING
              </span>
              <span>12 JUN → 3 SEPT</span>
              
              <span className="flex items-center gap-1.5 bg-[var(--color-accent-sage-dim)] text-[var(--color-accent-sage)] px-3 py-1.5 rounded-md border border-[var(--color-accent-sage)]/30 ml-2 shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                <div className="w-1.5 h-1.5 bg-[var(--color-accent-sage)] rounded-full animate-pulse" />
                PIPELINE CONNECTED
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-[var(--color-border-strong)] hover:border-white hover:bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-white rounded-lg transition-all font-medium">
              <Download className="w-4 h-4" /> Export Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-text-primary)] hover:bg-white text-black rounded-lg transition-all font-medium shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              <Play className="w-4 h-4 fill-current" /> Execute Synthesis
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-accent-champagne)] to-orange-600 flex items-center justify-center text-xs font-bold text-white shadow-lg ml-2 border border-[var(--color-bg-base)]">
              MK
            </div>
          </div>
        </header>

        <div className="p-8 max-w-[1600px] mx-auto w-full space-y-6">
          
          {/* KPI Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="exec-card p-6 flex flex-col justify-between group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)] font-bold">Total Reviews Processed</span>
                <div className="p-1.5 bg-[var(--color-bg-base)] rounded-md border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-champagne)] transition-colors">
                  <Database className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-champagne)] transition-colors" />
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-white text-mono-data tracking-tight mb-2">
                  {metrics.reviews_analyzed.toLocaleString()}
                </div>
                <div className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                  Extracted from {metrics.total_in_window.toLocaleString()} in window
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] flex justify-between items-center text-xs font-mono">
                  <span className="text-[var(--color-text-tertiary)]">Noise reduction</span>
                  <span className="text-[var(--color-accent-sage)] font-medium">{metrics.signal_kept_percentage}% signal kept</span>
                </div>
              </div>
            </div>

            <div className="exec-card p-6 flex flex-col justify-between group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)] font-bold">Average User Rating</span>
              </div>
              <div>
                <div className="text-4xl font-light text-[var(--color-accent-rose)] text-mono-data tracking-tight mb-2 flex items-baseline gap-1">
                  {metrics.average_rating.toFixed(2)}<span className="text-xl">★</span>
                </div>
                <div className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                  Based on all processed reviews
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] flex justify-between items-center text-[10px] font-mono text-[var(--color-text-tertiary)]">
                  <span>Delta vs Baseline</span>
                  <span className="text-[var(--color-accent-rose)]">-0.18</span>
                </div>
              </div>
            </div>

            <div className="exec-card p-6 flex flex-col justify-between group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)] font-bold">Top Trend Impact</span>
              </div>
              <div>
                <div className="text-4xl font-light text-white text-mono-data tracking-tight mb-2">
                  {metrics.top_theme_share}%
                </div>
                <div className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed truncate">
                  "{metrics.top_theme_name}"
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] flex justify-between items-center text-xs font-mono">
                  <span className="text-[var(--color-text-tertiary)]">Total Mentions</span>
                  <span className="text-white flex items-center">{metrics.top_theme_volume}</span>
                </div>
              </div>
            </div>

            <div className="exec-card p-6 flex flex-col justify-between group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[11px] uppercase tracking-widest text-[var(--color-text-tertiary)] font-bold">AI Processing Budget</span>
                <div className="p-1.5 bg-[var(--color-bg-base)] rounded-md border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-champagne)] transition-colors">
                  <Cpu className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-champagne)] transition-colors" />
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-white text-mono-data tracking-tight mb-4">
                  {metrics.editorial_budget_used} <span className="text-[15px] text-[var(--color-text-tertiary)] font-sans">/ {metrics.editorial_budget_max}</span>
                </div>
                <div className="w-full bg-[var(--color-bg-base)] h-2 rounded-full overflow-hidden mb-4 border border-[var(--color-border-subtle)]">
                  <div className="bg-gradient-to-r from-[var(--color-accent-champagne)] to-yellow-200 h-full rounded-full" style={{ width: `${(metrics.editorial_budget_used / metrics.editorial_budget_max) * 100}%` }} />
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--color-border-subtle)] flex justify-between items-center text-[10px] font-mono">
                  <span className="text-[var(--color-text-tertiary)]">Engine</span>
                  <span className="text-white px-2 py-0.5 bg-[var(--color-bg-elevated)] rounded border border-[var(--color-border-subtle)]">{metrics.synthesis_model}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Main Bottom Section (Themes & Health) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left: Top Themes List */}
            <div className="lg:col-span-2 exec-card">
              <div className="exec-card-header">
                <div className="flex items-center gap-2 text-[15px] font-medium text-white tracking-wide">
                  Top User Themes
                </div>
                <div className="text-[11px] font-mono text-[var(--color-accent-champagne)] bg-[var(--color-accent-champagne-dim)] px-2.5 py-1 rounded-md border border-[var(--color-accent-champagne)]/20 font-bold">
                  TOP 3 FOCAL POINTS
                </div>
              </div>
              
              <div className="divide-y divide-[var(--color-border-subtle)]">
                {themes.map((theme, i) => (
                  <div key={i} className="p-6 hover:bg-[rgba(255,255,255,0.02)] transition-colors group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[11px] font-bold text-[var(--color-text-tertiary)] bg-[var(--color-bg-base)] px-2 py-1 rounded border border-[var(--color-border-subtle)] group-hover:text-[var(--color-accent-champagne)] group-hover:border-[var(--color-accent-champagne)]/50 transition-colors">
                          {theme.rank}
                        </span>
                        <h3 className="text-[16px] font-medium text-white">{theme.name}</h3>
                      </div>
                      <div className="flex items-center gap-6 font-mono text-[12px] text-[var(--color-text-tertiary)] bg-[var(--color-bg-base)] px-4 py-1.5 rounded-lg border border-[var(--color-border-subtle)]">
                        <span>{theme.volume} <span className="text-[var(--color-text-secondary)]">vol</span></span>
                        <span className="text-[var(--color-text-secondary)]">{theme.rating}★</span>
                        <span className="text-[var(--color-accent-rose)]">{theme.negative_percentage}% neg</span>
                      </div>
                    </div>
                    <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed pl-12">
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pulse Health Checklist */}
            <div className="exec-card">
              <div className="exec-card-header">
                <div className="flex items-center gap-2 text-[15px] font-medium text-white tracking-wide">
                  Data Quality Checks
                </div>
                <div className="text-[11px] font-mono text-[var(--color-accent-sage)] border border-[var(--color-accent-sage)]/30 bg-[var(--color-accent-sage-dim)] px-2.5 py-1 rounded-md font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3" /> 100% PASS
                </div>
              </div>
              
              <div className="p-6 space-y-4 font-mono text-[12px] flex flex-col h-[calc(100%-57px)] justify-between">
                <div className="space-y-5">
                  {pulse_health.map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-5 last:border-0 last:pb-0">
                      <div className="text-[var(--color-text-secondary)] flex-1 leading-relaxed">
                        {item.name} <br/> <span className="text-white font-sans text-[13px] mt-1 inline-block">{item.value}</span>
                      </div>
                      {item.verified && (
                        <div className="flex items-center gap-1.5 text-[var(--color-accent-sage)] shrink-0 mt-1 bg-[var(--color-bg-base)] px-2 py-1 rounded border border-[var(--color-border-subtle)]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> OK
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
