
import Topic from '../models/topics.js';

export const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find({},{title:1,type:1});
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
