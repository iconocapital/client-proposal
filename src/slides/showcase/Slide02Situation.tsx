import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';

const facts = [
  { label: 'Age / Retirement', value: '69 (turning 70 Sept 2026); retired 11 years' },
  { label: 'Total Investable Assets', value: '$1,345,876' },
  { label: 'Net Worth', value: '$1,649,868' },
  { label: 'Annual Spending', value: '~$120,000–$140,000' },
  { label: 'Social Security', value: 'Starting Sept 2026 — $4,875/mo' },
  { label: 'Pension', value: '$13,140/yr beginning at age 72 (2028)' },
  { label: 'Housing', value: '$120K mortgage at 2.5%' },
  { label: 'Family Longevity', value: 'Planning to age 100' },
  { label: 'Estate Goal', value: 'Enjoy assets during lifetime' },
];

export default function Slide02Situation() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        {/* Section header */}
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Your Situation
        </h2>
        <div className="slide-divider mb-10" />

        <p className="text-xl text-slide-gray-500 mb-8 max-w-[1400px]">
          Tracy, it was a pleasure meeting with you. Here's a summary of what we heard.
        </p>

        {/* Facts table */}
        <div className="flex-1 grid grid-cols-1 gap-0">
          {facts.map((f, i) => (
            <div
              key={i}
              className={`flex items-center py-3 px-4 ${i % 2 === 0 ? 'bg-slide-gray-100' : ''} rounded`}
            >
              <span className="text-lg font-semibold text-slide-gray-600 w-[380px] flex-shrink-0">
                {f.label}
              </span>
              <span className="text-lg text-slide-gray-900">{f.value}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-auto">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          <span className="text-sm text-slide-gray-400">2</span>
        </div>
      </div>
    </SlideLayout>
  );
}
