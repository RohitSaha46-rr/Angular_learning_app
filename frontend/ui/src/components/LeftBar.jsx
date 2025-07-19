
import myImage from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopics, setSelectedTopic } from '../features/slice.js';
import '../styles/leftbar.css'
import { useEffect } from 'react';
const LeftBar=()=>{
    // const [activeItem, setActiveItem] = useState('');
    const dispatch=useDispatch();
    const{topics,selectedTopic}=useSelector((state)=>state.topics)
    console.log(topics);
    useEffect(()=>{
        dispatch(fetchTopics())
    },[dispatch])
//      const handleClick = (item) => {
//    setActiveItem(item);
//   };
const types = [...new Set(topics.map(topic => topic.type))];
return(
    <div className="leftbar">
     <div className="box">
        <img src={myImage} alt='logo'></img>
        <h1>Angular</h1>
     </div>
     <div className='content'>
    
<div className='menu_category'>
{types.map((type) => (
  <div key={type}>
<h5>{type}</h5>
 {topics
      .filter(topic => topic.type === type)
      .map((elem) => (
<div 
            className={`menu_item ${selectedTopic?._id === elem._id ? 'active' : ''}`}
            onClick={()=>dispatch(setSelectedTopic(elem))}
          >
            <span>{elem.title}</span>
          </div>
      ))}
          </div>
))}

{/* <div
            className={`menu_item ${activeItem === 'Installation' ? 'active' : ''}`}
            onClick={() => handleClick('Installation')}
          >
            <span>Installation</span>
          </div> */}

</div>
     </div>
    </div>
)
}
export default LeftBar;
