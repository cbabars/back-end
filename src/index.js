// index.js (Entry point)
const express = require('express');
const { convertNumberToWords } = require('./converter');
const {validateNumber}  = require('./validator');
const { logError } = require('./logger');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.post('/convert', (req, res) => {
    const { number } = req.body;
    
    // Validate input
    const validationResult = validateNumber(number);
    if (!validationResult.valid) {
        logError(validationResult.message);
        return res.status(400).json({
            status: 'error',
            message: validationResult.message
        });
    }

    // Convert number to words
    const words = convertNumberToWords(number);

    res.json({
        status: 'success',
        words: words
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
