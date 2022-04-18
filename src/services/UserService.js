import { BaseService } from "./BaseService";

export class UserService extends BaseService {
    constructor() {
        super()
    }
    signIn = (formLogin) => {
        return this.post(`Users/signin`, formLogin)
    }
    getUser = (keyword) => {
        return this.get(`Users/getUser?keyword=${keyword}`)
    }

}
export const userService = new UserService();