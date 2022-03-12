import Painting from './Painting'
import PropTypes from 'prop-types'

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

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
}

export default PaintingList