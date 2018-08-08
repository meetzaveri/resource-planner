import API, {ApiCall} from './api'

let responseObjToBeSend = {
  message: ''
}

let id = 1;
export const fakeApiCall_A = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('IN API', params);
      let data = null;

      if (params.method === 'GET') {
        data = [
          {
            id: 'f7rcnlvcgieaul6g446o97',
            deviceInfo: 'G7',
            status: 'Available',
            timeSlot: '07:00:00',
            teamName: 'Arkham',
            startTime: '2018-08-7 18:44',
            endTime: '2018-08-7 19:44',
            description: 'None',
            mobileType: 'Android'
          }
        ];
      } else if (params.method === 'POST') {
        id++;
        params.data.id = id;
        data = [params.data];

        console.log('DATA IN POST', data)
      } else if (params.method === 'PUT') {
        data = [params.data];
      }

      responseObjToBeSend = {
        message: 'Data Fetched successfully',
        data
      }
      if (data) {
        resolve(responseObjToBeSend);
      } else {
        let error = 'Something went wrong';
        responseObjToBeSend.message = error
        reject(responseObjToBeSend);
      }
    }, 2000)
  })
}

export const RealApiCall = (params) => {
  return new Promise((resolve, reject) => {
    let data = null;
    if (params.method === 'GET') {
      data = [];
    } else if (params.method === 'POST') {
      id++;
      params.data.id = id;
      data = [params.data];

      console.log('DATA IN POST', data)
    } else if (params.method === 'PUT') {
      data = [params.data];
    }
    ApiCall(params.url, params.method).then(responseJson => {
      responseObjToBeSend = {
        message: 'Data Fetched successfully',
        data: responseJson
      };

      resolve(responseObjToBeSend)
    }).catch(err => {
      let error = err;
      responseObjToBeSend.message = error
      reject(responseObjToBeSend);
    })
  })
}

export const fakeApiCall_Projects = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('IN API FAKE PROJECTS', params);
      let data = null;

      if (params.method === 'GET') {
        data = [
          {
            id: 'f7rcnlvcgieaul6g446o97',
            name: 'Pied Piper',
            teams_assigned: [
              {
                id: 1,
                name: 'Android'
              }, {
                id: 2,
                name: 'Web'
              }, {
                id: 3,
                name: 'IOS'
              }
            ],
            users_assigned: [
              {
                id: 1,
                name: 'Pattrick Ross'
              }, {
                id: 2,
                name: 'Taylor Elmwood'
              }, {
                id: 3,
                name: 'Erlich Bachmann'
              }
            ],
            sprints: [
              {
                id: 1,
                name: 'Sprint 1',
                deadline: '2018-08-7'
              }, {
                id: 2,
                name: 'Sprint 2',
                deadline: '2018-08-17'
              }, {
                id: 3,
                name: 'Sprint 3',
                deadline: '2018-08-27'
              }
            ],
            phases: [
              {
                id: 1
              }
            ],
            priority_score: 9
          }, {
            id: 'f7rrnlvcgieaul6g446o97',
            name: 'Nucleus',
            teams_assigned: [
              {
                id: 1,
                name: 'Android'
              }, {
                id: 2,
                name: 'Web'
              }, {
                id: 3,
                name: 'IOS'
              }
            ],
            users_assigned: [
              {
                id: 1,
                name: 'Nathan J.'
              }, {
                id: 2,
                name: 'Carl James'
              }
            ],
            sprints: [
              {
                id: 1,
                name: 'Sprint 1',
                deadline: '2018-08-11'
              }, {
                id: 2,
                name: 'Sprint 2',
                deadline: '2018-09-17'
              }
            ],
            phases: [
              {
                id: 1
              }
            ],
            priority_score: 7
          }
        ];
      } else if (params.method === 'POST') {
        id++;
        params.data.id = id;
        data = [params.data];

        console.log('DATA IN POST', data)
      } else if (params.method === 'PUT') {
        data = [params.data];
      }

      responseObjToBeSend = {
        message: 'Data Fetched successfully',
        data
      }
      if (data) {
        resolve(responseObjToBeSend);
      } else {
        let error = 'Something went wrong';
        responseObjToBeSend.message = error
        reject(responseObjToBeSend);
      }
    }, 2000)
  })
}