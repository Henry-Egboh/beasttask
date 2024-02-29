import PropTypes from 'prop-types';

const Button = ({backgroundColor, text, btnClick, textColor}) => {
  return <button onClick={btnClick} style={{color: textColor, backgroundColor: backgroundColor, ":hover":{backgroundColor:'234'}}} className="btn">{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    btnClick: PropTypes.func,
}

export default Button;