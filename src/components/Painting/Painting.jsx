import PropTypes from 'prop-types';
import s from './Painting.module.css';
import defaultImage from './default.jpg';

export default function Painting({
  url = defaultImage,
  title,
  author = 'unknown',
  price,
  quantity,
}) {
  return (
    <div className={s.container}>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author?.url}>{author?.tag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
