// src/components/BarChart.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-08-01', users: 40 },
  { date: '2024-08-02', users: 30 },
  { date: '2024-08-03', users: 50 },
  { date: '2024-08-04', users: 20 },
  { date: '2024-08-05', users: 60 },
  { date: '2024-08-06', users: 70 },
];

const EnrolledUsersBarChart = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Enrolled Users by Date
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default EnrolledUsersBarChart;
