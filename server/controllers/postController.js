const { apiResponse } = require("../helper/apiResponse");
const { Post , User} = require("../models")

class PostController {
    static async getAllPost(req, res, next){
        try {
            const allPost = await Post.findAll({
                order: [["id", "ASC"]],
                include: [
                  {
                    model: User,
                    attributes: ["email"],
                  }
                ],
            })
           return apiResponse(200, allPost, res);
        } catch (error) {
            next(error)
        }
    }
    static async getOnePost(req, res, next){
        try {
            const postId = +req.params.postId
            const findPost = await Post.findOne({
                where: {id : postId},
                include: [
                    {
                        model: User,
                        attributes: ["email"],
                      }
                ]
            }) 
            if(findPost !== null) {
                return apiResponse(200, findPost, res);
            }else {
                throw {name : "NotFound"}
            }
        } catch (error) {
            next(error)
        }
    }
    static async createPost(req, res, next){
        const { description , imageLink } = req.body
        const { id: UserId } = req.user
        try {
            const createPost = await Post.create({description , imageLink , UserId})
            return apiResponse(201, createPost, res)
        } catch (error) {
            next(error)
        }
    }
    static async updatePost(req, res, next){
        try {
            const postId = +req.params.postId
            const { description, imageLink } = req.body;
            const updatePost = await Post.update({ description, imageLink  }, { where: { id: postId }, returning: true });

            return apiResponse(200, updatePost[1][0], res);
        } catch (error) {
            next(error)
        }
    }
    static async deletePost(req, res, next){
        try {
            const postId = +req.params.postId

            await Post.destroy({where: { id: postId }})
          
            return apiResponse(200, { massage: `post with id : ${postId} succes to delete` }, res)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = PostController