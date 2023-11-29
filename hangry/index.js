const express = require('express')
const UserRoutes = require('./routes/UserRoutes')
const LocationRoutes = require('./routes/LocationRoutes')
const MenuRoutes = require('./routes/MenuRoutes')
const CartRoutes = require('./routes/CartRoutes')
const TransactionRoutes = require('./routes/TransactionRoute')
const {errorHandler }= require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use('/user', UserRoutes)
app.use('/location', LocationRoutes)
app.use('/menu', MenuRoutes)
app.use('/cart', CartRoutes)
app.use('/transaction', TransactionRoutes)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });