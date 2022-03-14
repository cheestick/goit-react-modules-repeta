// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import 'modern-normalize/modern-normalize.css';
// import paintings from './paintings.json';
import colorPickerOptions from './colorPickerOptions';

export default function App() {
  return (
    <Container>
      <ColorPicker options={colorPickerOptions} />
      <Alert text="ALERT! Default type" />
      <Alert text="ALERT! Success type." type="success" />
      <Alert text="ALERT! Warning type." type="warning" />
      <Alert text="ALERT! Error type." type="error" />
      {/* <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section /> */}
    </Container>
  );
}
