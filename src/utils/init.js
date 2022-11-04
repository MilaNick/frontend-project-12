import {io} from 'socket.io-client';
import store from 'store/store';

import {addChannel, removeChannel, renameChannel} from 'components/Channels/channelsSlice';
import {addMessage} from 'components/Messages/messagesSlice';

const socket = io();

socket.on('newMessage', ({body, channelId, id, username}) => {
    store.dispatch(addMessage({body, channelId, id, username}));
});
socket.on('newChannel', ({id, name, removable}) => {
    store.dispatch(addChannel({id, name, removable}))
});
socket.on('removeChannel', ({id}) => {
    store.dispatch(removeChannel(id))
});
socket.on('renameChannel', ({id, name}) => {
    store.dispatch(renameChannel({id, name}))
});

const rollbarConfig = {
    accessToken: '2509ceefddee48a29de8f8bc9476cb78',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: 'production',
    },
}

const ErrorDisplay = ({ error, resetError }) => {
    console.log(error);
    resetError();
}

export {socket, rollbarConfig, ErrorDisplay};