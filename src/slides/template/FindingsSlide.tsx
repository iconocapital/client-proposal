import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { SlideFooter } from './SlideFooter';
import { RichText } from './RichText';
import { ContentBlockRenderer } from './ContentBlockRenderer';
import { resolveIcon } from '@/lib/iconMap';
import type { FindingCard } from '@/types/prospect';

const ICON_COLOR_MAP = {
  teal: {
    bg: 'hsl(174, 30%, 93%)',
    fg: 'hsl(180, 38%, 30%)',
    recBg: 'hsl(174, 30%, 93%)',
    recFg: 'hsl(180, 38%, 30%)',
  },
  warning: {
    bg: 'hsl(36, 100%, 95%)',
    fg: 'hsl(36, 100%, 50%)',
    recBg: 'hsl(174, 30%, 93%)',
    recFg: 'hsl(180, 38%, 30%)',
  },
  success: {
    bg: 'hsl(145, 40%, 92%)',
    fg: 'hsl(145, 63%, 42%)',
    recBg: 'hsl(145, 40%, 92%)',
    recFg: 'hsl(145, 63%, 42%)',
  },
};

function FindingCardComponent({ card }: { card: FindingCard }) {
  const Icon = resolveIcon(card.icon);
  const colors = ICON_COLOR_MAP[card.iconColor];

  return (
    <div className="slide-card-accent flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: colors.bg }}
        >
          <Icon className="w-5 h-5" style={{ color: colors.fg }} />
        </div>
        <h3 className="text-2xl font-bold text-slide-gray-900">{card.title}</h3>
      </div>

      <p className="text-lg text-slide-gray-600 mb-4">
        <RichText text={card.narrative} />
      </p>

      {card.contentBlocks.map((block, i) => (
        <ContentBlockRenderer key={i} block={block} />
      ))}

      <div className="mt-auto p-3 rounded-lg" style={{ background: colors.recBg }}>
        <p className="text-sm font-semibold" style={{ color: colors.recFg }}>
          ✦ {card.recommendation}
        </p>
      </div>
    </div>
  );
}

interface Props {
  cards: [FindingCard, FindingCard];
  pageNumber: number;
}

export function FindingsSlide({ cards, pageNumber }: Props) {
  return (
    <SlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Key Findings
        </h2>
        <div className="slide-divider mb-8" />

        <div className="flex-1 grid grid-cols-2 gap-12">
          <FindingCardComponent card={cards[0]} />
          <FindingCardComponent card={cards[1]} />
        </div>

        <SlideFooter pageNumber={pageNumber} />
      </div>
    </SlideLayout>
  );
}
