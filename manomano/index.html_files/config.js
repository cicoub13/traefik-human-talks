(function() {
  const bengal = {
    PUBLIC_URL: 'https://static.bengal.manomano.com/',
    REACT_APP_CHAT_API: 'https://api.bengal.manomano.com',
    REACT_APP_ROUTING_API_ENDPOINT:
      'https://router.bengal.manomano.com',
    REACT_APP_OPERATOR_API_ENDPOINT:
      'https://operator.bengal.manomano.com',
    REACT_APP_SOCKET: 'https://socket.bengal.manomano.com',
    REACT_APP_CONNECTOR_API: 'https://connector.bengal.manomano.com',
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = bengal;
  } else {
    window.bengal = window.bengal || bengal;
  }
})();
