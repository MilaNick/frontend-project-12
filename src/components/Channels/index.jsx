import Channel from "components/Channel";

import './index.scss';

const plus = '+';

const Channels = ({channels}) => {
  return (
    <div className="main-channels">
      <div className="main-channels__wrap">
        <h3 className="main-channels__title">Каналы</h3>
        <button className="btn btn--size-sm">{plus}</button>
      </div>
      <ul className="main-channels__names">
        {channels.map((channel) => {
          return (
            <Channel key={channel.id} id={channel.id} name={channel.name} />
          )
        })}
      </ul>
    </div>
  )
};

export default Channels;
