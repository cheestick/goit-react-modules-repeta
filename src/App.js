// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import 'modern-normalize/modern-normalize.css';
// import paintings from './paintings.json';
import colorPickerOptions from './colorPickerOptions';

export default function App() {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
      <Alert text="ALERT! Check something wrong." />
      {/* <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section /> */}
    </div>
  );
}
