import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { Check } from 'lucide-react';
import { SlideFooter } from './SlideFooter';
import { calculatePricing, formatCurrency } from '@/lib/pricing';
import type { ProspectConfig } from '@/types/prospect';

const DEFAULT_PROJECT_FEATURES = [
  'Comprehensive financial plan covering all scope items',
  'Written recommendations with specific action steps',
  'Two follow-up implementation calls over 90 days',
  'Email support throughout the engagement period',
  'Full RightCapital dashboard access for 12 months',
  'You execute all trades and account moves yourself',
];

const DEFAULT_GWM_FEATURES = [
  'Everything in the project scope, plus ongoing updates',
  'We handle account transitions and rollovers for you',
  'Annual tax planning and coordination with your CPA',
  'Quarterly check-in calls and unlimited email access',
  'Continuous portfolio monitoring and rebalancing',
  'Insurance and estate planning reviews as needed',
];

interface Props {
  pricing: ProspectConfig['pricing'];
  prospectName: string;
  pageNumber: number;
}

export function OptionsSlide({ pricing, prospectName, pageNumber }: Props) {
  const p = calculatePricing(pricing.investableAssets, pricing.projectFee, pricing.gwmTier, pricing.managedAUM);
  const projectFeatures = pricing.projectFeatures ?? DEFAULT_PROJECT_FEATURES;
  const gwmFeatures = pricing.gwmFeatures ?? [
    ...DEFAULT_GWM_FEATURES,
    `Option to add asset management at ${p.aumFeePercent}% AUM`,
  ];

  const firstName = prospectName.split(' ')[0];
  const hasManagedAccounts = pricing.managedAccounts && pricing.managedAccounts.length > 0;

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

        <div className="flex-1 grid grid-cols-2 gap-10 min-h-0 overflow-y-auto">
          {/* Option A: Project */}
          <div className="rounded-xl border border-slide-gray-200 overflow-hidden flex flex-col">
            <div className="px-8 py-5" style={{ background: 'hsl(174, 30%, 93%)' }}>
              <h3 className="text-2xl font-bold text-slide-gray-900">Option A: Financial Planning Project</h3>
              <p className="text-base" style={{ color: 'hsl(174, 42%, 43%)' }}>One-time engagement • ~90 days</p>
            </div>
            <div className="px-8 py-5 flex-1">
              <p className="text-4xl font-bold mb-1" style={{ color: 'hsl(180, 38%, 30%)' }}>
                {p.projectFeeFormatted}
              </p>
              <p className="text-sm text-slide-gray-400 mb-5">One-time fee, payable at engagement start</p>
              <div className="space-y-3">
                {projectFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'hsl(174, 42%, 43%)' }} />
                    <span className="text-base text-slide-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 py-4 bg-slide-gray-100 border-t border-slide-gray-200">
              <p className="text-sm text-slide-gray-500 italic">
                {pricing.projectFooter ?? 'You would handle all account transitions, rollovers, and ongoing implementation yourself.'}
              </p>
            </div>
          </div>

          {/* Option B: GWM */}
          <div
            className="rounded-xl border-2 overflow-hidden flex flex-col"
            style={{ borderColor: 'hsl(180, 38%, 30%)' }}
          >
            <div className="px-8 py-5" style={{ background: 'hsl(180, 38%, 30%)' }}>
              <h3 className="text-2xl font-bold text-white">
                Option B: {p.gwmTierLabel}
              </h3>
              <p className="text-base text-white/80">Ongoing annual relationship</p>
            </div>
            <div className="px-8 py-5 flex-1">
              {p.gwmYear1Waived ? (
                <>
                  <p className="text-4xl font-bold mb-1" style={{ color: 'hsl(180, 38%, 30%)' }}>
                    <span className="line-through opacity-50">{p.gwmYear1FeeFormatted}</span>{' '}
                    <span className="text-xl font-normal" style={{ color: 'hsl(145, 63%, 42%)' }}>Waived</span>{' '}
                    <span className="text-xl font-normal text-slide-gray-400">first year</span>
                  </p>
                  <p className="text-sm mb-1" style={{ color: 'hsl(145, 63%, 42%)' }}>
                    ✦ Planning fee waived with $1M+ under management
                  </p>
                </>
              ) : (
                <p className="text-4xl font-bold mb-1" style={{ color: 'hsl(180, 38%, 30%)' }}>
                  {p.gwmYear1FeeFormatted}
                  <span className="text-xl font-normal text-slide-gray-400"> first year</span>
                </p>
              )}
              <p className="text-sm text-slide-gray-400 mb-5">
                {p.gwmYear2FeeFormatted} annually thereafter • Or {p.aumFeePercent}% AUM
              </p>
              <div className="space-y-3">
                {gwmFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'hsl(174, 42%, 43%)' }} />
                    <span className="text-base text-slide-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="px-8 py-4 border-t"
              style={{ background: 'hsl(174, 30%, 93%)', borderColor: 'hsl(174, 42%, 80%)' }}
            >
              <p className="text-sm italic" style={{ color: 'hsl(180, 38%, 30%)' }}>
                {pricing.gwmFooter ?? `Recommended for ${firstName} — ${pricing.recommendedReason}`}
              </p>
            </div>
          </div>
        </div>

        {/* Managed Accounts Breakdown */}
        {hasManagedAccounts && (
          <div className="mt-4 p-4 rounded-lg border border-slide-gray-200 bg-slide-gray-100">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-slide-gray-600">
                Accounts to Consolidate with Iconoclastic
              </p>
              <p className="text-sm font-bold" style={{ color: 'hsl(180, 38%, 30%)' }}>
                Starting AUM: {p.managedAUMFormatted}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-1">
              {pricing.managedAccounts!.map((acct, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-slide-gray-500">{acct.owner} — {acct.account}:</span>
                  <span className="font-semibold text-slide-gray-900 tabular-nums">
                    {formatCurrency(acct.value)}
                  </span>
                  {acct.note && (
                    <span className="text-slide-gray-400">({acct.note})</span>
                  )}
                </div>
              ))}
            </div>
            {pricing.aumGrowthNote && (
              <p className="text-xs mt-2 italic" style={{ color: 'hsl(174, 42%, 43%)' }}>
                {pricing.aumGrowthNote}
              </p>
            )}
          </div>
        )}

        <SlideFooter pageNumber={pageNumber} />
      </div>
    </SlideLayout>
  );
}
