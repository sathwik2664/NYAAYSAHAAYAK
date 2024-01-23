import { useEffect,useState } from "react"
const Constitution = (props) => {
  
  const [backenddata,setbackenddata]=useState([])
  
        
  console.log(props.name);
        useEffect(()=>{
          fetch(`http://localhost:5000/laws`)
          .then(respones=>respones.json())
          .then(data=>{console.log(data[props.topic]);
            setbackenddata(data[props.topic]);
          })
      },[props.url,props.topic])

      return ( 
        <>
        <h1>
          Constitutional law releted FAQ's
        </h1>
        
        {
  typeof backenddata === 'undefined' ? (
    <p>Loading</p>
  ) : (
    backenddata.map((item, index) => (
      <details key={index}>
        <summary>{item.question}</summary>
        <div className="faq__content" style={{ textAlign: 'left' }}>
          {Array.isArray(item.answer) ? (
            item.answer.map((point, pointIndex) => (
              <p key={pointIndex}>{point}</p>
            ))
          ) : (
            <p>{item.answer}</p>
          )}
        </div>
      </details>
    ))
  )
}


    </>
     );
}

 
export default Constitution;