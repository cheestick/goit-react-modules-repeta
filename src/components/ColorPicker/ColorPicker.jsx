import styles from './ColorPicker.module.css';

function ColorPicker({ options }) {
  return (
    <div className={styles.ColorPicker}>
      <h2 className={styles.ColorPicker__title}>Color Picker</h2>
      <div>
        {options.map(option => (
          <span
            className={styles.ColorPicker__option}
            style={{ backgroundColor: option.color }}
            key={option.color}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
