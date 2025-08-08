import React from 'react';
import { Element } from '../types/element';
import { CATEGORY_COLORS } from '../utils/constants';

interface ElementTileProps {
  element: Element;
  onClick: (element: Element) => void;
  isDimmed?: boolean; // Changed from isHighlighted to isDimmed
}

const ElementTile: React.FC<ElementTileProps> = ({
  element,
  onClick,
  isDimmed = false, // Default to not being dimmed
}) => {
  const colors = CATEGORY_COLORS[element.category];

  // Dynamically build class names based on the isDimmed prop
  const tileClasses = `
    relative p-2 rounded-lg border-2 transition-all duration-300
    ${colors.bg} ${colors.border} ${colors.text}
    min-h-[90px] flex flex-col justify-between
    ${isDimmed
      ? 'opacity-30 pointer-events-none' // Styles for when the element is dimmed
      : 'opacity-100 cursor-pointer transform hover:scale-105 hover:z-10 hover:shadow-xl hover:brightness-110' // Styles for the default, active state
    }
  `;

  return (
    <div
      className={tileClasses}
      onClick={() => !isDimmed && onClick(element)} // Prevent click when dimmed
      role="button"
      tabIndex={isDimmed ? -1 : 0} // Remove from tab navigation when dimmed
      onKeyDown={(e) => {
        if (!isDimmed && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick(element);
        }
      }}
      aria-label={`${element.name} (${element.symbol}), atomic number ${element.atomicNumber}`}
      aria-disabled={isDimmed} // Accessibility improvement for dimmed state
    >
      <div className="text-xs font-medium opacity-80 text-right">
        {element.atomicNumber}
      </div>

      <div className="text-center">
        <div className="text-lg font-bold mb-1">
          {element.symbol}
        </div>
        <div className="text-xs font-medium truncate px-1">
          {element.name}
        </div>
      </div>

      <div className="text-xs font-medium opacity-80 text-center">
        {element.atomicMass % 1 === 0 ? element.atomicMass.toString() : element.atomicMass.toFixed(2)}
      </div>

      {/* Hover effect overlay for non-dimmed tiles */}
      {!isDimmed && (
        <div className="absolute inset-0 bg-white dark:bg-gray-700 opacity-0 hover:opacity-10 
                        transition-opacity duration-300 rounded-lg pointer-events-none" />
      )}
    </div>
  );
};

export default ElementTile;