# Number to Words API

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd your_project_name
2. npm install
3. npm start
5. if you want to test my api through postman then call below URL
curl -X POST http://localhost:4000/convert -H "Content-Type: application/json" -d '{"number": 123}'

response will be . 
{
  "status": "success",
  "words": "one hundred twenty-three"
}

#run the test casse 
1.npm test

With this setup, you should have a fully functional API that converts numbers to words, complete with validation, logging, error handling, and unit tests.


