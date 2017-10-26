// STEP-04 => WATCHING

const movieList = [
	{title: 'Frozen', tags:'kids,animation'},
	{title: 'The Rrock', tags:'action'},
	{title: 'FindingNemo', tags:'kids,animation,fish'},
	{title: 'HungerGames', tags:'action,sf'},
	{title: 'ET', tags:'sf,alien,old'},
	{title: 'Twilight', tags:'love,vampire'},
	{title: 'Frozen2', tags:'kids,animation,suite'},
]

function searchMovies(query){
	return movieList.filter(movie => movie.title.includes(query));
}

module.exports = searchMovies;
