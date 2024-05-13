const router = require("express").Router();
let Student =require("../models/Student");

//create


////http:localhost:8070/student/add kiyna eka tmai liynne ohom
router.route("/add").post((req,res)=>{

    const name =req.body.name;
    const age =Number(req.body.age);  //age eka number ekk nisa
    const gender =req.body.gender;

    const newStudent = new Student({

        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
    //mongodb ekt pass wenne meken
    //then kiynne if else wge ekk

})   


//read

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//put method use for get the data and update
//async eken wenne userla dennek eka pra update krddi crash wenna plwn nisa eka piliwelata krn ek

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;

    const{name,age,gender} =req.body;

    /* const name =req.body.name;
    const age =Number(req.body.age); 
    const gender =req.body.gender;
    kiyna ekamai uda tiyenne
    */

    const updateStudent ={
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status: "User update"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});

    })

   //error alla gnna plwn twth vidihk. ex-error 404 wge ewwa penne meka dmmama 
   //200 kiynne success kiyna ekt

    
})

//delete
router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status : "User deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status : "Error with delete user", error : err.message});
    })
})

//fetch
//eka user kenekge data vitrk gnna

router.route("/get/:id").get(async (req,res) =>{
    let userId =req.params.id;

    const user = await Student.findById(userId)
    .then((student)=>{
        res.status(200).send({status : "User fetched", student})
        //userwa frontend ekt ywnw
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({statys :"Error with get user",error : err.message});
    })
})


module.exports =router;