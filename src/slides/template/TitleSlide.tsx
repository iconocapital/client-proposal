import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import type { ProspectConfig } from '@/types/prospect';

interface Props {
  prospect: ProspectConfig['prospect'];
}

export function TitleSlide({ prospect }: Props) {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col justify-center h-full px-20 py-16">
        <h2 className="text-4xl font-light tracking-[0.3em] uppercase text-slide-gray-400 mb-4">
          iconoclastic
        </h2>

        <div className="w-full h-px bg-slide-gray-300 mb-12" />

        <p className="text-xl tracking-[0.4em] uppercase mb-6" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Engagement Proposal
        </p>

        <p className="text-lg text-slide-gray-500 mb-2">Prepared for</p>
        <h1 className="text-7xl font-bold tracking-tight" style={{ color: 'hsl(180, 38%, 30%)' }}>
          {prospect.fullName}
        </h1>

        <div className="absolute bottom-16 left-20">
          <p className="text-base text-slide-gray-500">{prospect.preparedDate}</p>
          <p className="text-base mt-1" style={{ color: 'hsl(174, 42%, 43%)' }}>
            Iconoclastic Capital Management
          </p>
          <p className="text-sm text-slide-gray-400">
            17 Prince St • Rochester, NY 14607
          </p>
          <p className="text-sm text-slide-gray-400">
            team@iconocapital.com • 585-813-7197
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
