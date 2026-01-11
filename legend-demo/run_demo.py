import json

with open("sample-data/customers.json", "r") as f:
    customers = json.load(f)

for customer in customers:
    print(f"Customer: {customer['name']} (ID: {customer['id']})")
    for order in customer.get("orders", []):
        print(f"  Order {order['id']}: {order['product']} (${order['amount']})")
    print("-" * 40)