export const project_action_types = {
  fetchProjectsRequested: 'projects/FETCH_PROJETCS_REQUESTED',
  fetchProjectsSucceded: 'projects/FETCH_PROJETCS_SUCCEEDED',
  fetchProjectsFailed: 'projects/FETCH_PROJETCS_FAILED',
  postProjectsRequested: 'projects/POST_PROJETCS_REQUESTED',
  postProjectsSucceded: 'projects/POST_PROJETCS_SUCCEEDED',
  postProjectsFailed: 'projects/POST_PROJETCS_FAILED',
  putProjectsRequested: 'projects/PUT_PROJETCS_REQUESTED',
  putProjectsSucceded: 'projects/PUT_PROJETCS_SUCCEEDED',
  putProjectsFailed: 'projects/PUT_PROJETCS_FAILED',
  toggleModal: 'projects/TOGGLE_MODAL'
};

export const fetchProjectsRequested = (params) => ({type: project_action_types.fetchProjectsRequested, payload: params});
export const fetchProjectsSucceded = (data) => ({type: project_action_types.fetchProjectsSucceded, payload: data});
export const fetchProjectsFailed = (err) => ({type: project_action_types.fetchProjectsFailed, payload: err});

export const postProjectsRequested = (params) => ({type: project_action_types.postProjectsRequested, payload: params});
export const postProjectsSucceded = (data) => ({type: project_action_types.postProjectsSucceded, payload: data});
export const postProjectsFailed = (err) => ({type: project_action_types.postProjectsFailed, payload: err});

export const putProjectsRequested = (params) => ({type: project_action_types.putProjectsRequested, payload: params});
export const putProjectsSucceded = (data) => ({type: project_action_types.putProjectsSucceded, payload: data});
export const putProjectsFailed = (err) => ({type: project_action_types.putProjectsFailed, payload: err});

export const toggleModal = (state) => ({type: project_action_types.toggleModal, payload: state});