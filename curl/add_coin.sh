curl --include --request POST http://localhost:4741/user_coins \
  --header "Content-Type: application/json" \
  --data '{
  "user_coins": {
      "id": 98,
      "name": "BTC",
      "price": 34.5,
  }
}'
