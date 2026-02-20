import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { ArrowRightLeft, Coins, BarChart3, Wallet, PieChart, Receipt, ShieldCheck, Monitor } from 'lucide-react';

const items = [
  { icon: ArrowRightLeft, title: 'TIAA CREF Rollover Strategy', desc: 'Map which accounts and funds to move, in what order. Target Vanguard allocation with specific ETF recommendations.' },
  { icon: Coins, title: 'Precious Metals Liquidation Plan', desc: 'How much to trim, timing considerations, and how to move to a better custodian or liquidate entirely.' },
  { icon: BarChart3, title: 'Roth Conversion Roadmap', desc: 'Year-by-year conversion schedule targeting optimal tax brackets through age 73.' },
  { icon: Wallet, title: 'Retirement Income Distribution', desc: 'Bucket-style withdrawal strategy coordinating Social Security, pension, and portfolio withdrawals to age 100.' },
  { icon: PieChart, title: 'Asset Allocation & Rebalancing', desc: 'Transition from 81/19 to diversified 60/40 with proper international exposure.' },
  { icon: Receipt, title: 'Tax Projection & Coordination', desc: 'Annual tax estimates incorporating Roth conversions, RMDs, and Social Security taxation.' },
  { icon: ShieldCheck, title: 'Insurance & Risk Assessment', desc: "Evaluate long-term care exposure given family longevity. Review homeowner's coverage." },
  { icon: Monitor, title: 'RightCapital Dashboard Access', desc: 'Full access to your interactive financial plan to run scenarios and track progress.' },
];

export default function Slide06Scope() {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          How We Can Help
        </h2>
        <div className="slide-divider mb-8" />

        <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center mt-1" style={{ background: 'hsl(174, 30%, 93%)' }}>
                <item.icon className="w-4 h-4" style={{ color: 'hsl(180, 38%, 30%)' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slide-gray-900">{item.title}</h3>
                <p className="text-base text-slide-gray-500 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
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
