//cargamos la dependencia express
const express = require('express');
//creamos una nueva app con express
const app = express();
//definir puerto
const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs')
const specialDay = 21;
//month is base 0
const specialMonth = 1;

//when root url is requested
//http GET method
//configurar la respuesta del servidor cuando se pide la url raiz con GET
app.get('/', (req,res)=> {
    let currentdate = new Date();

   let currentDayOfTheMonth = currentdate.getDate();

   let currentMonth = currentdate.getMonth();
   
   if(currentDayOfTheMonth === specialDay && currentMonth === specialMonth) {
       res.render('index', {message:'Yes'})
   }else{
       //res.send('NO')
       res.render('index', {message:'No'})

   }

});
//arrancar el servidor en el puertpo indicado
app.listen(port, () =>{
   //funcion que se manda a llamar cuando el servirdor arranca
    console.log(`server listening on port  ${port}`);

})