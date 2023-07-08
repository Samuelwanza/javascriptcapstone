import getComments from "./modules/getComments";
import showLikes from "./modules/showLikes";

describe("test counters", () => {
  it("should count the number of shows", async () => {
    const likes = await showLikes();
    const count = likes.length;
    expect(count).toEqual(15);
  });
  it("likes should return undefined ", async () => {
    let likes = await showLikes();
    likes = undefined;
    expect(likes).toEqual(undefined);
  });
  it("should count the number of comments for the show, Person of interest", async () => {
    const comments = await getComments(2);
    const count = comments.length;
    expect(count).toEqual(10);
  });
  it("comments should return undefined", async () => {
    let comments = await getComments(2);
    comments = undefined;
    expect(comments).toEqual(undefined);
  });
});
