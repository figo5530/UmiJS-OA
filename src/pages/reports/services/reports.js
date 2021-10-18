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

/**
 * @param {WeeklyId} id
 * @param {userId} userId 
 */
 export function fetchInfo(id) {
    return request(`/api/users/report_detail/${localStorage.userId}/${id}`)
}

/**
 * @param {WeeklyId} params.id 
 * @param {title} params.title 
 * @param {content} params.content 
 * @param {recipient} params.receiverName 
 */
 export function update(params) {
    return request(`/api/users/edit_report/${localStorage.userId}/${params.id}`, {
        method: 'POST',
        body: JSON.stringify(params)
    })
} 