import axios from "axios";

import './index.scss';

const Main = () => {
  axios.get('/api/v1/data').then((response) => {
    console.log(response.data); // => { channels: [...], currentChannelId: 1, messages: [] }
  });
  return(
    <>

    </>
  )
}

export default Main;
