import React from 'react';

export function SlideFooter({ pageNumber }: { pageNumber?: number }) {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-slide-gray-200 mt-auto">
      <span className="text-sm text-slide-gray-400">
        Iconoclastic Capital Management • Fee-Only Fiduciary
      </span>
      {pageNumber !== undefined && (
        <span className="text-sm text-slide-gray-400">{pageNumber}</span>
      )}
    </div>
  );
}
