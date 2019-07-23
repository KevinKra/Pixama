import moviePageReducer  from './index.js'

describe('moviePageReducer', ()=> {
  it('should return the initial state', ()=> {
      const expected = {};
      const result = moviePageReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should update the selected movie', ()=> {
      const testAction = {
      type: 'UPDATE_MOVIE_PAGE', 
      payload: {title: 'Fight Club', isFavorite: true}
    }
    const expected = {title: 'Fight Club', isFavorite: true};
    const result = moviePageReducer({}, testAction)
    expect(result).toEqual(expected)

  })

})

