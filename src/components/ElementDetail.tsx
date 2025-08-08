import React from 'react';
import { X, Atom, Calendar, User, Globe, Thermometer, Scale, Zap } from 'lucide-react';
import { Element } from '../types/element';
import { CATEGORY_COLORS, CATEGORY_NAMES } from '../utils/constants';

interface ElementDetailProps {
  element: Element | null;
  onClose: () => void;
}

const ElementDetail: React.FC<ElementDetailProps> = ({ element, onClose }) => {
  if (!element) return null;

  const colors = CATEGORY_COLORS[element.category];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto 
                      shadow-2xl border border-gray-200 dark:border-gray-700">
        
        {/* Header */}
        <div className={`${colors.bg} ${colors.border} p-6 rounded-t-2xl border-b-2`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 ${colors.bg} ${colors.border} rounded-lg 
                              border-2 flex items-center justify-center`}>
                <span className={`text-2xl font-bold ${colors.text}`}>
                  {element.symbol}
                </span>
              </div>
              <div>
                <h2 className={`text-3xl font-bold ${colors.text}`}>
                  {element.name}
                </h2>
                <p className={`text-lg ${colors.text} opacity-80`}>
                  {CATEGORY_NAMES[element.category]}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg 
                         transition-colors duration-200"
              aria-label="Close element details"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Basic Properties */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Atom className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <div className="text-sm text-gray-600 dark:text-gray-400">Atomic Number</div>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {element.atomicNumber}
              </div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Scale className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <div className="text-sm text-gray-600 dark:text-gray-400">Atomic Mass</div>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {element.atomicMass.toFixed(3)}
              </div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-red-500" />
              <div className="text-sm text-gray-600 dark:text-gray-400">State</div>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100 capitalize">
                {element.state}
              </div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Zap className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <div className="text-sm text-gray-600 dark:text-gray-400">Period/Group</div>
              <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {element.period}/{element.group}
              </div>
            </div>
          </div>

          {/* Electron Configuration */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Electron Configuration
            </h3>
            <code className="text-lg font-mono bg-white dark:bg-gray-800 px-3 py-2 rounded 
                           text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600">
              {element.electronConfiguration}
            </code>
          </div>

          {/* Physical Properties */}
          {(element.meltingPoint || element.boilingPoint || element.density) && (
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Physical Properties
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {element.meltingPoint && (
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Melting Point</div>
                    <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {element.meltingPoint}°C
                    </div>
                  </div>
                )}
                {element.boilingPoint && (
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Boiling Point</div>
                    <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {element.boilingPoint}°C
                    </div>
                  </div>
                )}
                {element.density && (
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Density</div>
                    <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {element.density} g/cm³
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Discovery Information */}
          {(element.discoveryYear || element.discoveredBy) && (
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Discovery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {element.discoveryYear && (
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Year</div>
                    <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {element.discoveryYear > 0 ? element.discoveryYear : 'Ancient times'}
                    </div>
                  </div>
                )}
                {element.discoveredBy && (
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Discovered by</div>
                    <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {element.discoveredBy}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Description
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {element.description}
            </p>
          </div>

          {/* Applications */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Applications & Uses
            </h3>
            <div className="flex flex-wrap gap-2">
              {element.applications.map((app, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 
                           text-sm rounded-full border border-blue-200 dark:border-blue-700"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Electron Shells Visualization */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Electron Shell Configuration
            </h3>
            <div className="flex items-center justify-center space-x-4">
              {element.shells.map((electrons, shellIndex) => (
                <div key={shellIndex} className="text-center">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Shell {shellIndex + 1}
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-blue-300 dark:border-blue-600 
                                flex items-center justify-center bg-blue-50 dark:bg-blue-900/20">
                    <span className="text-lg font-bold text-blue-700 dark:text-blue-300">
                      {electrons}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetail;