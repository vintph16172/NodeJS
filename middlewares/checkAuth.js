import expressJWT from 'express-jwt'

export const checkAuth = (request,response,next)=>{
    const isAdmin = true;
    if(isAdmin){
        console.log("Xin chao admin")
        next()
    }else{
        console.log("Ban khong co quyen truy cap")
    }
}

export const requiredSigin = expressJWT({
    algorithms:["HS256"],
    secret:"123456",
    requestProperty: "auth"
})

export const isAuth = async (request,response,next)=>{
    const status = request.profile._id == request.auth._id
    if(!status){
        response.status(401).json({
            message: "Ban khong co quyen truy cap"
        })
    }
    next()
}

export const isAdmin = (request, response, next) => {
    if(request.profile.role == 0) {
        response.status(401).json({
            message: "Bạn không phải là admin. Chim cút"
        })
    }
    next();
} 