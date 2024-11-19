import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Load the dataset
file_path = r"C:\Users\tarun\Desktop\SDG 2000-2022.csv"  # Replace with your CSV file path
try:
    data = pd.read_csv(file_path)
except FileNotFoundError:
    print("Error: File not found. Please check the file path.")
    exit()

# Filter data for years >= 2000
data = data[data['year'] >= 2000]

# Function to get SDG data for a specific country
def get_country_data(country_name):
    country_data = data[data['country'] == country_name][['year', 'sdg_index_score']].dropna()
    if len(country_data) < 2:
        return None
    return country_data

# Function to predict SDG scores for the next 5 years
def get_country_predictions(country_name):
    country_data = get_country_data(country_name)
    if country_data is None:
        return None
    
    # Linear regression model
    X = country_data[['year']]
    y = country_data['sdg_index_score']
    model = LinearRegression()
    model.fit(X, y)
    
    # Predict scores for the next 5 years (2023-2027)
    future_years = list(range(2023, 2028))
    future_scores = model.predict([[year] for year in future_years])
    return future_years, future_scores

# Function to visualize predictions
def visualize_predictions(country_name, future_years, future_scores):
    plt.figure(figsize=(10, 6))
    plt.plot(future_years, future_scores, color='teal', alpha=0.8)
    plt.xlabel("Year", fontsize=12)
    plt.ylabel("Predicted SDG Index Score", fontsize=12)
    plt.title(f"Predicted SDG Index Scores for {country_name} (2023-2027)", fontsize=14)
    for i, score in enumerate(future_scores):
        plt.text(future_years[i], score, f"{score:.1f}", ha='center', va='bottom', fontsize=10, color='black')
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    plt.show()

# Main program
country_name = input("Enter the name of a country: ").strip()
predictions = get_country_predictions(country_name)

if predictions:
    future_years, future_scores = predictions
    print(f"\nPredicted SDG Index Scores for {country_name}:")
    for year, score in zip(future_years, future_scores):
        print(f"{year}: {score:.2f}")
    
    visualize_predictions(country_name, future_years, future_scores)
else:
    print(f"Not enough data available for {country_name}.")
