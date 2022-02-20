const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const calculator = require('../routes/calculator');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.set('json spaces',2)

app.get('/:op/:n1/:n2', (req,res) =>{

    console.log(req.params.op);
    let resul;
    const data = {
        "Result":resul,
        "Description":req.params.n1 + "+" + req.params.n2 + "= "
    };

    switch(req.params.op){
        case 'add': resul = add(req.params.n1,req.params.n2);
        data.Result = resul; data.Description = req.params.n1 + "+" + req.params.n2 + "=" + resul;
        res.json(data);
        break;  

        case 'sub': resul = subtraction(req.params.n1,req.params.n2);
        data.Result = resul; data.Description = req.params.n1 + "-" + req.params.n2 + "=" + resul;
        res.json(data);
        break;

        case 'mult': resul = multiplication(req.params.n1,req.params.n2); 
        data.Result = resul; data.Description = req.params.n1 + "*" + req.params.n2 + "=" + resul;
        res.json(data);
        break;

        case 'div': resul = division(req.params.n1,req.params.n2); 
        data.Result = resul; data.Description = req.params.n1 + "/" + req.params.n2 + "=" + resul;
        res.json(data);
        break;

        default: res.send("error");
        break;
    }

}); 


app.listen(port, ()=>{
    console.log(`Server on port ${port}`);
});

///////////////////////////////Calculo////////////////////////////////
///SUMA
function add (num1,num2){
    let n1 = parseInt(num1,10);
    let n2 = parseInt(num2,10);

    if(n1 && n2){
        return(n1 + n2);
        /*res.send(add+"");
        console.log(res);
        return(res);*/
    }
}
///RESTA
function subtraction(num1,num2){
    let n1 = parseInt(num1,10);
    let n2 = parseInt(num2,10);

    if(n1 && n2){
        return (n1 - n2);
        /*res.send(resul+"");
        console.log(resul);
        return(resul);*/
    }
}

//Multipliacion
function multiplication(num1,num2){
    let n1 = parseInt(num1,10);
    let n2 = parseInt(num2,10);

    if(n1 && n2){
        return(n1 * n2);
        /*//res.send(resul+"");
        console.log(resul);
        return(resul);*/
    }
}
function division(num1,num2){
    let n1 = parseInt(num1,10);
    let n2 = parseInt(num2,10);

    if(n1 && n2){
        return(n1 / n2);
        /*//res.send(resul+"");
        console.log(resul);
        return(resul);*/
    }
}