const bodyParser=require('body-parser');
const User = require('../models/user.model');

exports.create = (req,res) =>{
    if(!req.body.email){
        return res.status(400).send({
            message:"User email can not be empty "
        });
    
}

    if(!req.body.motdepasse){
        return res.status(400).send({
            message:"User password can not be empty "
        });
    }
    const user = new User({
        email:req.body.email,
        motdepasse: req.body.motdepasse||"Untitled User"
    });
    user.save()
    .then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:err.message||"Some error occurred while creating the User."
        });
    });
};
exports.findAll = (req,res)=>{
    user.find()
    .then(users =>{
        res.send({status:'200',message:"All the users",users});
    }).catch(err =>{
        res.status(500).send({
            message: err.message||"some error occurred while retrieving users."
        });
    });
};
exports.findOne= (req,res) =>{
    User.findById(req.params.userId)
    .then(user =>{
        if(!user){
            return res.status(404).send({
                message:"User not found with id"+req.params.userId
            });
        }
        res.send({
            message:"User is found with id "+ req.params.userId,user
        });
    }).catch(err =>{
        if(err.kind ==='objectId'){
            return res.status(400).send({
                message:"User not found with id"+ req.params.userId
            });
        }
        return res.status(500).send({
            message:"Error retrieving user with id "+req.params.userId
        });
    });
};
exports.update =(req,res) =>{
    if(!req.body.email){
        return res.status(400).send({
            message: "User email can not be empty"
        });
    }
    if(!req.body.motdepasse){
        return res.status(400).send({
            message: "User password can not be empty"
        });
    }
    User.findByIdAndUpdate(req.params.userId,{
        email:req.body.email,
        motdepasse: req.body.motdepasse || "Untitled User",
    },{new:true})
    .then(user =>{
        if(!user){return res.status(404).send({
            message:"User not found with id"+req.params.userId
        });
    }
    res.send({
        message:"User is found with id "+ req.params.userId,user
    });
}).catch(err =>{
    if(err.kind ==='objectId'){
        return res.status(400).send({
            message:"User not found with id"+ req.params.userId
        });
    }
    return res.status(500).send({
        message:"Error retrieving user with id "+req.params.userId
    });
});
            
        };
        exports.delete= (req,res) =>{
            User.findByIdAndDelete(req.params.userId)
            .then(user =>{
                if(!user){
                    return res.status(404).send({
                        message:"User not found with id"+req.params.userId
                    });
                }
                res.send({
                    message:"User is found with id "+ req.params.userId,user
                });
            }).catch(err =>{
                if(err.kind ==='objectId'){
                    return res.status(400).send({
                        message:"User not found with id"+ req.params.userId
                    });
                }
                return res.status(500).send({
                    message:"Error retrieving user with id "+req.params.userId
                });
            });
        };
