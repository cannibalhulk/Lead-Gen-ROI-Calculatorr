

export interface CalculationResults {
  salesBefore: number;
  salesAfter: number;
  revenueBefore: number;
  revenueAfter: number;
  incrementalRevenue: number;
  totalCost: number;
  netProfit: number;
  roi: number;
}

interface ResultsDisplayProps {
  results: CalculationResults;
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AZN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const formatPercent = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value / 100);
};

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Results</h2>
      
      <div className="mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-600">Net Profit</p>
              <p className="text-2xl font-bold text-blue-700">{formatCurrency(results.netProfit)}</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-600">Return on Investment</p>
              <p className="text-2xl font-bold text-green-600">{formatPercent(results.roi)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Before & After Comparison</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Metric</th>
                <th className="p-2 text-right">Before</th>
                <th className="p-2 text-right">After</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-gray-700">Monthly Sales</td>
                <td className="p-2 text-right">{results.salesBefore.toFixed(1)}</td>
                <td className="p-2 text-right">{results.salesAfter.toFixed(1)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-gray-700">Monthly Revenue</td>
                <td className="p-2 text-right">{formatCurrency(results.revenueBefore)}</td>
                <td className="p-2 text-right">{formatCurrency(results.revenueAfter)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Financial Summary</h3>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-gray-700">Incremental Revenue</td>
                <td className="p-2 text-right">{formatCurrency(results.incrementalRevenue)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-gray-700">Total Automation Cost</td>
                <td className="p-2 text-right">{formatCurrency(results.totalCost)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-gray-700">Net Profit</td>
                <td className="p-2 text-right font-semibold">{formatCurrency(results.netProfit)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-gray-700">ROI</td>
                <td className="p-2 text-right font-semibold">{formatPercent(results.roi)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
