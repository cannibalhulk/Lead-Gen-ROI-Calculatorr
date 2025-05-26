import React, { useState, useEffect } from 'react';

interface InputFormProps {
  onCalculate: (inputValues: InputValues) => void;
}

export interface InputValues {
  leadVolume: number;
  currentConversionRate: number;
  conversionRateUplift: number;
  propertyValue: number;
  commissionRate: number;
  roiMonths: number;
  setupFee: number;
  monthlyFee: number;
}

const InputForm: React.FC<InputFormProps> = ({ onCalculate }) => {
  const [inputValues, setInputValues] = useState<InputValues>({
    leadVolume: 100,
    currentConversionRate: 2,
    conversionRateUplift: 2,
    propertyValue: 180000,
    commissionRate: 3,
    roiMonths: 1,
    setupFee: 1200,
    monthlyFee: 450
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InputValues, string>>>({});

  // Validate inputs and update calculations when inputs change
  useEffect(() => {
    const newErrors: Partial<Record<keyof InputValues, string>> = {};
    let hasErrors = false;

    // Validate all fields are positive numbers
    Object.entries(inputValues).forEach(([key, value]) => {
      const fieldKey = key as keyof InputValues;
      if (isNaN(value) || value < 0) {
        newErrors[fieldKey] = 'Must be a positive number';
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    // Only calculate if no errors
    if (!hasErrors) {
      onCalculate(inputValues);
    }
  }, [inputValues, onCalculate]);

  const handleInputChange = (field: keyof InputValues, value: string) => {
    const numValue = parseFloat(value);
    setInputValues(prev => ({
      ...prev,
      [field]: value === '' ? 0 : numValue
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Input Parameters</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Lead Volume
          </label>
          <input
            type="number"
            value={inputValues.leadVolume}
            onChange={(e) => handleInputChange('leadVolume', e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.leadVolume ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.leadVolume && <p className="text-red-500 text-xs mt-1">{errors.leadVolume}</p>}
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Conversion Rate (%)
          </label>
          <input
            type="number"
            value={inputValues.currentConversionRate}
            onChange={(e) => handleInputChange('currentConversionRate', e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.currentConversionRate ? 'border-red-500' : 'border-gray-300'}`}
            step="0.1"
          />
          {errors.currentConversionRate && <p className="text-red-500 text-xs mt-1">{errors.currentConversionRate}</p>}
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expected Uplift in Conversion Rate (%)
          </label>
          <input
            type="number"
            value={inputValues.conversionRateUplift}
            onChange={(e) => handleInputChange('conversionRateUplift', e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.conversionRateUplift ? 'border-red-500' : 'border-gray-300'}`}
            step="0.1"
          />
          {errors.conversionRateUplift && <p className="text-red-500 text-xs mt-1">{errors.conversionRateUplift}</p>}
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Average Property Value (AZN)
          </label>
          <input
            type="number"
            value={inputValues.propertyValue}
            onChange={(e) => handleInputChange('propertyValue', e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.propertyValue ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.propertyValue && <p className="text-red-500 text-xs mt-1">{errors.propertyValue}</p>}
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Commission Rate (%)
          </label>
          <input
            type="number"
            value={inputValues.commissionRate}
            onChange={(e) => handleInputChange('commissionRate', e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.commissionRate ? 'border-red-500' : 'border-gray-300'}`}
            step="0.1"
          />
          {errors.commissionRate && <p className="text-red-500 text-xs mt-1">{errors.commissionRate}</p>}
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Months to Measure ROI
          </label>
          <input
            type="number"
            value={inputValues.roiMonths}
            onChange={(e) => handleInputChange('roiMonths', e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.roiMonths ? 'border-red-500' : 'border-gray-300'}`}
            min="1"
          />
          {errors.roiMonths && <p className="text-red-500 text-xs mt-1">{errors.roiMonths}</p>}
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Automation Setup Fee (AZN)
          </label>
          <input
            type="number"
            value={inputValues.setupFee}
            onChange={(e) => handleInputChange('setupFee', e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.setupFee ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.setupFee && <p className="text-red-500 text-xs mt-1">{errors.setupFee}</p>}
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Maintenance Fee (AZN)
          </label>
          <input
            type="number"
            value={inputValues.monthlyFee}
            onChange={(e) => handleInputChange('monthlyFee', e.target.value)}
            className={`w-full p-2 border rounded-md ${errors.monthlyFee ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.monthlyFee && <p className="text-red-500 text-xs mt-1">{errors.monthlyFee}</p>}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
