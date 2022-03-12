import ReactDOM from 'react-dom';
import paintings from './paintings.json';

const data = paintings[0];

function Painting(props) {
  console.log(props);
  return (
    <div>
      <img src={props.url} alt={props.title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href={props.author.url}>{props.author.tag}</a>
      </p>
      <p>Цена: {props.price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

ReactDOM.render(
  <Painting
    url={data.url}
    title={data.title}
    author={data.author}
    price={data.price}
  />,
  document.querySelector('#root'),
);

// ===============================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
