const sum = require('../src/maths');

describe("Math library tests", () => {
  var database;
  var cnt =0;
  beforeAll(() => {
    database=[];
  });

  afterAll(() => {
    database=null
  });

  beforeEach(() => {
    database.push(++cnt);
  });

  afterEach(() => {
    console.log("Finished test: "+database[database.length-1])
  });


  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds -2 + 2 to equal 3', () => {
    expect(sum(-2, 2)).toBe(0);
  });

});
