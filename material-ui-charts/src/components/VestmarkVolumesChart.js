// src/components/VestmarkVolumesChart.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-08-01', volume: 1200 },
  { date: '2024-08-02', volume: 1500 },
  { date: '2024-08-03', volume: 1100 },
  { date: '2024-08-04', volume: 1800 },
  { date: '2024-08-05', volume: 1400 },
];

const VestmarkVolumesChart = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Vestmark Volumes
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="volume" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default VestmarkVolumesChart;
