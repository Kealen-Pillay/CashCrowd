import pandas as pd
import json

# List of input CSV files
input_files = ['oneNZ_review_cleaner.csv', '2degrees_review_cleaner.csv', 'spark_review_cleaner.csv']

# Output JSON file
output_json_file = 'reviews.json'

# Initialize an empty list to store the data
all_reviews = []

# Process each CSV file
for input_file in input_files:
    data = pd.read_csv(input_file)

    # Iterate through each row and convert to JSON format
    for index, row in data.iterrows():
        review = {
            'username': row['username'],
            'company': row['company'],
            'like_count': row['like_count'],
            'message': row['message']
        }
        all_reviews.append(review)

# Write the collected data to the JSON file
with open(output_json_file, 'w') as json_file:
    json.dump(all_reviews, json_file, indent=4)
