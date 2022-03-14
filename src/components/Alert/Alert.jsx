import s from './Alert.module.css';
import PropTypes from 'prop-types';

function Alert({ text, type = 'success' }) {
  return (
    <div>
      <p role="alert" className={s[type]}>
        {text}
      </p>
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
};

export default Alert;
