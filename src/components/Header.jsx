// import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({ title, showForm, addBtnStyle}) => {
  //on button click, display form to add new task
const onClick = () => {
  showForm();
}

  return (
    <div className="headerContainer">
      <h2>{title}</h2>
      <Button btnClick={onClick} textColor={addBtnStyle ? 'rgba(64, 64, 64, 0.8)' : ''} backgroundColor={addBtnStyle ? '#fc7878' : 'rgb(26, 45, 37)'} text={addBtnStyle ? 'Close' : 'Add'} />
    </div>
  )
}

export default Header;