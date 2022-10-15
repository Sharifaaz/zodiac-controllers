const express = require('express')
//  create an instance of express 
const app = express()
const PORT = 3000

// HOME ROUTE
app.get(`/`,(req,res)=>{
    res.send(`Let's learn about the signs!`)
})
app.listen(PORT, ()=>{

    console.log(`HERE WE ARE AGAIN ${PORT}`)
})