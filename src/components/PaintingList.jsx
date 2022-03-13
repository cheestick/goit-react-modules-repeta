import Painting from './Painting';
import PropTypes from 'prop-types';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(itemData => (
        <li key={itemData.id}>
          <Painting {...itemData} />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintingList;

// url={itemData.url}
// title={itemData.title}
// author={itemData.author}
// price={itemData.price}
// quantity={itemData.quantity}
