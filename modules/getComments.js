import appurl from './appData';

const getComments = async (id) => {
  try {
    const getAllComments = await fetch(`${appurl}/comments?item_id=${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const comments = await getAllComments.json();
    return comments;
  } catch (error) {
    return error;
  }
};
export default getComments;
