import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { Check, Minus } from 'lucide-react';

const rows = [
  { label: 'Financial Plan & Recommendations', a: true, b: true },
  { label: 'Roth Conversion Roadmap', a: true, b: true },
  { label: 'TIAA Rollover Strategy', a: true, b: true },
  { label: 'Precious Metals Plan', a: true, b: true },
  { label: 'Retirement Income Plan', a: true, b: true },
  { label: 'Tax Projections', a: true, b: true },
  { label: 'Insurance Assessment', a: true, b: true },
  { label: 'RightCapital Access', a: '12 months', b: 'Ongoing' },
  { label: 'Implementation Support', a: '90-day window', b: 'Year-round' },
  { label: 'We Execute TIAA Rollover & Metals Liquidation', a: false, b: true },
  { label: 'Annual Roth Conversion Execution', a: false, b: true },
  { label: 'Ongoing Tax Planning w/ CPA Coordination', a: false, b: true },
  { label: 'Quarterly Review Calls', a: false, b: true },
  { label: 'Portfolio Monitoring & Rebalancing', a: false, b: true },
  { label: 'Social Security & Pension Integration', a: false, b: true },
  { label: 'Unlimited Email Access', a: 'During engagement', b: 'Year-round' },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 mx-auto" style={{ color: 'hsl(145, 63%, 42%)' }} />;
  if (value === false) return <Minus className="w-5 h-5 mx-auto text-slide-gray-300" />;
  return <span className="text-base text-slide-gray-600">{value}</span>;
}

export default function Slide08Comparison() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Side-by-Side Comparison
        </h2>
        <div className="slide-divider mb-8" />

        <div className="flex-1 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-lg font-semibold text-slide-gray-600 pb-3 w-[55%]"></th>
                <th className="text-center text-lg font-bold text-slide-gray-900 pb-3 w-[22%]">
                  Project<br />
                  <span className="text-base font-normal text-slide-gray-400">$4,500</span>
                </th>
                <th className="text-center text-lg font-bold pb-3 w-[23%]" style={{ color: 'hsl(180, 38%, 30%)' }}>
                  Guided<br />
                  <span className="text-base font-normal" style={{ color: 'hsl(174, 42%, 43%)' }}><span className="line-through opacity-50">$6,000</span> Waived* / $4,500</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-slide-gray-100' : ''}>
                  <td className="py-2 px-3 text-base text-slide-gray-700">{row.label}</td>
                  <td className="py-2 px-3 text-center"><CellValue value={row.a} /></td>
                  <td className="py-2 px-3 text-center"><CellValue value={row.b} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-4">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          <span className="text-sm text-slide-gray-400">8</span>
        </div>
      </div>
    </SlideLayout>
  );
}
