import Painting from './components/Painting';
import data from './paintings.json';

export default function App() {
  return (
    <div>
      <Painting
        // imgUrl={data[0].url}
        title={data[0].title}
        author={data[0].author}
        price={data[0].price}
      />
      <Painting
        imgUrl={data[1].url}
        title={data[1].title}
        author={data[1].author}
        price={data[1].price}
      />
      <Painting
        imgUrl={data[2].url}
        title={data[2].title}
        author={data[2].author}
        price={data[2].price}
      />
    </div>
  );
}
