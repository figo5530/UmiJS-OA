import request from '@/utils/request'

export function fetch() {
    return request("/api/users/get_users/1/3")
}