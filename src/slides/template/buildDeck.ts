import React from 'react';
import type { ProspectConfig } from '@/types/prospect';
import { TitleSlide } from './TitleSlide';
import { SituationSlide } from './SituationSlide';
import { AllocationSlide } from './AllocationSlide';
import { FindingsSlide } from './FindingsSlide';
import { ScopeSlide } from './ScopeSlide';
import { OptionsSlide } from './OptionsSlide';
import { ComparisonSlide } from './ComparisonSlide';
import { NextStepsSlide } from './NextStepsSlide';

interface DeckSlide {
  component: React.ComponentType;
  name: string;
  template: string;
}

/**
 * Build a complete slide deck from a ProspectConfig.
 * Returns an array of slide entries compatible with the showcase index format.
 */
export function buildDeck(config: ProspectConfig): DeckSlide[] {
  const slides: DeckSlide[] = [];
  let page = 1;

  // 1. Title
  slides.push({
    component: () => React.createElement(TitleSlide, { prospect: config.prospect }),
    name: 'Your Retirement Plan',
    template: 'title',
  });
  page++;

  // 2. Situation
  slides.push({
    component: () => React.createElement(SituationSlide, { situation: config.situation, pageNumber: page }),
    name: 'Your Situation',
    template: 'data-table',
  });
  page++;

  // 3. Allocation
  slides.push({
    component: () => React.createElement(AllocationSlide, { allocation: config.allocation, pageNumber: page }),
    name: 'Asset Allocation',
    template: 'chart-focus',
  });
  page++;

  // 4–N. Findings (variable number)
  config.findings.forEach((finding, i) => {
    const cardNames = finding.cards.map((c) => c.title).join(' & ');
    const shortName = finding.slideTitle ?? (cardNames.length > 30 ? `Key Findings ${i + 1}` : cardNames);
    slides.push({
      component: () => React.createElement(FindingsSlide, { cards: finding.cards, slideTitle: finding.slideTitle, pageNumber: page }),
      name: shortName,
      template: 'two-column',
    });
    page++;
  });

  // How We Can Help
  slides.push({
    component: () => React.createElement(ScopeSlide, { services: config.services, pageNumber: page }),
    name: 'How We Can Help',
    template: 'three-up',
  });
  page++;

  // Engagement Options
  slides.push({
    component: () =>
      React.createElement(OptionsSlide, {
        pricing: config.pricing,
        prospectName: config.prospect.fullName,
        pageNumber: page,
      }),
    name: 'Engagement Options',
    template: 'comparison',
  });
  page++;

  // Side-by-Side Comparison
  slides.push({
    component: () =>
      React.createElement(ComparisonSlide, {
        comparison: config.comparison,
        pricing: config.pricing,
        pageNumber: page,
      }),
    name: 'Side-by-Side',
    template: 'comparison',
  });
  page++;

  // Next Steps
  slides.push({
    component: () =>
      React.createElement(NextStepsSlide, {
        nextSteps: config.nextSteps,
        prospectName: config.prospect.fullName,
        pageNumber: page,
      }),
    name: 'Next Steps',
    template: 'cta',
  });

  return slides;
}
