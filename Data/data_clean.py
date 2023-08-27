import pandas as pd

input_file = '2degrees_review.csv'
output_file = '2degrees_review_clean.csv'

# Specify the columns you want to keep (skip "source page")
columns_to_keep = ["source page title", "Name", "Rating", "Review"]

# Read the CSV file into a DataFrame, considering only the specified columns
data = pd.read_csv(input_file, usecols=columns_to_keep)

# Drop rows with more than 5 columns (including the columns we kept)
data = data[data.apply(lambda row: len(row) <= 5, axis=1)]

# Save the modified DataFrame to a new CSV file
data.to_csv(output_file, index=False)
