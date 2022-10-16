import Skull from 'assets/images/skull.jpg';

import './index.scss';

const NotFoundPage = () => {
  return(
    <div  className="not-found-page">
      <span className="not-found-page__title">Такой страницы нет!</span>
      <img src={Skull} alt="not-found-page" className="not-found-page__pic"/>
    </div>
  )
}

export default  NotFoundPage;
