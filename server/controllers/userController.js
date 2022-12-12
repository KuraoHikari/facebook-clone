const { apiResponse } = require("../helper/apiResponse");
const { checkPassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
const {User} = require("../models")

class UserController {
    static async loginUser(req, res, next){
        const {email, password} = req.body
        try {
            const findUserEmail = await User.findOne({where:{ email: email }})
            if(findUserEmail){
                if(checkPassword(password, findUserEmail.password)){
                    const access_token = signToken({id: findUserEmail.id, email: findUserEmail.email, username: findUserEmail.username})
                    return apiResponse(200, { access_token }, res);
                }else{
                    throw { name: "UnauthorizedLogin" };
                }
            }else {
                throw { name: "UnauthorizedLogin" };
            }
        } catch (error) {
            next(error)
        }
    }
    static async registerUser(req, res, next){
        const {username, email, password} = req.body
        try {
            const createUser = await User.create({username,email, password})
            const access_token = signToken({id: createUser.id, email: createUser.email, username: createUser.username})
            return apiResponse(200, { access_token }, res);
        } catch (error) {
            next(error)
        }
    }

}

module.exports = UserController