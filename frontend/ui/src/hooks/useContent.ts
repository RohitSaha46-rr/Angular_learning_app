import { useLazyGetContentQuery } from '../features/apiSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import { selectSelectedTopic } from '../features/slice';
import { useEffect, useRef } from 'react';
import { selectUser } from '../features/authSlice';
const useContent=()=>{
  const [trigger, { data: content, isLoading }] = useLazyGetContentQuery();
  const selectedTopic = useAppSelector(selectSelectedTopic);
  const ref = useRef<HTMLDivElement>(null)
 const user = useAppSelector(selectUser); 
     useEffect(()=>{
       
      if(selectedTopic){
      trigger(selectedTopic?.title)
      setTimeout(()=>{
      ref.current?.scrollTo({top:0,behavior:'smooth'});
      },0)
      
      }
    },[selectedTopic,trigger])
   return {selectedTopic,content,ref, isLoading,user}
}
export default useContent;
