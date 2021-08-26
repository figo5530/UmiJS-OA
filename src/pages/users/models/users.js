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
       setData(state, {payload: { list, total, page }}) {
           return { ...state, list, total, page }
       }
    },
    effects: {
        *fetch({ payload: { page }}, { call, put, select }) {
            const pageSize = yield select(state => state.users.pageSize) 
            const res = yield call(userServices.fetch, { page, pageSize })
            if (res && res.state === 'success') {
                yield put({type: 'setData', payload: { ...res.data, page }})
            }else {
                yield put({
                    type: 'setData',
                    payload: { data: { list: [], total: 0 } }
                })
            }
            const list = yield select(state => state.users.list)
            console.log(list)
        }

    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname}) => {
                if (pathname === '/users') {
                    dispatch({type: 'fetch', payload: { page: 1 }})
                }
            })
        }
    }
}