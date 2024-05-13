const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name : {
        type : String,
        required : true
        //require eken wenne name kiyna ekta value ekk tiynwd kiyla
        //validation ekk meka. databse ekt add wenne naa value ekk nttm
    },
    age :{
        type : Number,
        required :true
    },
    gender:{
        type :String,
        required :true
    }
})


const Student = mongoose.model("Student",studentSchema);
module.exports =Student;   //routes ekt export wenne meken.
//model eka athulta denne schema eke data ywnna ona document eka(table ek)
//Student eke 's' eka captial ee unt mongo ekt yddi okkma simple wenwa.
//aya ee wachane bahuwachana wenw agata 's' ekk enw


