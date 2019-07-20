import favoritesReducer from './favoritesReducer'


describe('favoritesReducer', ()=> {
  it('should return the initial state', ()=> {
    const expected = [];
    const result = favoritesReducer(undefined, {})
    expect(result).toEqual(expected)
  })
})