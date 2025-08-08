import React, { createContext } from 'react';
import { Atom } from 'lucide-react';
import PeriodicTable from './components/PeriodicTable';
import CategoryLegend from './components/CategoryLegend';

function App() {

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Atom className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Interactive Periodic Table
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Explore the elements that build our universe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            

            
            {/* Periodic Table */}
            <PeriodicTable />
            {/* Category Legend */}
            <CategoryLegend />            
            {/* Footer Information */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 
                          shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                About This Periodic Table
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                This interactive periodic table provides comprehensive information about chemical elements, 
                including their properties, discovery history, and real-world applications. Click on any 
                element to explore detailed information, search for specific elements, or filter by categories 
                and properties to enhance your learning experience.
              </p>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;