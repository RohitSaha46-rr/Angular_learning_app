import mongoose from 'mongoose';
const schema1=new mongoose.Schema({
    subheading:String,
    content: mongoose.Schema.Types.Mixed,
    code:String
})
const sectionSchema=new mongoose.Schema({
    heading:String,
    content: mongoose.Schema.Types.Mixed,
    subsections:[schema1]
})
const topicsSchema=new mongoose.Schema({
    title:String,
    type:String,
    sections:[sectionSchema]
})
const Topic = mongoose.model('Topic', topicsSchema);
export default Topic;