import { useGetTopicsQuery } from '../features/apiSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import { setSelectedTopic, selectSelectedTopic } from '../features/slice';
import type { Topic } from '../features/apiSlice';

const useTopics=()=>{
     const dispatch = useAppDispatch();
  const { data: topics = [], isLoading } = useGetTopicsQuery();
  const selectedTopic = useAppSelector(selectSelectedTopic);

  const handleSelect = (topic: Topic) => {
    dispatch(setSelectedTopic(topic));
  };

  const types = [...new Set(topics.map(topic => topic.type))];

  return { 
    topics, 
    selectedTopic, 
    handleSelect, 
    types,
    isLoading 
  };
}
export default useTopics;
