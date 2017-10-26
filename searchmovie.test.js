const searchmovie = require('./searchmovie.js');

it('Returns the movies that matches the query', () => {
	expect(searchmovie('F')).toEqual([
		{title: 'Frozen', tags: 'kids,animation'},
		{title: 'FindingNemo', tags: 'kids,animation,fish'},	
	]);
});
