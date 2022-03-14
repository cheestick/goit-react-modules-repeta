import './ColorPicker.css';

function ColorPicker({ options }) {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map(option => (
          <span className="ColorPicker__option" key={option.color}>
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
