import { matchBreakpoint } from './utils';

describe('matchBreakpoint', () => {
  it('returns true for undefined', () => {
    expect(matchBreakpoint(undefined, undefined)).toBe(true);
  });
});
