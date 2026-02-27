import React from 'react';
import type { ContentBlock } from '@/types/prospect';
import { RichText } from './RichText';

const COLOR_MAP = {
  teal: {
    bg: 'hsl(174, 30%, 93%)',
    text: 'hsl(180, 38%, 30%)',
  },
  success: {
    bg: 'hsl(145, 40%, 92%)',
    text: 'hsl(145, 63%, 42%)',
  },
  warning: {
    bg: 'hsl(36, 100%, 95%)',
    text: 'hsl(36, 100%, 50%)',
  },
  neutral: {
    bg: undefined,
    text: undefined,
  },
};

export function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'text':
      return (
        <p className="text-base text-slide-gray-600 mb-4">
          <RichText text={block.content} />
        </p>
      );

    case 'key-values':
      return (
        <div className="mb-4">
          {block.heading && (
            <p className="text-base text-slide-gray-500 mb-3 font-medium">{block.heading}</p>
          )}
          <div className="space-y-1.5">
            {block.items.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-slide-gray-600">{item.label}</span>
                <span className="font-semibold text-slide-gray-900 tabular-nums">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'callout':
      return (
        <div className="p-4 rounded-lg bg-slide-gray-100 mb-4">
          <p className="text-base text-slide-gray-600">
            <RichText text={block.text} />
          </p>
        </div>
      );

    case 'metrics': {
      const isLarge = block.size === 'large';
      return (
        <div className="flex items-center gap-6 my-3">
          {block.items.map((item, i) => {
            const colors = COLOR_MAP[item.color ?? 'neutral'];
            return (
              <React.Fragment key={i}>
                {i > 0 && block.showArrows && (
                  <span className="text-2xl text-slide-gray-300">→</span>
                )}
                <div
                  className={`text-center ${isLarge ? 'p-4' : 'p-3'} rounded-lg`}
                  style={{ background: colors.bg ?? 'hsl(0, 0%, 96%)' }}
                >
                  <p
                    className={`${isLarge ? 'text-4xl' : 'text-3xl'} font-bold`}
                    style={colors.text ? { color: colors.text } : undefined}
                  >
                    {item.value}
                  </p>
                  <p className="text-sm text-slide-gray-400">{item.label}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      );
    }

    case 'schedule':
      return (
        <div className="space-y-2 mb-4">
          {block.title && (
            <p className="text-base font-medium text-slide-gray-600 mb-1">{block.title}</p>
          )}
          {block.rows.map((row, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slide-gray-100">
              <span className="text-sm font-bold text-slide-gray-600 w-16">{row.period ?? row.year}</span>
              <span className="text-lg font-bold" style={{ color: 'hsl(145, 63%, 42%)' }}>
                {row.amount ?? row.value}
              </span>
              <span className="text-sm text-slide-gray-400 ml-auto">{row.note ?? row.label}</span>
            </div>
          ))}
        </div>
      );

    case 'progress-bars':
      return (
        <div className="mb-4">
          {block.heading && (
            <p className="text-base font-medium text-slide-gray-600 mb-2">{block.heading}</p>
          )}
          <div className="space-y-1.5">
            {block.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-sm text-slide-gray-600 w-[190px]">{item.label}</span>
                <div className="flex-1 h-4 bg-slide-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.value}%`,
                      background:
                        item.color === 'success' ? 'hsl(145, 63%, 42%)'
                        : item.color === 'warning' ? 'hsl(36, 100%, 50%)'
                        : item.value >= 85
                          ? 'hsl(145, 63%, 42%)'
                          : item.value >= 80
                            ? 'hsl(36, 100%, 50%)'
                            : 'hsl(4, 90%, 58%)',
                    }}
                  />
                </div>
                <span className="text-sm font-bold text-slide-gray-900 w-10 text-right tabular-nums">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
