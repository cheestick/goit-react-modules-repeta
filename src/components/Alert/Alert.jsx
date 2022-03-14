import s from './Alert.module.css';

function Alert({ options }) {
  return (
    <div>
      <p role="alert" className={s.alert}>
        Alert text
      </p>
    </div>
  );
}

export default Alert;
