import express from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import path from 'path';
import { connectDatabase } from './database';
import authRoutes from './routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src/views'));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Kết nối cơ sở dữ liệu
connectDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });