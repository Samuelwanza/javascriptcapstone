import getComments from "./modules/getComments";
import showLikes from "./modules/showLikes";

it("should count the number of shows", async () => {
  const likes = await showLikes();
  const count = likes.length;
  expect(count).toEqual(15);
});
it("should count the number of comments for the show, Person of interest", async () => {
  const comments = await getComments(2);
  const count = comments.length;
  expect(count).toEqual(9);
});
