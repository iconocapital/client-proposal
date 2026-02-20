import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';

const allocData = [
  { label: 'U.S. Equities', current: 49.6, target: 38.6 },
  { label: 'International Equities', current: 1.7, target: 14.5 },
  { label: 'Emerging Markets', current: 0.2, target: 4.5 },
  { label: 'Real Estate', current: 0.2, target: 2.5 },
  { label: 'U.S. Bonds', current: 2.0, target: 29.1 },
  { label: 'Int\'l Bonds', current: 0.5, target: 4.8 },
  { label: 'Cash', current: 17.0, target: 6.0 },
  { label: 'Other (TIAA Trad.)', current: 28.8, target: 0.0 },
];

const maxVal = 50;

function Bar({ value, color, maxW }: { value: number; color: string; maxW: number }) {
  const width = Math.max(1, (value / maxW) * 100);
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-5 rounded-r-sm"
        style={{ width: `${width}%`, background: color, minWidth: value > 0 ? 4 : 0 }}
      />
      <span className="text-sm text-slide-gray-600 tabular-nums">{value}%</span>
    </div>
  );
}

export default function Slide03Allocation() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Asset Allocation: Current vs. Target
        </h2>
        <div className="slide-divider mb-6" />

        <div className="flex items-center gap-8 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ background: 'hsl(4, 90%, 58%)' }} />
            <span className="text-base text-slide-gray-600">Current Allocation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm" style={{ background: 'hsl(174, 42%, 43%)' }} />
            <span className="text-base text-slide-gray-600">Target Allocation (Moderate)</span>
          </div>
          <div className="ml-auto flex items-center gap-6">
            <div className="text-center">
              <p className="text-sm text-slide-gray-400">Current Return</p>
              <p className="text-xl font-bold text-slide-gray-900">8.7%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slide-gray-400">Target Return</p>
              <p className="text-xl font-bold" style={{ color: 'hsl(180, 38%, 30%)' }}>8.0%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slide-gray-400">Risk Score</p>
              <p className="text-xl font-bold" style={{ color: 'hsl(36, 100%, 50%)' }}>54 <span className="text-sm font-normal text-slide-gray-400">/ 100</span></p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          {allocData.map((item, i) => (
            <div key={i} className="grid grid-cols-[220px_1fr] gap-4 items-center">
              <span className="text-base font-medium text-slide-gray-700 text-right">{item.label}</span>
              <div className="flex flex-col gap-1">
                <Bar value={item.current} color="hsl(4, 90%, 58%)" maxW={maxVal} />
                <Bar value={item.target} color="hsl(174, 42%, 43%)" maxW={maxVal} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
          <p className="text-base" style={{ color: 'hsl(180, 38%, 30%)' }}>
            <strong>Key Shifts:</strong> Dramatically increase international & bond exposure, eliminate "Other" (TIAA Traditional wind-down), reduce cash drag from 17% → 6%, and cut U.S. equity concentration.
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-4">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          <span className="text-sm text-slide-gray-400">3</span>
        </div>
      </div>
    </SlideLayout>
  );
}
