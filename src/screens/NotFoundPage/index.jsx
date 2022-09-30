import './index.scss';

import Skull from 'assets/images/skull.jpg';

const NotFoundPage = () => {
  return(
    <div  className="not-found-page">
      <span className="not-found-page__title">Такой страницы нет!</span>
      <img src={Skull} alt="" className="not-found-page__pic"/>
    </div>
  )
}

export default  NotFoundPage;
