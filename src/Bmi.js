import {useRef, useState} from 'react';
const BmiText=({bmi})=>{
    if(bmi<18.5)
      return(<h1>UnderWeight</h1>);
      if(bmi<30)
      return(<h1>OverWeight</h1>);
      return(<h1>Nomal</h1>);
    
}
export default function Bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [Bmi,setBmi]=useState(0);
    const calBmi=()=>{
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        setBmi(w/Math.pow(h,2));
    }
    return(
        <>
        <h3>BMI Calcuator</h3>
        Weight: <br><input 
                 type="text"
              ref ={h_inputRef} />kg </br>
                 <br>    Height: <input 
                 type="text"
                 ref ={h_inputRef} />cm</br>
                 <button onClick={()=>calBmi()}>Calcuator!</button>      
                 Bmi value: {Bmi.toFixed(2)}
                 <BmiText bmi={Bmi}/>
        </>
    );
}