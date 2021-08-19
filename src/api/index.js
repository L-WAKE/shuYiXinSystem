import { request } from './core'
import { GET, path } from './config'
const network = {
    getRanking(params) {
        return request(GET, path.ranking, params)
    },
    login(params) {
        return request(GET, path.login, params)
    }
}
export default network