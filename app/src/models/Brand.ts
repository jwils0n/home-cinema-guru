import { Table, Column, Model, PrimaryKey, HasMany } from 'sequelize-typescript';
import Speaker from './Speaker';

@Table({
    timestamps: false
})
export default class Brand extends Model<Brand> {

    @PrimaryKey
    @Column
    id: string;

    @HasMany(() => Speaker)
    Speakers: Speaker[];

    @Column
    name: string;

    @Column
    slug: string;
}