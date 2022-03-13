import PaintingList from './components/PaintingList';
import Section from './components/Section';
import 'modern-normalize/modern-normalize.css';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
