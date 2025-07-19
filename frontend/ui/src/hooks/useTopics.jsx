import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopics, setSelectedTopic } from '../features/slice';
const useTopics=()=>{
    const{topics,selectedTopic}=useSelector((state)=>state.topics)
    const dispatch=useDispatch();
    useEffect(()=>{
     dispatch(fetchTopics());
    },[dispatch])
    const handleSelec=(topic)=>{
        dispatch(setSelectedTopic(topic));
    }
    return { topics, selectedTopic, handleSelec };
}
export default useTopics;
