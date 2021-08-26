import * as userServices from '../services/users'
export default {
    namespace: 'users',
    state: {
        list: [],
        total: 0,
        page: 1,
        pageSize: 5
    },
    reducers: {
       setData(state) {
           return { ... state}
       }
    },
    effects: {
        *fetch({payload: { page }}, {call, put, select}) {
            const pageSize = yield select(state => state.users.pageSize) 
            yield call(userServices.fetch, {page, pageSize})
        }

    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname}) => {
                if (pathname == '/users') {
                    dispatch({type: "fetch", payload: {page: 1}})
                }
            })
        }
    }
}