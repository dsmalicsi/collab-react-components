/**
 * Created by dario on 08.03.17.
 */
import sharedb from 'sharedb/lib/client';
import WebSocket from 'reconnecting-websocket';

// This line makes the WebSocket connection always use port the CollabServer port.
const protocol = window.location.protocol;
const port = window.location.host.split(':')[1];
const host = port
  ? window.location.host.replace(port, '8080')
  : window.location.host + ':8080';
let socketProtocol = 'ws://';

if (protocol === 'https:') {
  socketProtocol = 'wss://';
}

const webSocket = new WebSocket(socketProtocol + host);
const connection = new sharedb.Connection(webSocket);

export default connection;
