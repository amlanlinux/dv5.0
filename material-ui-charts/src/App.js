// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Box, IconButton, Grid } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import WidgetChart from './components/WidgetChart';
import EnrolledUsersBarChart from './components/BarChart';
import VestmarkVolumesChart from './components/VestmarkVolumesChart';
import OLSUserLoginCountChart from './components/OLSUserLoginCountChart';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="flex-end" sx={{ my: 2 }}>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <WidgetChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <EnrolledUsersBarChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <VestmarkVolumesChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <OLSUserLoginCountChart />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
