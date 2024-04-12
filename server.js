
const express = require('express');
const app = express();


app.get('/api/v1/routiens', async(req,res, next) => {
  try{

  }catch(err){
  next(err);
  }
})

app.listen(3000, () => console.log (`listing on port 3000`));
