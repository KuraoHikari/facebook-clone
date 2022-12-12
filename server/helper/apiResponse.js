function apiResponse( code , data, res){
    let status = null
    if (code >= 100 && code< 200 ){
        status= "informational"
    }else if (code >= 200 && code< 300 ){
        status= "success"
    }else if (code >= 300 && code < 400){
        status= "redirection"
    }else if (code >= 400 && code < 500){
        status= "client error"
    }else {
        status = "server error"
    }
     return res.status(code).json({
        code, 
        status,
        data,
     })
}
module.exports =  { apiResponse }