import { environment } from '../environments/environment';

const urls = {
  users: `${environment.API_URL}/users`,
  user: (id: number) => `${environment.API_URL}/users/${id}`,
  register: `${environment.API_URL}/auth/register`,
  login: `${environment.API_URL}/auth/login`,
  logout: `${environment.API_URL}/auth/logout`,
};

export default urls;
