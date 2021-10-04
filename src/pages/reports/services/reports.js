import request from '@/utils/request'

export function fetchAllUsers() {
    return request(`/api/users/all_users`)
} 


/**
 * @param {createid} params.createUserId 
 * @param {title} params.title 
 * @param {content} params.content 
 * @param {recipient} params.username 
 */
export function add(params) {
    console.log(params)
    return request(`/api/users/add_report/${localStorage.userId}`, {
        method: 'POST',
        body: JSON.stringify(params)
    })
} 

/**
 * @param {page} page
 * @param {pageSize} pageSize
 * @param {userId} userId 
 */
export function fetchMyReports({ page, pageSize }) {
    return request(`/api/users/reports/${page}/${pageSize}/${localStorage.userId}`)
} 