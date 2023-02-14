import {useState} from 'react'
import './Box.css';
const Box = (props) => {
  const [color, setColor] = useState(props.color);
  const showAndHide = () => {
    if (color === 'yellow') {
      setColor('white');
    }else{
      setColor('yellow');
    }
  }
  return (
    <div className="box">
      <button onClick={showAndHide}>{props.btnText}</button>
      <div className={color}></div>
    </div>
  )
}

export default Box