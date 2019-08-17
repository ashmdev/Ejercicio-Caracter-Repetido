console.log('mqtt');
client = new Paho.MQTT.Client(
  'broker.hivemq.com',
  Number(8000),
  'clientId-RJJ4OomACMasdas'
);

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({ onSuccess: onConnect });

function onConnect() {
  console.log('Conectado');
  client.subscribe('/postulacion');
  message = new Paho.MQTT.Message('Hola');
  message.destinationName = '/postulacion';
  client.send(message);
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log('Conexión perdida:' + responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log('Ha llegado el siguiente mensaje:' + message.payloadString);
}
