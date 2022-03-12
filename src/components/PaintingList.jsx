import Painting from './Painting'

function PaintingList({ items }) {
  return  <ul>
        {items.map(itemData => (
            <li key={itemData.id}>
            <Painting
               imgUrl={itemData.url}
                title={itemData.title}
                author={itemData.author}
                price={itemData.price}
                quantity={itemData.quantity}
                />
            </li>))}
    </ul>
}

export default PaintingList