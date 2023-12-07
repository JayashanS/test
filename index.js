const express = require('express');
const app = express();

app.get('/api/courses', (req, res) => { 
    // To read query string parameters (?sortBy=name)
    const sortBy = req.query.sortBy;
    // Return the courses 
    res.send(courses);
   });
   app.listen(3000, () => console.log('Listening…'));
