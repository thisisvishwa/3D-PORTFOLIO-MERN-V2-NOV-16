```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const getProject = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

export const addProject = async (project) => {
  const response = await api.post('/projects', project);
  return response.data;
};

export const updateProject = async (id, updatedProject) => {
  const response = await api.put(`/projects/${id}`, updatedProject);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};

export const getSkills = async () => {
  const response = await api.get('/skills');
  return response.data;
};

export const getSkill = async (id) => {
  const response = await api.get(`/skills/${id}`);
  return response.data;
};

export const addSkill = async (skill) => {
  const response = await api.post('/skills', skill);
  return response.data;
};

export const updateSkill = async (id, updatedSkill) => {
  const response = await api.put(`/skills/${id}`, updatedSkill);
  return response.data;
};

export const deleteSkill = async (id) => {
  const response = await api.delete(`/skills/${id}`);
  return response.data;
};
```