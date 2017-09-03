import mongoose from 'mongoose';
import Constants from '../config/constants';

const ScoreSchema = new mongoose.Schema({
	score: Number,
	name: String
});

const ScoreModel = mongoose.model('Score', ScoreSchema);
export default ScoreModel;
