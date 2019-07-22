import romanceMoviesReducer from './romanceMoviesReducer.js';

describe('romanceMoviesReducer', ()=> {
  it('should return the initial state', ()=> {
      const expected = [];
      const result = romanceMoviesReducer(undefined, {})
      expect(result).toEqual(expected)
    })

  it('should set the array of romance movies upon page load', ()=> {
    const testAction = {
      type: 'ADD_ROMANCE_MOVIES',
      movies: [{title: 'Fight Club', isFavorite: false}, {title: 'Toy Story',isFavorite: false}]
    }
    const expected = [{title: 'Fight Club', isFavorite: false}, {title: 'Toy Story',isFavorite: false}]
    const result = romanceMoviesReducer([], testAction)
    expect(result).toEqual(expected)

  })

  it('should update the array of romance movies with a logged in user\'s favorites', ()=> {
      const testAction = {
      type: 'UPDATE_ROMANCE_FAVORITES', 
      romanceFavorites: [{title: 'Fight Club', isFavorite: true}, {title: 'Toy Story', isFavorite: false}]
    }
    const expected = [{title: 'Fight Club', isFavorite: true}, {title: 'Toy Story', isFavorite: false}];
    const result = romanceMoviesReducer([], testAction)
    expect(result).toEqual(expected)

  })
})