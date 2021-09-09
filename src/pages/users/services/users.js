import request from '@/utils/request';

export function fetch({ page, pageSize }) {
  return request(`/api/users/get_users/${page}/${pageSize}`);
}

export function add(params) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/add_user
  return request('/api/users/add_user',{
    method: 'POST',
    body: JSON.stringify(params),
    }
  )
}

/**
 * edit user
 * @param id
 * @param params.username
 * @param params.nickname
 * @param params.type
 */

export function edit(id, params) {
  // 发起请求 https://cjy-react-interface.herokuapp.com/api/users/edit_user
  return request(`/api/users/edit_user/${id}`,{
    method: 'POST',
    body: JSON.stringify(params),
    }
  )
}