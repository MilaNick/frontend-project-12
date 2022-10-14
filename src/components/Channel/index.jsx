
import './index.scss';

const Channel = ({id, name}) => {
  return (
    <>
      <li key={id}><a href="">{name}</a></li>
    </>
  )
};

export default Channel;
