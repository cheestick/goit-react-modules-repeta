// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
import ColorPicker from './components/ColorPicker/ColorPicker';
import 'modern-normalize/modern-normalize.css';
// import paintings from './paintings.json';
import colorPickerOptions from './colorPickerOptions';

export default function App() {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
      {/* <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section /> */}
    </div>
  );
}
