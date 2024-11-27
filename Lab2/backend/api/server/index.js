const { app } = require('@azure/functions');

  const testHandler = async (request, context) => {
    return { body: 'Backend works!' };
  };
  module.exports = helloHandler;
  
app.http('hello', {
    methods: ['POST', 'GET'],
    handler: testHandler
});