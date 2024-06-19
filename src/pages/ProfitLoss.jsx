import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { name: 'Jan', profit: 4000 },
  { name: 'Feb', profit: 3000 },
  { name: 'Mar', profit: 2000 },
  { name: 'Apr', profit: 2780 },
  { name: 'May', profit: 1890 },
  { name: 'Jun', profit: 2390 },
  { name: 'Jul', profit: 3490 },
];

const ytdData = [
  { name: 'Jan', profit: 4000 },
  { name: 'Feb', profit: 7000 },
  { name: 'Mar', profit: 9000 },
  { name: 'Apr', profit: 11780 },
  { name: 'May', profit: 13670 },
  { name: 'Jun', profit: 16060 },
  { name: 'Jul', profit: 19550 },
];

const ProfitLoss = () => {
  return (
    <div>
      <h2>Profit & Loss</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="profit" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={ytdData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="profit" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitLoss;