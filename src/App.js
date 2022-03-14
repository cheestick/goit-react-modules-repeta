// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import 'modern-normalize/modern-normalize.css';
import Box from './components/Box/Box';
// import paintings from './paintings.json';
// import colorPickerOptions from './colorPickerOptions';

export default function App() {
  return (
    <Container>
      <Box
        type="small"
        classNames="big red"
        styles={{
          color: '#ffffff',
          fontWeight: 900,
          fontSize: 24,
          margin: '5px auto',
          borderRadius: '1em',
        }}
      />
      <Box
        type="medium"
        classNames=""
        styles={{ margin: '5px auto', borderRadius: '1em' }}
      />
      <Box
        type="large"
        classNames=""
        styles={{
          backgroundColor: '#aa3322',
          color: '#fff',
          margin: '5px auto',
          fontWeight: 500,
          fontSize: 18,
          borderRadius: '1em',
        }}
      />
      {/* <ColorPicker options={colorPickerOptions} />
      <Alert text="ALERT! Default type" />
      <Alert text="ALERT! Success type." type="success" />
      <Alert text="ALERT! Warning type." type="warning" />
      <Alert text="ALERT! Error type." type="error" /> */}
      {/* <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section /> */}
    </Container>
  );
}
