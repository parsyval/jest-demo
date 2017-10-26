const searchmovie = require('./searchmovie.js');

it('Returns the movies that matches the query', () => {
	expect(searchmovie('F')).toMatchSnapshot();
});
