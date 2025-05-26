import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm, { InputValues } from './components/InputForm';
import ResultsDisplay, { CalculationResults } from './components/ResultsDisplay';
import ResultsChart from './components/ResultsChart';
import { calculateResults } from './lib/calculations';

function App() {
  const [results, setResults] = useState<CalculationResults>(() => {
    // Initialize with default values
    const defaultInputs: InputValues = {
      leadVolume: 100,
      currentConversionRate: 2,
      conversionRateUplift: 2,
      propertyValue: 180000,
      commissionRate: 3,
      roiMonths: 1,
      setupFee: 1200,
      monthlyFee: 450
    };
    return calculateResults(defaultInputs);
  });

  const handleCalculate = (inputValues: InputValues) => {
    const newResults = calculateResults(inputValues);
    setResults(newResults);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InputForm onCalculate={handleCalculate} />
          <div>
            <ResultsDisplay results={results} />
            <ResultsChart results={results} />
          </div>
        </div>
        
        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} AI Lead Generation Automation Service</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
