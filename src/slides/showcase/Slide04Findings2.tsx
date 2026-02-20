import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { Building2, TrendingUp } from 'lucide-react';

export default function Slide04Findings2() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          What We Found
        </h2>
        <div className="slide-divider mb-10" />

        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* Finding 3: TIAA */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <Building2 className="w-5 h-5" style={{ color: 'hsl(180, 38%, 30%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">TIAA CREF Complexity & Cost</h3>
            </div>
            <div className="space-y-4 text-lg text-slide-gray-600 leading-relaxed">
              <p>
                TIAA's platform is restrictive and several funds carry higher expense ratios than equivalent ETFs.
              </p>
              <div className="flex items-center gap-6 my-4">
                <div className="text-center p-3 rounded-lg bg-slide-gray-100">
                  <p className="text-3xl font-bold text-slide-gray-900">0.30%</p>
                  <p className="text-sm text-slide-gray-400">TIAA S&P 500</p>
                </div>
                <span className="text-2xl text-slide-gray-300">→</span>
                <div className="text-center p-3 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
                  <p className="text-3xl font-bold" style={{ color: 'hsl(180, 38%, 30%)' }}>0.05%</p>
                  <p className="text-sm text-slide-gray-400">Vanguard Equiv.</p>
                </div>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <p className="text-base font-semibold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                  ✦ Recommendation: Roll TIAA assets into a Vanguard self-directed IRA for lower costs and full flexibility.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 4: Roth */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(145, 40%, 92%)' }}>
                <TrendingUp className="w-5 h-5" style={{ color: 'hsl(145, 63%, 42%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">Roth Conversion Opportunity</h3>
            </div>
            <div className="space-y-4 text-lg text-slide-gray-600 leading-relaxed">
              <p>
                You currently have <strong className="text-slide-gray-900">$0 in Roth assets</strong>, with 100% of your $1.35M in tax-deferred accounts.
              </p>
              <p>Between now and age 73 when RMDs begin, there's a meaningful window for conversions.</p>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="text-center p-3 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
                  <p className="text-2xl font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>+$243K</p>
                  <p className="text-sm text-slide-gray-500">More tax-adjusted wealth</p>
                </div>
                <div className="text-center p-3 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
                  <p className="text-2xl font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>−$458K</p>
                  <p className="text-sm text-slide-gray-500">Less lifetime taxes</p>
                </div>
              </div>
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
