const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const calculator = require('../routes/calculator');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.set('json spaces',2)

app.get('/:op/:n1/:n2', (req,res) =>{

    console.log(req.params.op);
    let resul;
    const n1 = req.params.n1;
    const n2 = req.params.n2;
    const data = {
        "Result":resul,
        "Description":req.params.n1 + "+" + req.params.n2 + "= "
    };

    switch(req.params.op){
        case 'add': resul = calculator.add(n1,n2); 
        data.Result = resul; data.Description = req.params.n1 + "+" + req.params.n2 + "=" + resul;
        res.json(data);
        break;  

        case 'sub': resul = calculator.subtraction(n1,n2);
        data.Result = resul; data.Description = req.params.n1 + "-" + req.params.n2 + "=" + resul;
        res.json(data);
        break;

        case 'mult': resul = calculator.multiplication(n1,n2);
        data.Result = resul; data.Description = req.params.n1 + "*" + req.params.n2 + "=" + resul;
        res.json(data);
        break;

        case 'div': resul = calculator.division(n1,n2);
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