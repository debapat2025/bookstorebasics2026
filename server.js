require('dotenv').config();

const connectTODB = require('./database/db')
const express = require('express');
const bookRoutes= require('./routes/book-routes')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
//const HOST = '0.0.0.0';

const HOST = 'localhost';

//connect to db
connectTODB();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/books',bookRoutes)


//lisson port
// app.listen(PORT, () => {
//     console.log("server is now running on port", PORT);
//   });

app.listen(PORT, HOST, () => {
    console.log(`Server  running on http://${HOST}:${PORT}`);
})