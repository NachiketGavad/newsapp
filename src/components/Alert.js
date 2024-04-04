import React, { useState,useEffect  } from 'react'

export default function Alert(props) {

  const [mystyle,setMystyle] = useState({height:'60px', backgroundColor:'#F8F9FA'});

  useEffect(() => {
    if (props.mode === 'light') {
      setMystyle({ height: '60px', backgroundColor: '#F8F9FA' });
    } else {
      setMystyle({ height: '60px', backgroundColor: '#212529' });
    }
  }, [props.mode]);

  const alertCapitalize = (word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
    
  return (
    // for true condition
    // if null don't show
    <div style={mystyle}>
  {props.alert && (
    <div className={`alert alert-${props.alert.type} col-md-5 mx-3`} role="alert">
      <strong>{alertCapitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )}
</div>

  )
}
