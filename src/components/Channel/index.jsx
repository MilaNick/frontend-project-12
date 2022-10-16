import {Link} from "react-router-dom";

import './index.scss';

const Channel = ({id, name, isActive}) => {
  return (
    <>
      {/* todo: add cn */}
      <li className={isActive ? 'item item--active' : 'item'} key={id}><Link to={`/chats/${id}`}>{name}</Link></li>
    </>
  )
};

export default Channel;
