import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';

app.use('/public', publicRoutes);
app.use('/private', privateRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


