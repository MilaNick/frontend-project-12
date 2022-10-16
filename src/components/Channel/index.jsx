import {Link} from "react-router-dom";
import cn from 'classnames';

import './index.scss';

const Channel = ({id, name, isActive}) => {
  const classes = cn({
    item: true,
    'item--active': isActive,
  });
  return (
    <>
      <li className={classes} key={id}><Link to={`/chats/${id}`}>{name}</Link></li>
    </>
  )
};

export default Channel;
