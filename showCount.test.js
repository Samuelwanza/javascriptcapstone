import showLikes from './modules/showLikes';

it('should count the number of shows', async () => {
  const likes = await showLikes();
  const count = likes.length;
  expect(count).toEqual(15);
});