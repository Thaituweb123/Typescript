import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { errorHandler } from './middleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});