const { app } = require('@azure/functions');

  const testHandler = async (request, context) => {
    return { body: 'Backend works just fine!!' };
  };

  module.exports = testHandler;

app.http('test', {
    methods: ['POST', 'GET'],
    handler: testHandler
});