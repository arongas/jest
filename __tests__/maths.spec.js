const math = require('../src/maths');

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
    expect(math.sum(1, 2)).toBe(3);
  });

  it('adds -2 + 2 to equal 3', () => {
    expect(math.sum(-2, 2)).toBe(0);
  });


  it('multiply 2  * 5 to equal 10', () => {
    expect(math.multiply(2, 5)).toBe(10);
  });


  it('Test Spy', () => {
    var spySum=jest.spyOn(math,'sum')
    expect(math.sum(2, 5)).toBe(7);
    expect(spySum).toHaveBeenCalled()
  });


  it('Test mock', () => {
    math.sum = jest.fn(() => 3);
    expect(math.sum(2, 5)).toBe(3);
    expect(math.sum).toHaveBeenCalled()
  });

});
