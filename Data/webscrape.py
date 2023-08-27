import requests
from bs4 import BeautifulSoup
import csv

url = "https://www.broadbandcompare.co.nz/b/contact-broadband?section=reviews"

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

reviews = []

# Extract company name
company_elem = soup.find('h1', class_='b-heading_plan-page')
company = company_elem.get_text(strip=True) if company_elem else ''

# Find all review elements
review_elements = soup.find_all('div', class_='b-review__review')

for review_elem in review_elements:
    # Extract username and like_count
    name_elem = review_elem.find('div', class_='b-review__name')
    if name_elem:
        name_parts = name_elem.get_text(strip=True).split()
        if len(name_parts) >= 2:
            username = name_parts[0]
            like_count = name_parts[1]
        else:
            username = ''
            like_count = ''
    else:
        username = ''
        like_count = ''

    # Extract message
    message_elem = review_elem.find('div', class_='b-review__content')
    message = message_elem.get_text(strip=True) if message_elem else ''

    review = {
        'company': company,
        'username': username,
        'like_count': like_count,
        'message': message
    }
    reviews.append(review)

# Write extracted reviews to a CSV file
output_file = 'reviews_contact.csv'
with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['company', 'username', 'like_count', 'message']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for review in reviews:
        writer.writerow(review)

print(f'Reviews extracted and saved to {output_file}')
