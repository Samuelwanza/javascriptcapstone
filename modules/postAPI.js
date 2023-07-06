const postAPI = (url, id) => {
  try {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    console.log('Error', error);
  }
};

export default postAPI;