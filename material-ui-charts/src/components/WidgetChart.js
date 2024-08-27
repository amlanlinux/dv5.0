// src/components/WidgetChart.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 400 },
  { name: 'May', value: 300 },
  { name: 'Jun', value: 200 },
  { name: 'Jul', value: 400 },
  { name: 'Aug', value: 300 },
  { name: 'Sep', value: 500 },
  { name: 'Oct', value: 400 },
  { name: 'Nov', value: 300 },
  { name: 'Dec', value: 200 },
];

const WidgetChart = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Monthly Data
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default WidgetChart;
