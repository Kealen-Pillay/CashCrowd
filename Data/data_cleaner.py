import pandas as pd
import re

input_file = '2degrees_review_clean.csv'
output_file = '2degrees_review_cleaner.csv'

# Read the CSV file into a DataFrame
data = pd.read_csv(input_file)

# Rename the columns
new_column_names = {
    "source page title": "company",
    "Name": "username",
    "Rating": "like_count",
    "Review": "message"
}
data.rename(columns=new_column_names, inplace=True)

# Use regex to extract the first word from the "company" field
data['company'] = data['company'].apply(lambda x: re.findall(r'^\w+', x)[0] if isinstance(x, str) else x)

# Use regex to extract the number from the link in the "like_count" field
data['like_count'] = data['like_count'].apply(lambda x: int(re.search(r'stars-(\d+)\.svg', x).group(1)) if isinstance(x, str) else x)

# Save the modified DataFrame to a new CSV file
data.to_csv(output_file, index=False)
