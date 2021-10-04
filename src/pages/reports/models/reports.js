import * as reportServices from '../services/reports'

export default {
    namespace: 'reports',
    state: {
        allUsersList: [],
    },
    reducers: {
       setData(state, { payload }) {
           return { ...state, allUsersList : payload }
       }
    },
    effects: {
        *getAllUsers({ payload }, { call, put }) {
            const res = yield call(reportServices.fetchAllUsers)
            if (res && res.state === 'success') {
                yield put({type: 'setData', payload: res.data})
            }else {
                yield put({
                    type: 'setData',
                    payload: { allUsersList: [] }
                })
            }
        },
        *add({ payload }, { call }) {
            return yield call(reportServices.add, payload)
        }

    },
    subscriptions: {

    }
}