const { apiResponse } = require("../helper/apiResponse");

function errorHandler(err, req, res, next){
    let code = null
    let message = null
    if (err.name === "SequelizeValidationError") {
        code = 400;
        let dataErr = err.errors.map((el) => {
          return el.message;
        });
        message = { message: dataErr };
      } else if (err.name === "SequelizeUniqueConstraintError") {
        code = 400;
        message = { message: req.body.email + " already used" };
      } else if (err.name === "UnauthorizedLogin") {
        code = 401;
        message = { message: "email/password invalid" };
      } else if (err.name === "Unauthorized") {
        code = 401;
        message = { message: "Unauthorized" };
      } else if (err.name === "Invalid Token") {
        code = 401;
        message = { message: "Invalid Token" };
      } else if (err.name === "NotFound") {
        code = 404;
        message = { message: "Post not Found" };
      } else if (err.name === "Forbidden Access") {
        code = 403;
        message = { message: "Forbidden Access" };
      } else if (err.name === "non Image Format") {
        code = 401;
        message = { message: "file must be in img format" };
      } else if (err.name === "invalid image") {
        code = 400;
        message = { message: "Please Select an images" };
      } else if (err.name === "SequelizeDatabaseError") {
        code = 400;
        message = { message: "Bad Request" };
      } else if (err.name === "max image size is 255kb") {
        code = 401;
        message = { message: "max image size is 255kb" };
      }  else {
        code = 500;
        message = { message: "Internal Server Error" };
      }
      return apiResponse(code, message, res);
}
module.exports = errorHandler