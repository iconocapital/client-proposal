import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { User, Briefcase, Heart, Shield } from 'lucide-react';

const facts = [
  { label: 'Age / Retirement', value: '69 (turning 70 Sept 2026); retired 11 years' },
  { label: 'Career', value: 'Former IT Director for a nonprofit association' },
  { label: 'Total Investable Assets', value: '$1,345,876 across TIAA CREF, Precious Metals IRA & Rollover IRA' },
  { label: 'Net Worth', value: '$1,649,868' },
  { label: 'Annual Spending', value: '~$120,000–$140,000 (housing, travel & lifestyle)' },
  { label: 'Social Security', value: 'Starting Sept 2026 — $4,875/mo ($58,500/yr)' },
  { label: 'Pension', value: '$13,140/yr beginning at age 72 (2028); no COLA' },
  { label: 'Housing', value: 'Joint ownership with partner; $120K mortgage at 2.5%' },
  { label: 'Family Longevity', value: 'Mother is 92; grandmother lived to 98; planning to age 100' },
];

export default function Slide02Situation() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        {/* Section header */}
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Your Situation
        </h2>
        <div className="slide-divider mb-8" />

        {/* Key insight callout */}
        <div className="flex gap-6 mb-8">
          <div className="flex-1 p-5 rounded-xl border border-slide-gray-200 bg-slide-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4" style={{ color: 'hsl(174, 42%, 43%)' }} />
              <span className="text-base font-semibold text-slide-gray-600">Primary Goal</span>
            </div>
            <p className="text-lg text-slide-gray-900 italic">"I'm not worried about leaving a legacy for my kids. Want more to enjoy it while I'm here."</p>
          </div>
          <div className="flex-1 p-5 rounded-xl border border-slide-gray-200 bg-slide-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4" style={{ color: 'hsl(36, 100%, 50%)' }} />
              <span className="text-base font-semibold text-slide-gray-600">Risk Profile</span>
            </div>
            <p className="text-lg text-slide-gray-900">Self-describes as "too risk tolerant" — seeking confirmation on whether current allocation is too aggressive.</p>
          </div>
        </div>

        {/* Facts table */}
        <div className="flex-1 grid grid-cols-1 gap-0">
          {facts.map((f, i) => (
            <div
              key={i}
              className={`flex items-center py-2.5 px-4 ${i % 2 === 0 ? 'bg-slide-gray-100' : ''} rounded`}
            >
              <span className="text-base font-semibold text-slide-gray-600 w-[340px] flex-shrink-0">
                {f.label}
              </span>
              <span className="text-base text-slide-gray-900">{f.value}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-auto">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          <span className="text-sm text-slide-gray-400">Referred by brother Mike Dubois (client since 2021)</span>
        </div>
      </div>
    </SlideLayout>
  );
}
