import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number; // Dấu chấm than để chỉ định rằng thuộc tính này sẽ được khởi tạo

    @Column({ unique: true })
    username!: string; // Dấu chấm than để chỉ định rằng thuộc tính này sẽ được khởi tạo

    @Column()
    password!: string; // Dấu chấm than để chỉ định rằng thuộc tính này sẽ được khởi tạo
}