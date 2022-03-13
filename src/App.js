import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
