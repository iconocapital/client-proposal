import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { Check } from 'lucide-react';

const optionA = [
  'Comprehensive financial plan covering all scope items',
  'Written recommendations with specific action steps',
  'Two follow-up implementation calls over 90 days',
  'Email support throughout the engagement period',
  'Full RightCapital dashboard access for 12 months',
  'You execute all trades and account moves yourself',
];

const optionB = [
  'Everything in the project scope, plus ongoing updates',
  'Proactive Roth conversion execution each year through age 73',
  'Annual tax planning and coordination with your CPA',
  'Quarterly check-in calls and unlimited email access',
  'Continuous portfolio monitoring and rebalancing',
  'Insurance and estate planning reviews as needed',
  'Option to add asset management at 0.90% AUM',
];

export default function Slide07Options() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Engagement Options
        </h2>
        <div className="slide-divider mb-6" />

        <p className="text-xl text-slide-gray-500 mb-8">
          Both options deliver the same core planning work — choose the model that fits how you want to work going forward.
        </p>

        <div className="flex-1 grid grid-cols-2 gap-10">
          {/* Option A */}
          <div className="rounded-xl border border-slide-gray-200 overflow-hidden flex flex-col">
            <div className="px-8 py-5" style={{ background: 'hsl(174, 30%, 93%)' }}>
              <h3 className="text-2xl font-bold text-slide-gray-900">Option A: Financial Planning Project</h3>
              <p className="text-base" style={{ color: 'hsl(174, 42%, 43%)' }}>One-time engagement • ~90 days</p>
            </div>
            <div className="px-8 py-5 flex-1">
              <p className="text-4xl font-bold mb-1" style={{ color: 'hsl(180, 38%, 30%)' }}>$4,500</p>
              <p className="text-sm text-slide-gray-400 mb-5">One-time fee, payable at engagement start</p>
              <div className="space-y-3">
                {optionA.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'hsl(174, 42%, 43%)' }} />
                    <span className="text-base text-slide-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 py-4 bg-slide-gray-100 border-t border-slide-gray-200">
              <p className="text-sm text-slide-gray-500 italic">Best for hands-on investors who prefer to implement independently.</p>
            </div>
          </div>

          {/* Option B */}
          <div className="rounded-xl border-2 overflow-hidden flex flex-col" style={{ borderColor: 'hsl(180, 38%, 30%)' }}>
            <div className="px-8 py-5" style={{ background: 'hsl(180, 38%, 30%)' }}>
              <h3 className="text-2xl font-bold text-white">Option B: Guided Wealth Management</h3>
              <p className="text-base text-white/80">Ongoing annual relationship</p>
            </div>
            <div className="px-8 py-5 flex-1">
              <p className="text-4xl font-bold mb-1" style={{ color: 'hsl(180, 38%, 30%)' }}>$7,000 <span className="text-xl font-normal text-slide-gray-400">first year</span></p>
              <p className="text-sm text-slide-gray-400 mb-5">$4,500 annually thereafter • Or 0.90% AUM (planning fee waived)</p>
              <div className="space-y-3">
                {optionB.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'hsl(174, 42%, 43%)' }} />
                    <span className="text-base text-slide-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 py-4 border-t" style={{ background: 'hsl(174, 30%, 93%)', borderColor: 'hsl(174, 42%, 80%)' }}>
              <p className="text-sm italic" style={{ color: 'hsl(180, 38%, 30%)' }}>Recommended — especially during the critical Roth conversion window through 2029.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-4">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          <span className="text-sm text-slide-gray-400">7</span>
        </div>
      </div>
    </SlideLayout>
  );
}
