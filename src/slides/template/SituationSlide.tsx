import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { Heart, Shield } from 'lucide-react';
import { SlideFooter } from './SlideFooter';
import type { ProspectConfig } from '@/types/prospect';

interface Props {
  situation: ProspectConfig['situation'];
  pageNumber: number;
}

export function SituationSlide({ situation, pageNumber }: Props) {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Your Situation
        </h2>
        <div className="slide-divider mb-8" />

        {/* Key insight callout */}
        <div className="flex gap-6 mb-8">
          <div className="flex-1 p-5 rounded-xl border border-slide-gray-200 bg-slide-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4" style={{ color: 'hsl(174, 42%, 43%)' }} />
              <span className="text-base font-semibold text-slide-gray-600">Primary Goal</span>
            </div>
            <p className="text-lg text-slide-gray-900 italic">"{situation.primaryGoal.quote}"</p>
          </div>
          <div className="flex-1 p-5 rounded-xl border border-slide-gray-200 bg-slide-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4" style={{ color: 'hsl(36, 100%, 50%)' }} />
              <span className="text-base font-semibold text-slide-gray-600">Risk Profile</span>
            </div>
            <p className="text-lg text-slide-gray-900">{situation.riskProfile.description}</p>
          </div>
        </div>

        {/* Facts table */}
        <div className="flex-1 grid grid-cols-1 gap-0">
          {situation.facts.map((f, i) => (
            <div
              key={i}
              className={`flex items-center py-2.5 px-4 ${i % 2 === 0 ? 'bg-slide-gray-100' : ''} rounded`}
            >
              <span className="text-base font-semibold text-slide-gray-600 w-[340px] flex-shrink-0">
                {f.label}
              </span>
              <span className="text-base text-slide-gray-900">{f.value}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-auto">
          <span className="text-sm text-slide-gray-400">Iconoclastic Capital Management • Fee-Only Fiduciary</span>
          {situation.footerNote && (
            <span className="text-sm text-slide-gray-400">{situation.footerNote}</span>
          )}
        </div>
      </div>
    </SlideLayout>
  );
}
