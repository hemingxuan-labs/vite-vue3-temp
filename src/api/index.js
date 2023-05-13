import service from '@/utils/request.js'
import { objToUrl } from '@/utils/common.js'

export const discordOauthToken = (data) => {
    return service({
        url: `/api/needex/discord/oauth/token${objToUrl(data)}`,
        method: 'get'
    })
}
export const userDoLong = (data) => {
    return service({
        url: `/api/needex/user/doLong`,
        method: 'post',
        data
    })
}
