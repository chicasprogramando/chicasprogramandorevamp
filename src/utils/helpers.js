export const formatListForAutoSelect = list => {
  const formatedList = list.map(item => {
    return { text: item.description, value: item.id };
  });
  return formatedList;
};

export const formatListForApi = list => {
  const formatedList = list.map(specialty => {
    return { id: specialty.value, description: specialty.text };
  });
  return formatedList;
};
