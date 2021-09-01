import request from '@/utils/request';

export function fetch({ page, pageSize }) {
  return request(`/api/users/get_users/${page}/${pageSize}`);
}

export function add(params) {
  return request(`/api/users/add_user`, {
    method: "POST",
    body: JSON.stringify(params),
  });
}