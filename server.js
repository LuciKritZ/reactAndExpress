const express = require('express')
const app = express();
const port = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstname: "John", lastname: "Doe"},
        {id: 2, firstname: "Mary", lastname: "Swanson"},
        {id: 3, firstname: "Steve", lastname: "Smith"}
    ];

    res.json(customers);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});