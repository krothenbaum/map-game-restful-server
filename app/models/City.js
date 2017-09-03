import mongoose from 'mongoose';
import Constants from '../config/constants';

const CitySchema = new mongoose.Schema({
    lat: Number,
    lon: Number,
    wikipedia: String,
    city: String
});

const CityModel = mongoose.model('City', CitySchema);
export default CityModel;
