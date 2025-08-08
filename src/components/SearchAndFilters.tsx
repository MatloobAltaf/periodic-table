import React from "react";
import { Search, Filter, X } from "lucide-react";
import { ElementCategory, FilterOptions } from "../types/element";
import { CATEGORY_NAMES } from "../utils/constants";

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
  onClearFilters,
}) => {
  const hasActiveFilters =
    filters.category || filters.state || filters.discoveryPeriod;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm gap-4">
      {/* Search */}
      <div className="relative w-full lg:w-auto">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 
                         text-gray-400 dark:text-gray-500"
        />
        <input
          type="text"
          placeholder="Search by name or symbol..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full min-w-0 lg:min-w-96 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 
                     rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     placeholder-gray-500 dark:placeholder-gray-400"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 
                       text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Filters:
          </span>
        </div>

        {/* Category Filter */}
        <select
          value={filters.category || ""}
          onChange={(e) =>
            onFilterChange({
              ...filters,
              category: (e.target.value as ElementCategory) || undefined,
            })
          }
          className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 
                     rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="">All Categories</option>
          {Object.entries(CATEGORY_NAMES).map(([key, name]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>

        {/* State Filter */}
        <select
          value={filters.state || ""}
          onChange={(e) =>
            onFilterChange({
              ...filters,
              state:
                (e.target.value as "solid" | "liquid" | "gas" | "unknown") ||
                undefined,
            })
          }
          className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 
                     rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="">All States</option>
          <option value="solid">Solid</option>
          <option value="liquid">Liquid</option>
          <option value="gas">Gas</option>
          <option value="unknown">Unknown</option>
        </select>

        {/* Discovery Period Filter */}
        <select
          value={filters.discoveryPeriod || ""}
          onChange={(e) =>
            onFilterChange({
              ...filters,
              discoveryPeriod:
                (e.target.value as
                  | "ancient"
                  | "medieval"
                  | "modern"
                  | "contemporary") || undefined,
            })
          }
          className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 
                     rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="">All Periods</option>
          <option value="ancient">Ancient (Before 1500)</option>
          <option value="medieval">Medieval (1500-1700)</option>
          <option value="modern">Modern (1700-1900)</option>
          <option value="contemporary">Contemporary (1900+)</option>
        </select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="px-3 py-1 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 
                       rounded border border-red-200 dark:border-red-700 
                       hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-200">
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilters;
