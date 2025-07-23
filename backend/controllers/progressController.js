// controllers/progressController.js
import UserProgress from '../models/userProgress.js';
import Topic from '../models/topics.js';

export const getProgress = async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Get all topics to determine first topic if new user
    const allTopics = await Topic.find({}, '_id title type').sort({ _id: 1 });
    
    let progress = await UserProgress.findOne({ userId })
      .populate('completedTopics enabledTopics', 'title type');
    
    if (!progress && allTopics.length > 0) {
      // New user - initialize with first topic enabled
      progress = await UserProgress.create({
        userId,
        completedTopics: [],
        enabledTopics: [allTopics[0]._id]
      });
      
      // Populate the newly created progress
      progress = await UserProgress.findById(progress._id)
        .populate('completedTopics enabledTopics', 'title type');
    }

    res.status(200).json({
      completedTopics: progress?.completedTopics || [],
      enabledTopics: progress?.enabledTopics || (allTopics[0] ? [allTopics[0]] : []),
      allTopics // Send all topics to help frontend initialize
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Server Error", 
      error: error.message 
    });
  }
};

export const updateProgress = async (req, res) => {
  try {
    const { userId, topicId } = req.body;
    
    const allTopics = await Topic.find({}, '_id').sort({ _id: 1 });
    const currentIndex = allTopics.findIndex(t => t._id.equals(topicId));

    let progress = await UserProgress.findOne({ userId });

    if (!progress) {
      // Initialize progress if doesn't exist (shouldn't happen normally)
      progress = await UserProgress.create({
        userId,
        completedTopics: [],
        enabledTopics: allTopics[0] ? [allTopics[0]._id] : []
      });
    }

    // Add to completed if not already there
    if (!progress.completedTopics.includes(topicId)) {
      progress.completedTopics.push(topicId);
    }

    // Enable next topic if exists and not already enabled
    if (currentIndex < allTopics.length - 1) {
      const nextTopicId = allTopics[currentIndex + 1]._id;
      if (!progress.enabledTopics.includes(nextTopicId)) {
        progress.enabledTopics.push(nextTopicId);
      }
    }

    await progress.save();
    
    // Return populated data
    const updatedProgress = await UserProgress.findById(progress._id)
      .populate('completedTopics enabledTopics', 'title type');

    res.status(200).json(updatedProgress);
  } catch (error) {
    res.status(500).json({ 
      message: "Server Error", 
      error: error.message 
    });
  }
};
