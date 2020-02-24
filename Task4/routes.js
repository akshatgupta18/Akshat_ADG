  
const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling GET requests to /name' 
    });
});

router.post('/', (req,res,next) => {
    res.status(201).json({
        message:'Handling POST requests to /age' 
    });
});

router.get('/name', (req,res,next) => {
    res.status(200).json({
        message:'Hello Akshat' ,
    });
});

router.post('/name', (req,res,next) => {
    res.status(200).json({
        message:'Hello Akshat' ,
    });
});



router.post('/:age', (req,res,next) => {
    const age = req.params.age;
    if (age <= '12'){
        res.status(200).json({
            message: 'You are a child' ,
            
    });
    }
    else if (age >= '12' && age<= '19' ){
        res.status(200).json({
            message: 'You are a teenager' ,
            
    });
    }
    else {
        res.status(200).json({
            message: 'You are an adult',
        });
    }
});
module.exports = router;
