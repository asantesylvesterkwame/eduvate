import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true,
    },
    title:{
        type: String,
        required:true,
    },
    desc:{
        type: String,
        required:true,
    },
    imgUrl:{
        type: String,
        required:true,
    },
    videoUrl:{
        type: String,
        required:true,
    },
    attendance:{
        type: String,
        default: 0,
    }, 
    tags:{
        type:[Strings],
        default:[],
    },
    understoods:{
        type:[Strings],
        default:[],
    },
    misunderstoods:{
        type:[Strings],
        default:[],
    }
    
},{timestamps: true});

export default mongoose.model("Video", VideoSchema)