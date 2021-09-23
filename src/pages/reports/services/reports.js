import request from '@/utils/request'

export function fetchAllUsers() {
    return request(`/api/users/all_users`)
} 