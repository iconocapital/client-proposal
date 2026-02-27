import React from 'react';
import { SlideLayout } from '@/components/slides/SlideLayout';
import { MessageCircle, FileText, Rocket } from 'lucide-react';
import type { ProspectConfig } from '@/types/prospect';

const DEFAULT_STEPS = [
  {
    icon: MessageCircle,
    number: '1',
    title: 'Reply or Call Us',
    desc: "Let us know which option feels right, or if you have questions. We're happy to hop on a quick call.",
  },
  {
    icon: FileText,
    number: '2',
    title: "We'll Send a Planning Agreement",
    desc: 'A simple, plain-English engagement letter for you to review and sign electronically.',
  },
  {
    icon: Rocket,
    number: '3',
    title: 'We Get to Work',
    desc: "For the Project, we'll schedule your kickoff call within a week. For GWM, we'll begin with a comprehensive planning session.",
  },
];

interface Props {
  nextSteps: ProspectConfig['nextSteps'];
  prospectName: string;
  pageNumber: number;
}

export function NextStepsSlide({ nextSteps, prospectName, pageNumber }: Props) {
  const firstName = prospectName.split(' ')[0];

  return (
    <SlideLayout variant="default">
      <div className="flex flex-col justify-center h-full px-20 py-16">
        <h2 className="text-5xl font-bold tracking-tight mb-2" style={{ color: 'hsl(180, 38%, 30%)' }}>
          Next Steps
        </h2>
        <div className="slide-divider mb-8" />

        <p className="text-xl text-slide-gray-500 mb-12 max-w-[1200px]">
          Take your time reviewing this proposal. There's no expiration date and no pressure. When you're ready:
        </p>

        <div className="flex gap-10 mb-16">
          {DEFAULT_STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: 'hsl(174, 30%, 93%)' }}
                >
                  <step.icon className="w-6 h-6" style={{ color: 'hsl(180, 38%, 30%)' }} />
                </div>
                <span className="text-5xl font-bold" style={{ color: 'hsl(174, 42%, 80%)' }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slide-gray-900 mb-2">{step.title}</h3>
              <p className="text-lg text-slide-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="border-t border-slide-gray-200 pt-8 mt-auto">
          <p className="text-xl text-slide-gray-600 italic max-w-[1200px]">
            "{nextSteps.closingQuote}"
          </p>
          <p className="text-lg font-semibold mt-4" style={{ color: 'hsl(180, 38%, 30%)' }}>
            Chris Haigh, CFP® —{' '}
            <span className="font-normal text-slide-gray-500">CEO, Iconoclastic Capital Management</span>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
