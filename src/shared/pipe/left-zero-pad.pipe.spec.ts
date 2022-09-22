import { LeftZeroPadPipe } from './left-zero-pad.pipe';

describe('LeftZeroPadPipe', () => {
  it('create an instance', () => {
    const pipe = new LeftZeroPadPipe();
    expect(pipe).toBeTruthy();
  });
});
