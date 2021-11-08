const { mostLentBookForQuarter2021 } = require('./../test/mostLentBookForQuarter2021');

describe('mostLentBookForQuarter2021', function () {
  it('should exist a function with the given name', function () {
    expect(mostLentBookForQuarter2021).not.toBeNull();
  });

  it('should return the most lent book by quarter in 2021', async () => {
    const expected = ['Data Structures Using C & C++', 'Asami Asami', 'Econometric Analysis', 'Econometric Analysis'];

    const mostLentBookByQuarter = await mostLentBookForQuarter2021();

    expect(mostLentBookByQuarter).toBeInstanceOf(Array);
    expect(mostLentBookByQuarter.length).toBe(4);
    expect(mostLentBookByQuarter).toEqual(expected);
    expect(mostLentBookByQuarter[0]).toBe('Data Structures Using C & C++');
    expect(mostLentBookByQuarter[1]).toBe('Asami Asami');
    expect(mostLentBookByQuarter[2]).toBe('Econometric Analysis');
    expect(mostLentBookByQuarter[3]).toBe('Econometric Analysis');
  });
});

const request = require('supertest');
const app = require('./../test/app');

describe('GET /report', function () {
  it('should return 200 status code and the result of the executed function', async () => {
    const res = await request(app).get('/report');

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).not.toBeLessThan(3);
    expect(res.body.length).not.toBeGreaterThan(5);
  });
});
