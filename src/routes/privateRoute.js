import router from 'umi/router'

export default ({children, match, route}) => {
    if(!localStorage.username && match.path !== '/login') {
        router.push('/')
    }

    if(localStorage.username && match.path === '/login') {
        router.push('/')
    }

    return children
}