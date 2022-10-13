import axios from "axios";
import {useContext, useEffect} from "react";

import './index.scss';
import {AuthContext} from "../../App";


const Main = () => {
  const [auth] = useContext(AuthContext);
  useEffect(() => {
    if (auth) {
      axios.get('/api/v1/data', {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      }).then((response) => {
        console.log(response.data); // => { channels: [...], currentChannelId: 1, messages: [] }
      });
    }
  }, [])

  return(
    <>

    </>
  )
}

export default Main;
