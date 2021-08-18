import fetch from 'dva/fetch'

export function login(params) {
    return fetch("/api/users/login", {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
        }
    })
}