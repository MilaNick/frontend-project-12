import { useSelector } from 'react-redux';

import Channel from "components/Channel";

import './index.scss';

const plus = '+';

const Channels = () => {
  const channels = useSelector((state) => state.channelsReducer.channels);
  console.log(JSON.stringify(channels, null, 4))
  return (
    <div className="main-channels">
      <div className="main-channels__wrap">
        <h3 className="main-channels__title">Каналы</h3>
        <button className="btn btn--size-sm">{plus}</button>
      </div>
      <ul className="main-channels__names">
        {channels.map((channel) => {
          return (
            <Channel key={channel.id} id={channel.id} name={channel.name} link='/'/> //TODO убрать из пропсов линк, посмотреть динамический роут
          )
        })}
      </ul>
    </div>
  )
};

export default Channels;
