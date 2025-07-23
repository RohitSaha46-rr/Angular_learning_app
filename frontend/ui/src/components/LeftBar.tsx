import myImage from '../assets/logo.png';
import '../styles/leftbar.css'
import useTopics from '../hooks/useTopics';
const LeftBar:React.FC=()=>{
    const { topics, selectedTopic, handleSelect, types, isLoading } = useTopics();
    if (isLoading) return <div className="leftbar">Loading...</div>;
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
            onClick={()=>handleSelect(elem)}
          >
            <span>{elem.title}</span>
          </div>
      ))}
          </div>
))}
</div>
     </div>
    </div>
)
}
export default LeftBar;
