import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { PieChart, AlertTriangle } from 'lucide-react';

const accounts = [
  { name: 'DC Retirement Plan @ TIAA [1]', value: '$426,323' },
  { name: 'TDA Retirement Plan @ TIAA [1]', value: '$322,091' },
  { name: 'Precious Metals IRA @ Accuplan', value: '$231,691' },
  { name: 'DC Retirement Plan @ TIAA [2]', value: '$167,776' },
  { name: 'TDA Retirement Plan @ TIAA [2]', value: '$144,337' },
  { name: 'Rollover IRA @ TIAA', value: '$53,555' },
];

export default function Slide04Findings1() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Key Findings
        </h2>
        <div className="slide-divider mb-8" />

        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* Finding 1: Portfolio */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <PieChart className="w-5 h-5" style={{ color: 'hsl(180, 38%, 30%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">Portfolio Concentration</h3>
            </div>

            <p className="text-lg text-slide-gray-600 mb-4">
              <strong className="text-slide-gray-900">81% equity / 19% fixed income</strong> — heavily weighted toward U.S. large-cap growth (Microsoft, Nvidia, Apple). International exposure only <strong className="text-slide-gray-900">1.7%</strong> vs. 14.5% target.
            </p>

            <p className="text-base text-slide-gray-500 mb-3 font-medium">Account Breakdown:</p>
            <div className="space-y-1.5 mb-4">
              {accounts.map((a, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-slide-gray-600">{a.name}</span>
                  <span className="font-semibold text-slide-gray-900 tabular-nums">{a.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto p-3 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
              <p className="text-sm font-semibold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                ✦ Shift to 60/40 allocation with international diversification
              </p>
            </div>
          </div>

          {/* Finding 2: Precious Metals */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(36, 100%, 95%)' }}>
                <AlertTriangle className="w-5 h-5" style={{ color: 'hsl(36, 100%, 50%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">Precious Metals Overweight</h3>
            </div>

            <p className="text-lg text-slide-gray-600 mb-4">
              Gold alone represents <strong className="text-slide-gray-900">~13%</strong> of portfolio ($231,691 at Accuplan). Silver dropped 30%+ in a single day — highlighting downside risk.
            </p>

            <div className="p-4 rounded-lg bg-slide-gray-100 mb-4">
              <p className="text-base text-slide-gray-600">
                Tracy expressed <strong className="text-slide-gray-900">dissatisfaction with Accuplan's</strong> reporting and transparency. Wants advice on whether to move to a different custodian or liquidate entirely.
              </p>
            </div>

            <div className="mt-auto p-3 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
              <p className="text-sm font-semibold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                ✦ Trim precious metals by 50–66%, reallocate into diversified bonds & international equity
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-4">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          <span className="text-sm text-slide-gray-400">4</span>
        </div>
      </div>
    </SlideLayout>
  );
}
