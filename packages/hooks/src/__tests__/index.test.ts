import * as blackworldHooks from '..';

describe('blackworldHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(blackworldHooks).forEach((module) => {
      expect(blackworldHooks[module]).toBeDefined();
    });
  });
});
