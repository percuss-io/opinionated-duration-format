const { expect } = require(`chai`);

const format = require(`./index.js`);

describe(`@percuss.io/opinionated-duration-format`, () => {
  it(`should be a function`, () => {
    expect(format).to.be.a(`function`);
  });

  it(`handles durations under a minute`, () => {
    const seconds = 55.5;
    const expected = `0:55`;

    expect(format(seconds)).to.equal(expected);
  });

  it(`handles durations under 10 minutes`, () => {
    const seconds = 178.467;
    const expected = `2:58`;

    expect(format(seconds)).to.equal(expected);
  });

  it(`handles durations under an hour [1]`, () => {
    const seconds = 817.233;
    const expected = `13:37`;

    expect(format(seconds)).to.equal(expected);
  });

  it(`handles durations under an hour [2]`, () => {
    const seconds = 2138.167;
    const expected = `35:38`;

    expect(format(seconds)).to.equal(expected);
  });

  it(`handles durations above an hour`, () => {
    const seconds = 5859;
    const expected = `1:37:39`;

    expect(format(seconds)).to.equal(expected);
  });
});
