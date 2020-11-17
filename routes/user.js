const express = require('express')
const bycrypt=require('bcryptjs')
const User = require('../models/user')
const router = express.Router();

// user account creation
router.post('/',(req,res)=>{
    if(req.body.username == '' || req.body.password == ''){
        res.json({
            code : 422,
            status  : 'All parameters are required'
        })
    }
    else{
        const user = await User.findOne({username:req.body.username})
        if(user){
            res.json({
                code : 403,
                status  : 'Username already taken'
            })
        }
        else{
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,async(err,hash)=>{
                    if(err){
                        res.json({
                            statusCode : 500,
                            status    : 'Internal Server Error'
                        })
                    }
                    const user = new User({
                        username : req.body.username,
                        password : hash
                    })
                    try{
                        await user.save()
                        res.json({
                            statusCode : 201,
                            status : 'account created'
                        })
                    }
                    catch(err){
                        res.json({
                            statusCode : 500,
                            status    : 'Internal Server Error'
                        })
                    }
                });
            });
        }
    }
})

// user account login
router.post('/auth',(req,res)=>{
    if(req.body.username == '' || req.body.password == ''){
        res.json({
            code : 422,
            status  : 'All parameters are required'
        })
    }
    else{
        const user = await User.findOne({username:req.body.username})
        if(user){
            bycrypt.compare(password,user.password,function(err,isMatch){
                if(err) {
                    res.json({
                        statusCode : 500,
                        status    : 'Internal Server Error'
                    })
                }
                if(isMatch){
                    res.json({
                        statusCode : 200,
                        status : 'success',
                        userId : user._id
                    })
                }
                else{
                    res.json({
                        statusCode : 401,
                        status    : 'Invalid Password'
                    })
                }
            });
        }
        else{
            res.json({
                code : 404,
                status  : 'user does not exist'
            })
        }
    }
})
module.exports = router;