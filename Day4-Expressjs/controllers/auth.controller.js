export const Login=(req,res)=>{
    const{username}=req.body;
    if(!username){
        res.status(400).json({
            message:"username is required"
        })
    }
    req.session.user={username};
    
    res.cookie("username",username,{httpOnly:true,maxAge:1000*60*60*24})

    res.status(200).json({
        message:"Login successful",
        username:username
    })

}

export const Logout=(req,res)=>{
    res.clearCookie("username");
    req.session.destroy();
    res.json({
        message:"Logout successful"
    })


}