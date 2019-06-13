const mongoose=require('mongoose'); 
const userSchema=mongoose.Schema({ 
    _id : mongoose.Schema.Types.ObjectId,
   // _id : mongoose.Schema.Types.ObjectId,
    name: {type:String ,required:true},
    email: {type:String ,required:true}, 
    password:{type:Number,required:true},
    username:{type:String ,required:true},
    profileimage:{type:String ,required:true} 
   
});
module.exports=mongoose.model('user',userSchema);    
     