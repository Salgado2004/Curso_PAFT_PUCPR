import { OddEvenPipe } from './pipes/odd-even.pipe';

describe('OddEvenPipe', () => {
  it('create an instance', () => {
    const pipe = new OddEvenPipe();
    expect(pipe).toBeTruthy();
  });
});
