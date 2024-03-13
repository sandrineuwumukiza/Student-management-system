// const express = require('express');
import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000;
const db_connection_string = process.env.MONGODB_URI

app.use(express.json())
mongoose.connect(db_connection_string) 
.then(() =>{
console.log('connected to DB...')
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})


})
.catch(err =>{
    console.log(err)
})


