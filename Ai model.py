import pandas as pd
import tkinter as tk
from tkinter import messagebox
from sklearn.linear_model import LinearRegression

file_path = r"C:\Users\tarun\Desktop\ai project files\SDG 2000-2022.csv"
try:
    data = pd.read_csv(file_path)
except FileNotFoundError:
    print("Error: File not found. Please check the file path.")
    exit()

data = data[data['year'] >= 2000]

def get_country_data(country_name):
    country_data = data[data['country'] == country_name][['year', 'sdg_index_score']].dropna()
    if len(country_data) < 2:
        return None
    return country_data

def get_country_prediction(country_name):
    country_data = get_country_data(country_name)
    if country_data is None:
        return None
    
    X = country_data[['year']]
    y = country_data['sdg_index_score']
    model = LinearRegression()
    model.fit(X, y)

    predicted_score_2030 = model.predict([[2030]])[0]
    target_score = 100
    if predicted_score_2030 >= target_score:
        predicted_year = 2030
    else:
        slope = model.coef_[0]
        intercept = model.intercept_
        if slope == 0:
            return predicted_score_2030, "Prediction not possible"
        predicted_year = (target_score - intercept) / slope
    
    return predicted_score_2030, predicted_year

def predict_sdg():
    country_name = entry_country.get()
    if not country_name.strip():
        messagebox.showerror("Input Error", "Please enter a country name.")
        return
    
    result = get_country_prediction(country_name)
    if result:
        predicted_score_2030, predicted_year = result
        messagebox.showinfo("Prediction Result",
                            f"Country: {country_name}\n"
                            f"Predicted SDG Score for 2030: {predicted_score_2030:.2f}\n"
                            f"Year to Achieve Target Score (100): {predicted_year}")
    else:
        messagebox.showerror("Prediction Error",
                             f"Not enough data available for {country_name}.")

root = tk.Tk()
root.title("SDG Index Predictor")

label_title = tk.Label(root, text="SDG Index Predictor", font=("Arial", 16, "bold"))
label_title.pack(pady=10)

label_instruction = tk.Label(root, text="Enter the name of a country:")
label_instruction.pack(pady=5)

entry_country = tk.Entry(root, width=30)
entry_country.pack(pady=5)

button_predict = tk.Button(root, text="Predict", command=predict_sdg)
button_predict.pack(pady=10)

root.mainloop()