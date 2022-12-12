const { verifToken } = require("../helper/jwt")
const {User, Post} = require("../models")
class AuthMiddleware{
    static async authentication(req, res, next){
        try {
            const {access_token} = req.headers
            if(!access_token){
                throw {name :  "Unauthorized"}
            } else {
                const userVerify = verifToken(access_token)
                const userExits = await User.findByPk(userVerify.id)
                if(!userExits){
                    throw {name :  "Unauthorized"}
                }else {
                    req.user = {
                        id : userVerify.id
                    }
                    next()
                }
            }
        } catch (error) {
            next(error)
        }
    }
    static async authorizationPost(req, res, next){
        try {
            const id = +req.params.postId;
            const findPost = await Post.findByPk(id);
    
            if (!findPost) {
                throw { name: "NotFound" };
              } else {
                const userId = findPost.UserId
                if(userId === +req.user.id){
                    next()
                }else {
                    throw { name: "Forbidden Access" };
                  }
              }
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}
module.exports = AuthMiddleware