import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { Building2, TrendingUp } from 'lucide-react';

const rothSchedule = [
  { year: '2026', age: 70, amount: '$190', note: 'Before SS starts (Sept)' },
  { year: '2027', age: 71, amount: '$94,378', note: 'Largest conversion year' },
  { year: '2028', age: 72, amount: '$32,886', note: 'Pension begins' },
  { year: '2029+', age: 73, amount: '$11,438/yr', note: 'RMDs begin; smaller conversions through age 90' },
];

export default function Slide05Findings2() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Key Findings
        </h2>
        <div className="slide-divider mb-8" />

        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* TIAA */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <Building2 className="w-5 h-5" style={{ color: 'hsl(180, 38%, 30%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">TIAA CREF Complexity & Cost</h3>
            </div>

            <p className="text-lg text-slide-gray-600 mb-4">
              Tracy feels <strong className="text-slide-gray-900">"locked in"</strong> and frustrated by TIAA's lack of flexibility and reporting. Has not withdrawn from TIAA Traditional due to strict 10%-per-year rule.
            </p>

            <div className="flex items-center gap-6 my-3">
              <div className="text-center p-3 rounded-lg bg-slide-gray-100">
                <p className="text-3xl font-bold text-slide-gray-900">0.30%</p>
                <p className="text-sm text-slide-gray-400">TIAA S&P 500</p>
              </div>
              <span className="text-2xl text-slide-gray-300">→</span>
              <div className="text-center p-3 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <p className="text-3xl font-bold" style={{ color: 'hsl(180, 38%, 30%)' }}>0.05%</p>
                <p className="text-sm text-slide-gray-400">Vanguard Equiv.</p>
              </div>
              <div className="text-center p-3 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
                <p className="text-2xl font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>6x</p>
                <p className="text-sm text-slide-gray-500">Cost reduction</p>
              </div>
            </div>

            <div className="mt-auto p-3 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
              <p className="text-sm font-semibold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                ✦ Roll TIAA assets to Vanguard IRA for lower costs, full fund access & flexibility. Wind down TIAA Traditional via 10%/year schedule.
              </p>
            </div>
          </div>

          {/* Roth */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(145, 40%, 92%)' }}>
                <TrendingUp className="w-5 h-5" style={{ color: 'hsl(145, 63%, 42%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">Roth Conversion Opportunity</h3>
            </div>

            <p className="text-lg text-slide-gray-600 mb-3">
              <strong className="text-slide-gray-900">$0 in Roth assets</strong> — 100% of $1.35M is tax-deferred. Critical conversion window before RMDs at 73.
            </p>

            <div className="space-y-2 mb-4">
              {rothSchedule.map((r, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slide-gray-100">
                  <span className="text-sm font-bold text-slide-gray-600 w-16">{r.year}</span>
                  <span className="text-lg font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>{r.amount}</span>
                  <span className="text-sm text-slide-gray-400 ml-auto">{r.note}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
                <p className="text-2xl font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>+$243,652</p>
                <p className="text-xs text-slide-gray-500">More tax-adjusted wealth</p>
              </div>
              <div className="text-center p-3 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
                <p className="text-2xl font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>−$458,191</p>
                <p className="text-xs text-slide-gray-500">Less lifetime federal taxes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-4">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          <span className="text-sm text-slide-gray-400">5</span>
        </div>
      </div>
    </SlideLayout>
  );
}
