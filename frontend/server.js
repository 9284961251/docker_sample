const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Serve static files (HTML)
app.use(express.static('public'));

app.get('/get-backend-data', async (req, res) => {
    try {
        const response = await axios.get('http://backend:5000/api/data');
        res.send(response.data);
    } catch (error) {
        res.send({ error: 'Cannot connect to backend' });
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});
