// models/userProgress.js
import mongoose from 'mongoose';

const userProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  completedTopics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }],
  enabledTopics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }],
  lastAccessed: { type: Date, default: Date.now }
});

const UserProgress = mongoose.model('UserProgress', userProgressSchema);
export default UserProgress;
