import React from 'react';
import { CATEGORY_COLORS, CATEGORY_NAMES } from '../utils/constants';
import { ElementCategory } from '../types/element';

const CategoryLegend: React.FC = () => {
  const categories = Object.keys(CATEGORY_NAMES) as ElementCategory[];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 
                    shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Element Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((category) => {
          const colors = CATEGORY_COLORS[category];
          return (
            <div
              key={category}
              className="flex items-center space-x-2"
            >
              <div
                className={`w-4 h-4 rounded border-2 ${colors.bg} ${colors.border}`}
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {CATEGORY_NAMES[category]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryLegend;