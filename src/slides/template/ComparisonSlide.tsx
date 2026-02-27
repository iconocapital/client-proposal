import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { Check, Minus } from 'lucide-react';
import { SlideFooter } from './SlideFooter';
import { calculatePricing } from '@/lib/pricing';
import type { ProspectConfig } from '@/types/prospect';

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 mx-auto" style={{ color: 'hsl(145, 63%, 42%)' }} />;
  if (value === false) return <Minus className="w-5 h-5 mx-auto text-slide-gray-300" />;
  return <span className="text-base text-slide-gray-600">{value}</span>;
}

interface Props {
  comparison: ProspectConfig['comparison'];
  pricing: ProspectConfig['pricing'];
  pageNumber: number;
}

export function ComparisonSlide({ comparison, pricing, pageNumber }: Props) {
  const p = calculatePricing(pricing.investableAssets, pricing.projectFee, pricing.gwmTier, pricing.managedAUM);
  const recommendProject = pricing.recommendedOption === 'project';

  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Side-by-Side Comparison
        </h2>
        <div className="slide-divider mb-8" />

        <div className="flex-1 min-h-0 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-lg font-semibold text-slide-gray-600 pb-3 w-[55%]"></th>
                <th
                  className={`text-center text-lg font-bold pb-3 w-[22%] ${recommendProject ? '' : 'text-slide-gray-900'}`}
                  style={recommendProject ? { color: 'hsl(180, 38%, 30%)' } : undefined}
                >
                  Project<br />
                  <span
                    className={`text-base font-normal ${recommendProject ? '' : 'text-slide-gray-400'}`}
                    style={recommendProject ? { color: 'hsl(174, 42%, 43%)' } : undefined}
                  >
                    {p.projectFeeFormatted}
                  </span>
                </th>
                <th
                  className={`text-center text-lg font-bold pb-3 w-[23%] ${!recommendProject ? '' : 'text-slide-gray-900'}`}
                  style={!recommendProject ? { color: 'hsl(180, 38%, 30%)' } : undefined}
                >
                  {p.gwmTierLabel.replace('GWM ', '')}<br />
                  <span
                    className={`text-base font-normal ${!recommendProject ? '' : 'text-slide-gray-400'}`}
                    style={!recommendProject ? { color: 'hsl(174, 42%, 43%)' } : undefined}
                  >
                    {p.gwmYear1Waived ? (
                      <>
                        <span className="line-through opacity-50">{p.gwmYear1FeeFormatted}</span> Waived* / {p.gwmYear2FeeFormatted}
                      </>
                    ) : (
                      <>
                        {p.gwmYear1FeeFormatted} / {p.gwmYear2FeeFormatted}
                      </>
                    )}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slide-gray-100' : ''}>
                  <td className="py-2 px-3 text-base text-slide-gray-700">{row.label}</td>
                  <td className="py-2 px-3 text-center"><CellValue value={row.project} /></td>
                  <td className="py-2 px-3 text-center"><CellValue value={row.gwm} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SlideFooter pageNumber={pageNumber} />
      </div>
    </SlideLayout>
  );
}
