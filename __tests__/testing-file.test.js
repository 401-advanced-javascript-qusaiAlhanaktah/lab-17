/* eslint-disable strict */
'use strict';

jest.mock('fs');
const event = require('../src/events.js');

require('../src/logger.js');
require('../src/error.js');
const mocks = require('../__mocks__/fs.js');

let readFile = mocks.readFile;
let writeFile = mocks.writeFile;

describe('error event', () => {
  it('it should console log an error event when an error has happend', () => {
    expect(event.emit('error', 'you are wrong', 'booom')).toBeTruthy();
  });
});

describe('log event', () => {
  it('it should log a message when a save has happend', () => {
    expect(event.emit('log', 'saved!!!', 'don not wory')).toBeTruthy();
  });
});


describe('read File method', () => {
  it('Read a file', () => {
    let fileToRead = 'anyFile.txt';
    return readFile(fileToRead, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(fileToRead));
    });
  });
});

describe('write File method', () => {
  it('Write a file', () => {
    let fileToWrite = 'testFile.txt';
    return writeFile(fileToWrite, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(fileToWrite));
    });
  });
});