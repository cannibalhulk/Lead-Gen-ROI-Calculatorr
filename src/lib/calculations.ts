import { InputValues } from '../components/InputForm';
import { CalculationResults } from '../components/ResultsDisplay';

// Calculate all metrics based on input values
export const calculateResults = (inputs: InputValues): CalculationResults => {
  // Calculate sales before and after automation
  const salesBefore = inputs.leadVolume * (inputs.currentConversionRate / 100);
  const salesAfter = inputs.leadVolume * ((inputs.currentConversionRate + inputs.conversionRateUplift) / 100);
  
  // Calculate revenue before and after automation
  const revenueBefore = salesBefore * inputs.propertyValue * (inputs.commissionRate / 100);
  const revenueAfter = salesAfter * inputs.propertyValue * (inputs.commissionRate / 100);
  
  // Calculate incremental revenue
  const incrementalRevenue = revenueAfter - revenueBefore;
  
  // Calculate total cost of automation
  const totalCost = inputs.setupFee + (inputs.monthlyFee * inputs.roiMonths);
  
  // Calculate net profit
  const netProfit = (incrementalRevenue * inputs.roiMonths) - totalCost;
  
  // Calculate ROI percentage
  const roi = (netProfit / totalCost) * 100;
  
  return {
    salesBefore,
    salesAfter,
    revenueBefore,
    revenueAfter,
    incrementalRevenue,
    totalCost,
    netProfit,
    roi
  };
};
