import popularMoviesReducer from './popularMoviesReducer.js';

describe('popularMoviesReducer', ()=> {
  it('should return the initial state', ()=> {
      const expected = [];
      const result = popularMoviesReducer(undefined, {})
      expect(result).toEqual(expected)
    })

  it('should set the array of popular movies upon page load', ()=> {
    const testAction = {
      type: 'ADD_POPULAR_MOVIES',
      movies: [{title: 'Fight Club', isFavorite: false}, {title: 'Toy Story',isFavorite: false}]
    }
    const expected = [{title: 'Fight Club', isFavorite: false}, {title: 'Toy Story',isFavorite: false}]
    const result = popularMoviesReducer([], testAction)
    expect(result).toEqual(expected)

  })

  it('should update the array of popular movies with a logged in user\'s favorites', ()=> {
      const testAction = {
      type: 'UPDATE_POPULAR_FAVORITES', 
      popularFavorites: [{title: 'Fight Club', isFavorite: true}, {title: 'Toy Story', isFavorite: false}]
    }
    const expected = [{title: 'Fight Club', isFavorite: true}, {title: 'Toy Story', isFavorite: false}];
    const result = popularMoviesReducer([], testAction)
    expect(result).toEqual(expected)

  })
})