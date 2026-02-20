import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { PieChart, AlertTriangle } from 'lucide-react';

export default function Slide03Findings1() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          What We Found
        </h2>
        <div className="slide-divider mb-10" />

        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* Finding 1 */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <PieChart className="w-5 h-5" style={{ color: 'hsl(180, 38%, 30%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">Portfolio Concentration</h3>
            </div>
            <div className="space-y-4 text-lg text-slide-gray-600 leading-relaxed">
              <p>
                Your allocation is approximately <strong className="text-slide-gray-900">81% equity / 19% fixed income</strong>, heavily weighted toward U.S. large-cap growth — specifically tech names like Microsoft, Nvidia, and Apple.
              </p>
              <p>International exposure is only <strong className="text-slide-gray-900">1.7%</strong> versus a target of ~14.5%.</p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <p className="text-base font-semibold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                  ✦ Recommendation: Shift toward a 60/40 allocation with more international diversification.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 2 */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(36, 100%, 95%)' }}>
                <AlertTriangle className="w-5 h-5" style={{ color: 'hsl(36, 100%, 50%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">Precious Metals Overweight</h3>
            </div>
            <div className="space-y-4 text-lg text-slide-gray-600 leading-relaxed">
              <p>
                Gold alone represents <strong className="text-slide-gray-900">~13%</strong> of your portfolio. While it has performed well, the recent volatility (silver dropped over 30% in a single day) underscores the risk.
              </p>
              <div className="mt-4 p-4 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <p className="text-base font-semibold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                  ✦ Recommendation: Trim precious metals by 50–66%, reallocate into diversified bond and international equity positions.
                </p>
              </div>
            </div>
          </div>
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
