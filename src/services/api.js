// const baseUrl = '';

const API = {
  listEmployees: 'https://jsonplaceholder.typicode.com/users'
}

export default API;

export function ApiCall(apiName, methodType, data, header) {
  //eslint-disable-next-line
  let customResponseFlag = false;
  const options = {
    method: methodType,
    headers: header || {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  if (methodType === 'GET') {
    delete options.body;
  }
  return new Promise((resolve, reject) => {
    fetch(apiName, options).then(response => {
      if (response.status === 401) {
        return
      } else if (response.status === 500) {
        customResponseFlag = true;
      }
      return response.json()
    }).then(responseJson => {
      if (customResponseFlag) {
        customResponseFlag = false;
        reject(responseJson);
      } else {
        resolve(responseJson)
      }
    }).catch(error => {
      reject(error)
    })
  })
}
