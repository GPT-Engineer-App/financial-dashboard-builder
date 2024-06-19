import React from 'react';
import { GaugeChart, ResponsiveContainer } from 'recharts';

const kpiData = [
  { name: 'Current Ratio', value: 1.5 },
  { name: 'Quick Ratio', value: 1.2 },
  { name: 'Debt-to-Equity Ratio', value: 0.8 },
  { name: 'Return on Equity (ROE)', value: 15 },
];

const KPIs = () => {
  return (
    <div>
      <h2>Key Performance Indicators (KPIs)</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <GaugeChart data={kpiData} />
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KPIs;