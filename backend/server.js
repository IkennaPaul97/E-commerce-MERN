require('dotenv').config();
const express = require('express');
const connectDb = require('./config/db');
const productRoutes = require('./routes/productRoutes')

connectDb();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))