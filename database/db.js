const mysql=require('mysql')

const conexion=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'jwt',
})

conexion.connect((error)=>{
	if(error){}
		console.log('Conectadou')
})

module.exports=conexion