exports.handler = async function(event) {
  console.log(JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'AI CloudOps alert processed',
      receivedAt: new Date().toISOString()
    })
  };
};
