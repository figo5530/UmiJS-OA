import { notification } from 'antd'
import { fetch } from 'dva'

const codeMessage = {
    200:'服务器成功返回请求数据',
    201:'新建或修改数据成功',
    202:'一个请求已经进入后台队列',
    204:'删除数据成功',
    400:'发出的请求错误，服务器没有进行新建或修改数据的操作',
    401:'用户没有权限',
    403:'用户得到授权，但是访问是禁止的',
    404:'发出的请求针对的是不存的记录，服务器没有进行操作',
    406:'请求的格式不可得',
    410:'请求的资源被永久删除，且不会再得到',
    422:'当创建一个对象时，发生一个验证错误',
    500:'服务器发生错误，请检查服务器',
    502:'网关错误',
    503:'服务不可用，服务器暂时过载或维护',
    504:'网关超时',
}

export function login(params) {
    return fetch("/api/users/login", {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(resp => {
        if (resp.status >= 200 && resp.status <300) {
            return resp.json()
        }
        const errortext = codeMessage[resp.status] || resp.statusText
        notification.error({
            message: `failed request ${resp.status} ${resp.url}`,
            description: errortext
        })
    }).catch(err => {})
}