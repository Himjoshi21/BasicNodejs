import users from "../data/user.data.js";




// SignUp Logic
export const signUp=(req,res)=>{
    const{name,email,password}=req.body;
    const userExist=users.find(u=>u.email==email)
    if(userExist){
        return res.status(400).json({message:"User already exist"})

    }
    users.push({
        id:users.length+1,
        name,
        email,
        password
    });
    res.status(201).json({message:"User created successfully"})
};

// login Logic
export const Login=(req,res)=>{
    const{email,password}=req.body;
    const user=users.find(u=>u.email==email && u.password==password);
    if(!user){
        res.status(400).json({message:"Invalid credentials"})
    }
    req.session.userId=user.id;

    req.session.email=user.email;

    res.json({message:"Login successful"});
};

// Logout Logic
export const Logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
};