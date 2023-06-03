import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoute.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', productRoutes);
// app.get('/api/products', (req, res) => {
//   res.send(products);
// });

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
