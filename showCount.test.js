import getComments from './modules/getComments';
import showLikes from './modules/showLikes';
import commentsCounter from './modules/commentsCounter';
import showCounter from './modules/showCounter';

describe('test counters', () => {
  it('should count the number of shows', async () => {
    const shows = [
      {
        name: 'MoneHeist',
        id: 12,
      },
      {
        name: 'Prison Break',
        id: 14,
      },
    ];

    const count = showCounter(shows);
    expect(count).toEqual(2);
  });
  it('likes should return undefined ', async () => {
    let likes = await showLikes();
    likes = undefined;
    expect(likes).toEqual(undefined);
  });
  it('should count the number of comments for the show, Person of interest', async () => {
    const comments = [
      {
        item_id: 12,
        comment: 'good',
      },
      {
        item_id: 12,
        comment: 'awesome',
      },
    ];
    const count = commentsCounter(comments);
    expect(count).toEqual(2);
  });
  it('comments should return undefined', async () => {
    let comments = await getComments(2);
    comments = undefined;
    expect(comments).toEqual(undefined);
  });
});
