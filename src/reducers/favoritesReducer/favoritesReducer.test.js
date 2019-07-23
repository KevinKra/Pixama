import favoritesReducer from './favoritesReducer'

describe('favoritesReducer', ()=> {
  it('should return the initial state', ()=> {
    const expected = [];
    const result = favoritesReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return an array of user\'s favorited movies', () => {
    
    const getFavoriesAction = {
      type: 'UPDATE_FAVORITES',
      favorites: [{title: "Movie1"}, {title: "Movie2"}]
    }
    
    const expected = [{title: "Movie1"}, {title: "Movie2"}];
    const result = favoritesReducer([], getFavoriesAction)
    expect(result).toEqual(expected)
  })

})