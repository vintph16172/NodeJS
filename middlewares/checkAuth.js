export const checkAuth = (request,response,next)=>{
    const isAdmin = true;
    if(isAdmin){
        console.log("Xin chao admin")
        next()
    }else{
        console.log("Ban khong co quyen truy cap")
    }
}