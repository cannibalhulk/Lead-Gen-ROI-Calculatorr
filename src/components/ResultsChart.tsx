import React from 'react';
import { Bar } from 'recharts';
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { CalculationResults } from './ResultsDisplay';

interface ResultsChartProps {
  results: CalculationResults;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ results }) => {
  const data = [
    {
      name: 'Monthly Sales',
      Before: results.salesBefore,
      After: results.salesAfter,
    },
    {
      name: 'Monthly Revenue (AZN)',
      Before: results.revenueBefore / 1000, // Divide by 1000 to show in thousands
      After: results.revenueAfter / 1000,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Performance Comparison</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value: number, name: string, props: { dataKey: string; payload: { name: string } }) => {
                if (props.dataKey === 'Before' || props.dataKey === 'After') {
                  if (props.payload.name === 'Monthly Revenue (AZN)') {
                    return [`${Number(value).toFixed(1)}k AZN`, name];
                  }
                  return [Number(value).toFixed(1), name];
                }
                return [value, name];
              }}
            />
            <Legend />
            <Bar dataKey="Before" fill="#883dd8" name="Before Automation" />
            <Bar dataKey="After" fill="#81ea2d" name="After Automation" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResultsChart;
