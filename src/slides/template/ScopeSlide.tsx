import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { SlideFooter } from './SlideFooter';
import { resolveIcon } from '@/lib/iconMap';
import type { ServiceItem } from '@/types/prospect';

interface Props {
  services: ServiceItem[];
  pageNumber: number;
}

export function ScopeSlide({ services, pageNumber }: Props) {
  const hasValues = services.some((s) => s.estimatedValue);

  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          How We Can Help
        </h2>
        <div className="slide-divider mb-8" />

        <div className="flex-1 grid grid-cols-2 gap-x-10 gap-y-5">
          {services.map((item, i) => {
            const Icon = resolveIcon(item.icon);
            return (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center mt-1"
                  style={{ background: 'hsl(174, 30%, 93%)' }}
                >
                  <Icon className="w-4 h-4" style={{ color: 'hsl(180, 38%, 30%)' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-slide-gray-900">{item.title}</h3>
                    {item.estimatedValue && (
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{
                          background: 'hsl(145, 40%, 92%)',
                          color: 'hsl(145, 63%, 42%)',
                        }}
                      >
                        {item.estimatedValue}
                      </span>
                    )}
                  </div>
                  <p className="text-base text-slide-gray-500 leading-snug">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total potential value callout */}
        {hasValues && (
          <div className="mt-4 p-4 rounded-lg flex items-center justify-between" style={{ background: 'hsl(145, 40%, 92%)' }}>
            <p className="text-base font-semibold" style={{ color: 'hsl(145, 63%, 42%)' }}>
              Total Estimated Value of Recommended Actions
            </p>
            <p className="text-2xl font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>
              {(() => {
                // Attempt to sum numeric values from estimatedValue strings
                const values = services
                  .map((s) => s.estimatedValue)
                  .filter(Boolean)
                  .map((v) => {
                    const match = v!.match(/[\d,.]+/);
                    if (!match) return 0;
                    const num = parseFloat(match[0].replace(/,/g, ''));
                    if (v!.toLowerCase().includes('k')) return num * 1000;
                    if (v!.toLowerCase().includes('m')) return num * 1_000_000;
                    return num;
                  })
                  .filter((n) => n > 0);

                if (values.length === 0) return 'Significant';
                const total = values.reduce((a, b) => a + b, 0);
                if (total >= 1_000_000) return `$${(total / 1_000_000).toFixed(1)}M+`;
                if (total >= 1_000) return `$${Math.round(total / 1000)}K+`;
                return `$${total.toLocaleString()}+`;
              })()}
            </p>
          </div>
        )}

        <SlideFooter pageNumber={pageNumber} />
      </div>
    </SlideLayout>
  );
}
