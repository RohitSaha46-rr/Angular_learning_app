import React from 'react'
import '../styles/rightbar.css'

import useContent from '../hooks/useContent';
const RightBar :React.FC= () => {
    const{selectedTopic,content,ref, isLoading}=useContent();
    
     if (!selectedTopic) return <div className="RightBar">Select a topic</div>;
     if (isLoading) return <div className="RightBar">Loading content...</div>;
    console.log(selectedTopic);
    console.log(content);
    
   
  return (
    <div className='RightBar'>
      <div className='head'>
        <span>{selectedTopic.type}</span>/<h5>{selectedTopic.title}</h5>
      </div>
      <div className='content' ref={ref}>
      <div className='inside_content'>
      <div className='inside_con2'>
        <h2>{selectedTopic.title}</h2>
       
        {content?.sections?.map((elem, index) => (
          <div key={index} className='section'>
            <h3>{elem.heading}</h3>

            {
              Array.isArray(elem.content) && elem.content.length>0
            ? (elem.content.map((line,i)=>(
              
              <p key={i} className="conArr">{line}</p>
              )
            ))
            : (typeof elem.content === 'string' && elem.content.trim() !=='' &&( <p className='norMalpara'>{elem.content}</p>))
            }

            {elem.subsections?.map((elem2, j) => (
              <div key={j} className='subsection'>
                <h4>{elem2.subheading}</h4>
                {Array.isArray(elem2.content) && elem2.content.length>0
                ?(elem2.content.map((line,i)=>(
                  <p className="conArr" key={i}>{line}</p>
                )))
                : (
                  typeof elem2.content === 'string' &&
                    elem2.content.trim() !=='' &&(
                      <p className='norMalpara'>{elem2.content}</p>
                      )
                )
                }
                

                {elem2.code && (
                  <pre className='code-block'>
                    <code>{elem2.code}</code>
                  </pre>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  )
}

export default RightBar
