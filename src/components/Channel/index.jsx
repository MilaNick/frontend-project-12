import {Link} from "react-router-dom";

import './index.scss';


const Channel = ({id, name, link}) => {
  return (
    <>
      <li key={id}><Link to={link}>{name}</Link></li>
    </>
  )
};

export default Channel;
