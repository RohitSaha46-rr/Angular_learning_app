import Topic from "../models/topics.js"

export const getContent=async(req,res)=>{
    try{
        const{title}=req.params;
        const content=await Topic.findOne({title});
        if(!content){
            return res.status(404).json({error:"data not found"})
        }
        else
            return res.status(200).json(content)
    }
    catch(err){
        return res.status(404).json({error:err});
    }
}