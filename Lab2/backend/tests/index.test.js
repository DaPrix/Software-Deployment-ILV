const testHandler = require('../api/server'); // Adjust the path as necessary

describe('testHandler', () => {
  it('should return "Backend works just fine!"', async () => {
    // Mock request and context objects
    const mockRequest = {};
    const mockContext = {};

    // Call the handler
    const response = await testHandler(mockRequest, mockContext);

    // Assertions
    expect(response).toBeDefined();
    expect(response.body).toBe('Backend works just fine!');
  });
});