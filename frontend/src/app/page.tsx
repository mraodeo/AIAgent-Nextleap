"use client";

import { useEffect, useState } from "react";

interface PulseReport {
  themes: string[];
  quotes: string[];
  actions: string[];
  metrics: {
    total_reviews: number;
    sentiment_score: number;
    rating: number;
  };
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-cyan-primary animate-pulse text-headline-sm">
          INITIALIZING AI SYSTEMS...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-10 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[var(--color-cyan-primary)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-violet-primary)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto space-y-8 relative z-10">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-display-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--color-muted)]">
              Review Pulse AI
            </h1>
            <p className="text-muted mt-2 text-headline-sm">
              Live Customer Sentiment & Operational Intelligence
            </p>
          </div>

          <div className="flex gap-4">
            <div className="glass-panel rounded-xl p-4 min-w-[160px]">
              <div className="text-label-sm text-[var(--color-cyan-primary)] mb-1">
                Sentiment Score
              </div>
              <div className="text-data-metric text-white">
                {data.metrics.sentiment_score}
                <span className="text-headline-sm text-muted">/100</span>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-4 min-w-[160px]">
              <div className="text-label-sm text-[var(--color-emerald-primary)] mb-1">
                Avg Rating
              </div>
              <div className="text-data-metric text-white">
                {data.metrics.rating.toFixed(1)}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Main Left Column (Themes & Quotes) */}
          <div className="xl:col-span-8 space-y-6">
            
            {/* Top Themes Widget */}
            <section className="glass-panel glass-hover rounded-2xl p-6">
              <div className="flex items-center justify-between border-b border-[var(--color-border-normal)] pb-4 mb-6">
                <h2 className="text-headline-md text-white">Extracted Themes</h2>
                <span className="text-label-sm text-[var(--color-violet-primary)] bg-[var(--color-neutral-bg)] px-3 py-1 rounded-full border border-[var(--color-neutral-border)]">
                  AI Analyzed
                </span>
              </div>
              
              <div className="space-y-4">
                {data.themes.map((theme, i) => {
                  const isPositive = theme.toLowerCase().startsWith("positive:");
                  const isNegative = theme.toLowerCase().startsWith("negative:");
                  
                  let badgeClass = "bg-[var(--color-neutral-bg)] border-[var(--color-neutral-border)] text-[var(--color-neutral-text)]";
                  let badgeText = "NEUTRAL";
                  
                  if (isPositive) {
                    badgeClass = "bg-[var(--color-positive-bg)] border-[var(--color-positive-border)] text-[var(--color-positive-text)]";
                    badgeText = "POSITIVE";
                  } else if (isNegative) {
                    badgeClass = "bg-[var(--color-alert-bg)] border-[var(--color-alert-border)] text-[var(--color-alert-text)]";
                    badgeText = "ALERT";
                  }

                  const cleanTheme = theme.replace(/^(Positive:|Negative:|Neutral:)\s*/i, "");

                  return (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-[#0d0f18] border border-[var(--color-border-normal)] hover:border-[var(--color-cyan-primary)] transition-colors duration-300">
                      <div className="mt-1 flex-shrink-0">
                        <span className={`text-label-sm px-2 py-1 rounded-full border ${badgeClass}`}>
                          {badgeText}
                        </span>
                      </div>
                      <p className="text-white text-[15px] leading-relaxed font-body">
                        {cleanTheme}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Verbatim Quotes Feed */}
            <section className="glass-panel glass-hover rounded-2xl p-6">
              <div className="flex items-center justify-between border-b border-[var(--color-border-normal)] pb-4 mb-6">
                <h2 className="text-headline-md text-white">Verbatim Intelligence</h2>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-cyan-primary)] animate-pulse" />
                  <span className="text-label-sm text-muted">LIVE FEED</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.quotes.map((quote, i) => (
                  <div key={i} className="p-5 rounded-xl border border-[var(--color-border-normal)] bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-transparent relative group">
                    <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgba(0,242,254,0.05)] to-transparent pointer-events-none" />
                    <svg className="w-6 h-6 text-[var(--color-faint)] mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-muted italic text-[15px] font-body leading-relaxed relative z-10">
                      "{quote}"
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar (Actions) */}
          <div className="xl:col-span-4">
            <section className="glass-panel glass-hover rounded-2xl p-6 h-full">
              <div className="border-b border-[var(--color-border-normal)] pb-4 mb-6">
                <h2 className="text-headline-md text-white">Recommended Actions</h2>
                <p className="text-muted text-sm mt-1">Generated by AI Strategy Engine</p>
              </div>
              
              <div className="space-y-4">
                {data.actions.map((action, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded border border-[var(--color-border-normal)] group-hover:border-[var(--color-emerald-primary)] group-hover:bg-[var(--color-positive-bg)] transition-all flex items-center justify-center">
                        <div className="w-2 h-2 rounded-sm bg-[var(--color-emerald-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <p className="text-[#e3e1e9] text-[14px] leading-relaxed group-hover:text-white transition-colors">
                      {action}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button className="btn-executive w-full py-3 px-4 rounded-xl text-center">
                  Export Operations Report
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
