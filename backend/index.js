const express = require('express')
const app = express();
const fetch = require('node-fetch');

app.get('api/suggestions', async (req, res) => {
    try {
        const response = await fetch(`https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${}`)
        const data = await  response.json();
        res.json(data);
    }
    catch (error) {
        console.error('Error FFetching data:', error);
        res.status(500).json({error: 'Internal Server Error' });
    }

});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port${port}`);
})