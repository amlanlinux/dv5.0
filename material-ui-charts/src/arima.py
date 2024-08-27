import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA

# Example ARIMA model and data generation
np.random.seed(0)
data = np.random.randn(100).cumsum()

# Fit ARIMA model
model = ARIMA(data, order=(5, 1, 0))
model_fit = model.fit()

# Forecast the next 5 data points
forecast = model_fit.forecast(steps=5)

# Create a DataFrame with dates and forecasted volumes
dates = pd.date_range(start='2024-08-01', periods=5)
forecast_df = pd.DataFrame({'date': dates.strftime('%Y-%m-%d'), 'volume': forecast})

# Save the forecast to a JSON file
output_path = '/mnt/data/vestmark_volumes.json'
forecast_df.to_json(output_path, orient='records')
