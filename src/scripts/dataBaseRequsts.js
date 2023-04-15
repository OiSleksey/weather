const secondUrl =
  'https://crudcrud.com/api/68ce22b7b41c48808e0dcdd534ffcf75/tasks';

const firstUrl =
  'https://crudcrud.com/api/14718c0f1d2243028b14a26a65c15f03/tasks';

const thirthUrl = 'https://642abd3e00dfa3b5474db331.mockapi.io/api/v1/tasks';

const forthUrl =
  'https://crudcrud.com/api/674827e8dbd24f13b0f11ebf4dcc2d0c/tasks';

let urlDataBase;
let i = 0;

export const errorConsole = error => {
  console.error(error);
  console.log(error);
};

export const errorCatch = error => {
  if (error instanceof SyntaxError) {
    console.log('SyntaxError');
    errorConsole(error);
  }
  if (error instanceof TypeError) {
    console.log('TypeError');
    errorConsole(error);
    setOtherUrl();
  }
  if (error instanceof ReferenceError) {
    console.log('ReferenceError');
    errorConsole(error);
  }
  if (error instanceof RangeError) {
    console.log('RangeError');
    errorConsole(error);
  }
  if (error instanceof EvalError) {
    console.log('EvalError');
    errorConsole(error);
  }
  if (error instanceof URIError) {
    console.log('URIError');
    errorConsole(error);
  }
};

export const getRequest = () => {
  return fetch(urlDataBase, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(error => {
      errorCatch(error);
    });
};

export const setOtherUrl = () => {
  const urlArrayBase = [firstUrl, secondUrl, thirthUrl, forthUrl];
  urlDataBase = urlArrayBase[i];
  // console.log(`Number ${i} in URL request`);
  i++;
  if (i >= urlArrayBase.length) i = 0;
};

export const postRequest = inputData => {
  return fetch(urlDataBase, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;utc-8' },
    body: JSON.stringify(inputData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Faild POST data');
      }
    })
    .catch(error => {
      errorCatch(error);
    });
};

export const putRequest = (updateTask, id) => {
  return fetch(`${urlDataBase}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;utc-8' },
    body: JSON.stringify(updateTask),
  })
    .then(response => {
      if (!response.ok) throw new Error('Faild PUT data');
    })
    .catch(error => {
      errorCatch(error);
    });
};

export const deleteRequest = id => {
  return fetch(`${urlDataBase}/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Faild DELETE data');
      }
    })
    .catch(error => {
      errorCatch(error);
    });
};
