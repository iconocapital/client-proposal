import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Slide05Findings3() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          What We Found
        </h2>
        <div className="slide-divider mb-10" />

        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* Finding 5: Retirement Sustainability */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <ShieldCheck className="w-5 h-5" style={{ color: 'hsl(180, 38%, 30%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">Retirement Sustainability</h3>
            </div>
            <div className="space-y-4 text-lg text-slide-gray-600 leading-relaxed">
              <p>
                The good news: <strong className="text-slide-gray-900">your plan works.</strong>
              </p>
              <div className="flex items-center gap-6 my-4">
                <div className="text-center p-4 rounded-lg bg-slide-gray-100">
                  <p className="text-4xl font-bold text-slide-gray-900">85%</p>
                  <p className="text-sm text-slide-gray-400">Current path</p>
                </div>
                <span className="text-2xl text-slide-gray-300">→</span>
                <div className="text-center p-4 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
                  <p className="text-4xl font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>89%</p>
                  <p className="text-sm text-slide-gray-500">Proposed plan</p>
                </div>
              </div>
              <p>
                Monte Carlo analysis — stress-tested against a 20% market drop, higher taxes, reduced Social Security, and living to age 100.
              </p>
              <div className="p-4 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
                <p className="text-base font-semibold" style={{ color: 'hsl(145, 63%, 42%)' }}>
                  ✦ $638,446 less in total retirement spending through better tax efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Finding 6: Insurance */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(36, 100%, 95%)' }}>
                <Heart className="w-5 h-5" style={{ color: 'hsl(36, 100%, 50%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">No Life or LTC Insurance</h3>
            </div>
            <div className="space-y-4 text-lg text-slide-gray-600 leading-relaxed">
              <p>
                You currently carry no life or long-term care insurance.
              </p>
              <p>
                Given your goal to spend down assets and your family longevity (planning to 100), this is a key risk area.
              </p>
              <div className="p-4 rounded-lg bg-slide-gray-100 my-4">
                <p className="text-3xl font-bold text-slide-gray-900">$75,504<span className="text-lg font-normal text-slide-gray-400">/year</span></p>
                <p className="text-sm text-slide-gray-500">Estimated extended care costs if needed</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <p className="text-base font-semibold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                  ✦ Recommendation: Evaluate hybrid LTC policy or self-insurance strategy.
                </p>
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
