const { top5LessLentBooksQ12021 } = require('./../test/top5LessLentBooksQ12021');

describe('top5LessLentBooksQ12021', function () {
  it('should exist a function with the given name', function () {
    expect(top5LessLentBooksQ12021).not.toBeNull();
  });

  it('should return the 5 less lent books in Q1 2021', async () => {
    const expected = [
      'Econometric Analysis',
      'Computer Vision, A Modern Approach',
      'Textbook of Economic Theory',
      'Learning OpenCV',
      'Journal of a Novel',
    ];

    const top5Books = await top5LessLentBooksQ12021();

    expect(top5Books).toBeInstanceOf(Array);
    expect(top5Books.length).toBe(5);
    expect(top5Books).toEqual(expected);
    expect(top5Books[0]).toBe('Econometric Analysis');
    expect(top5Books[1]).toBe('Computer Vision, A Modern Approach');
    expect(top5Books[2]).toBe('Textbook of Economic Theory');
    expect(top5Books[3]).toBe('Learning OpenCV');
    expect(top5Books[4]).toBe('Journal of a Novel');
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
