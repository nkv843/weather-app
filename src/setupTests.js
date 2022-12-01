import '@testing-library/jest-dom';

require('jest-fetch-mock').enableMocks();

beforeEach(() => {
  fetch.doMock();
});
