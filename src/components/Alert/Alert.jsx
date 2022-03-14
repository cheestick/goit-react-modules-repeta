import s from './Alert.module.css';
import PropTypes from 'prop-types';

function Alert({ text, type }) {
  return (
    <div>
      <p role="alert" className={s.alert}>
        {text}
      </p>
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']),
};

export default Alert;
