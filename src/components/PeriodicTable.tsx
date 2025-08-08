import React, { useState, useMemo } from 'react';
import { Element, FilterOptions } from '../types/element';
import { elements } from '../data/elements';
import ElementTile from './ElementTile';
import ElementDetail from './ElementDetail';
import SearchAndFilters from './SearchAndFilters';

const PeriodicTable: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({});

  const filteredElements = useMemo(() => {
    return elements.filter(element => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          element.name.toLowerCase().includes(searchLower) ||
          element.symbol.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category && element.category !== filters.category) {
        return false;
      }

      // State filter
      if (filters.state && element.state !== filters.state) {
        return false;
      }

      // Discovery period filter
      if (filters.discoveryPeriod && element.discoveryYear) {
        const year = element.discoveryYear;
        switch (filters.discoveryPeriod) {
          case 'ancient':
            if (year >= 1500) return false;
            break;
          case 'medieval':
            if (year < 1500 || year >= 1700) return false;
            break;
          case 'modern':
            if (year < 1700 || year >= 1900) return false;
            break;
          case 'contemporary':
            if (year < 1900) return false;
            break;
        }
      }

      return true;
    });
  }, [searchTerm, filters]);

  // Check if any search term or filter is currently active
  const isFilterActive = useMemo(
    () => searchTerm !== '' || Object.values(filters).some(filter => !!filter),
    [searchTerm, filters]
  );

  // Create a set of filtered element atomic numbers for efficient lookup
  const filteredElementSet = useMemo(
    () => new Set(filteredElements.map(el => el.atomicNumber)),
    [filteredElements]
  );

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  const handleCloseDetail = () => {
    setSelectedElement(null);
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  // This function builds the main grid structure for all elements
  const createPeriodicGrid = () => {
    const grid: (Element | null)[][] = [];
    for (let period = 0; period < 7; period++) {
      grid[period] = new Array(18).fill(null);
    }

    elements.forEach(element => {
      if (element.category === 'lanthanides' || element.category === 'actinides') {
        return;
      }
      const period = element.period - 1;
      let group = element.group - 1;
      if (element.group >= 13) {
        group = element.group - 1;
      } else if (element.group >= 3 && element.group <= 12) {
        group = element.group + 1;
      }
      if (period >= 0 && period < 7 && group >= 0 && group < 18) {
        grid[period][group] = element;
      }
    });

    return grid;
  };

  const periodicGrid = createPeriodicGrid();

  return (
    <div className="space-y-6">
      <SearchAndFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filters={filters}
        onFilterChange={setFilters}
        onClearFilters={handleClearFilters}
      />

      <div className="text-sm text-gray-600 dark:text-gray-400">
        Showing {filteredElements.length} of {elements.length} elements
      </div>

      <div className="overflow-x-auto p-4">
        <div className="min-w-max">
          {periodicGrid.map((row, periodIndex) => (
            <div key={periodIndex} className="flex gap-2 mb-2">
              {row.map((element, groupIndex) => {
                const isDimmed = isFilterActive && element
                  ? !filteredElementSet.has(element.atomicNumber)
                  : false;

                return (
                  <div key={`${periodIndex}-${groupIndex}`} className="w-20 h-24">
                    {element && (
                      <ElementTile
                        element={element}
                        onClick={handleElementClick}
                        isDimmed={isDimmed}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Lanthanides and Actinides */}
        <div className="mt-8 space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Lanthanides
            </h4>
            <div className="flex gap-2 flex-wrap">
              {elements
                .filter(el => el.category === 'lanthanides')
                .sort((a, b) => a.atomicNumber - b.atomicNumber)
                .map(element => {
                  const isDimmed = isFilterActive ? !filteredElementSet.has(element.atomicNumber) : false;
                  return (
                    <div key={element.atomicNumber} className="w-20 h-24">
                      <ElementTile
                        element={element}
                        onClick={handleElementClick}
                        isDimmed={isDimmed}
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Actinides
            </h4>
            <div className="flex gap-2 flex-wrap">
              {elements
                .filter(el => el.category === 'actinides')
                .sort((a, b) => a.atomicNumber - b.atomicNumber)
                .map(element => {
                  const isDimmed = isFilterActive ? !filteredElementSet.has(element.atomicNumber) : false;
                  return (
                    <div key={element.atomicNumber} className="w-20 h-24">
                      <ElementTile
                        element={element}
                        onClick={handleElementClick}
                        isDimmed={isDimmed}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <ElementDetail
        element={selectedElement}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default PeriodicTable;