const express=require('express')

const cookieParser=require('cookie-parser')

const app=express()

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use(cookieParser())

app.use('/',require('./routes/router'))

app.use((req,res,next)=>{
	if(!req.user)
		res.header('Cache-Control','private,no-cache,no-store,must-revalidate');
		next();
});

app.listen(3000,()=>{})