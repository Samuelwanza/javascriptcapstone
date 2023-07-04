const fetchAPI = async (url) => {
  let data = '';
  try {
    const response = await fetch(url);
    const result = await response.json();
    data = result;
  } catch (error) {
    return error;
  }
  return data;
};

export default fetchAPI;