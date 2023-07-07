import appurl from './appData';

const createComment = async (id, username, comment) => {
  const commentCreation = await fetch(`${appurl}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
  const commentstatus = await commentCreation.status;
  return commentstatus;
};
export default createComment;
