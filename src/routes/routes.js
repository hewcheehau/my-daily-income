//routes file

const express = require('express');
const userRouter = require('./user');

const app = express();

app.use("/auth/", userRouter);
module.exports = app;
// const Model = require('../models/model');
// //Post method
// router.post('/post', async (req, res) => {
//     // console.log("hellos");
//     // console.dir(req.body);
//     const data = new Model({name: req.body.name, age: req.body.age});

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     //
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })

// //GET method
// router.get('/getAll', async (req, res) => {
// 	try{
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// });

// //GET by ID
// router.get('/getOne/:id', async(req, res) => {
//     try{
//         const data = await Model.findById(req.params.id);
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// });
// //UPDATE by ID
// router.patch('/update/:id',async (req, res) => {
// 	try{
// 	const id = req.params.id;
// 	const updatedData = req.body;
// 	const options = {new: true};
// 	const data = await Model.findByIdAndUpdate(
// 		id, updatedData, options
// 	);
// 	res.send(data);
// 	}catch (err) {
// 	 res.status(500).json({message: err})
// 	}
// });
// //DELETE by ID
// //Delete by ID Method
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Model.findByIdAndDelete(id)
//         res.send(`Document with ${data.name} has been deleted..`)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// router.post('/signup', async (req, res) => {
//     try {
        
//     }
//     catch (err) {
//         res.status(400).json({message: error.message})
//     }
// })


