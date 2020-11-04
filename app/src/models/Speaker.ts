import { Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Brand from './Brand';

@Table({
    timestamps: false
})
export default class Speaker extends Model<Speaker> {

    @PrimaryKey
    @Column
    id: string;

    @ForeignKey(() => Brand)
    @Column
    brand_id: string;

    @BelongsTo(() => Brand)
    brand: Brand;

    @Column
    name: string;

    @Column
    slug: string;
    
    @Column
    type: string;
    
    @Column
    sale_price: string;
    
    @Column
    price: string;
    
    @Column
    quantity: number;
    
    @Column
    enclosure: string;
    
    @Column
    finish: string;
    
    @Column
    color: string;
    
    @Column
    tweeter_type: string;
    
    @Column
    tweeter_size: string;
    
    @Column
    midrange_size: string;
    
    @Column
    woofer_size: string;
    
    @Column
    woofer_composition: string;
    
    @Column
    woofer_surround: string;
    
    @Column
    built_in_powered_sub: number;
    
    @Column
    dolby_atmos_drivers: string;
    
    @Column
    video_shielded: string;
    
    @Column
    connector_type: string;
    
    @Column
    bi_amp_inputs: string;
    
    @Column
    parts_warranty: string;
    
    @Column
    labor_warranty: string;
    
    @Column
    power_range: number;
    
    @Column
    frequency_response: number;
    
    @Column
    sensitivity: number;
    
    @Column
    impedance_ohms: number;
    
    @Column
    subwoofer_amp_power: number;
    
    @Column
    height_inches: number;
    
    @Column
    width_inches: number;
    
    @Column
    depth_inches: number;
    
    @Column
    weight_pounds: number;
    
    @Column
    recommended_stand_height_inches: string;
    
    @Column
    quantity_in_package: string;
    
    @Column
    aimable_tweeter: number;
    
    @Column
    moisture_resistant: number;
    
    @Column
    built_in_back_box: number;
    
    @Column
    cutout_size: string;
    
    @Column
    power_range_min: number;
    
    @Column
    power_range_max: number;
    
    @Column
    frequency_response_low_hz: number;
    
    @Column
    frequency_response_high_khz: number
}