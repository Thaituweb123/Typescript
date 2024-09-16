import { createConnection } from 'typeorm';
import { User } from './models/user';

export const connectDatabase = async () => {
    await createConnection({
        type: 'sqlite',
        database: 'database.sqlite',
        entities: [User],
        synchronize: true,
    });
};