import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { ShieldCheck, Heart } from 'lucide-react';

const stressTests = [
  { scenario: 'Baseline', prob: 89 },
  { scenario: 'Market drop −20%', prob: 82 },
  { scenario: 'Higher taxes +20%', prob: 85 },
  { scenario: 'Reduced SS −20%', prob: 77 },
  { scenario: 'Live 5 yrs longer', prob: 87 },
  { scenario: 'Higher inflation +1%', prob: 81 },
  { scenario: 'Higher healthcare +20%', prob: 87 },
  { scenario: 'Lower returns −1%', prob: 80 },
];

export default function Slide06Findings3() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Key Findings
        </h2>
        <div className="slide-divider mb-8" />

        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* Retirement Sustainability */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <ShieldCheck className="w-5 h-5" style={{ color: 'hsl(180, 38%, 30%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">Retirement Sustainability</h3>
            </div>

            <div className="flex items-center gap-6 mb-4">
              <div className="text-center p-4 rounded-lg bg-slide-gray-100">
                <p className="text-4xl font-bold text-slide-gray-900">85%</p>
                <p className="text-sm text-slide-gray-400">Current plan</p>
              </div>
              <span className="text-2xl text-slide-gray-300">→</span>
              <div className="text-center p-4 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
                <p className="text-4xl font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>89%</p>
                <p className="text-sm text-slide-gray-500">Proposed plan</p>
              </div>
            </div>

            <p className="text-base font-medium text-slide-gray-600 mb-2">Stress Test Results (Monte Carlo, 1,000 simulations):</p>
            <div className="space-y-1.5">
              {stressTests.map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-sm text-slide-gray-600 w-[190px]">{t.scenario}</span>
                  <div className="flex-1 h-4 bg-slide-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${t.prob}%`,
                        background: t.prob >= 85 ? 'hsl(145, 63%, 42%)' : t.prob >= 80 ? 'hsl(36, 100%, 50%)' : 'hsl(4, 90%, 58%)',
                      }}
                    />
                  </div>
                  <span className="text-sm font-bold text-slide-gray-900 w-10 text-right tabular-nums">{t.prob}%</span>
                </div>
              ))}
            </div>

            <div className="mt-auto p-3 rounded-lg" style={{ background: 'hsl(145, 40%, 92%)' }}>
              <p className="text-sm font-semibold" style={{ color: 'hsl(145, 63%, 42%)' }}>
                ✦ $638,446 less in total retirement spending through better tax efficiency
              </p>
            </div>
          </div>

          {/* Insurance */}
          <div className="slide-card-accent flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(36, 100%, 95%)' }}>
                <Heart className="w-5 h-5" style={{ color: 'hsl(36, 100%, 50%)' }} />
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900">No Life or LTC Insurance</h3>
            </div>

            <p className="text-lg text-slide-gray-600 mb-4">
              No life or long-term care insurance currently in place. Given family longevity (mother 92, grandmother 98, planning to 100) this is a key risk.
            </p>

            <div className="p-4 rounded-lg bg-slide-gray-100 mb-4">
              <p className="text-4xl font-bold text-slide-gray-900">$75,504<span className="text-lg font-normal text-slide-gray-400">/year</span></p>
              <p className="text-sm text-slide-gray-500">Estimated extended care costs if needed</p>
            </div>

            <p className="text-lg text-slide-gray-600 mb-4">
              Current healthcare: Medicare + employer-subsidized supplement ($200/mo credit from former employer). No anticipated costs for mother's care — brother Mike covers.
            </p>

            <div className="p-4 rounded-lg bg-slide-gray-100 mb-4">
              <p className="text-base text-slide-gray-600">
                <strong>$100K loan to son's company</strong> — developed a fishing line with real-time data/camera (patented). 50/50 chance of repayment this year.
              </p>
            </div>

            <div className="mt-auto p-3 rounded-lg" style={{ background: 'hsl(174, 30%, 93%)' }}>
              <p className="text-sm font-semibold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                ✦ Evaluate hybrid LTC policy or self-insurance strategy
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-4">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          <span className="text-sm text-slide-gray-400">6</span>
        </div>
      </div>
    </SlideLayout>
  );
}
