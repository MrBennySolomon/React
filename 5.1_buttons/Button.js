import './Button.css';

const Button = ({text, bold}) => {
  return (
    <button className={bold === "true" ? 'bold' : ''}>{text}</button>
  )
}

export default Button