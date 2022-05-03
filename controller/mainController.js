const Product = require('../model/productCatalogue');

module.exports.home = async(req,resp)=>{
  try{
    let productList = await Product.find({});    //get all Product
    return resp.render('home',{
      title:"Home|Page",
      productList : productList
    });
  }catch(err){
     return resp.status(400).json({
        message : "HOME - Error occured while fectching records "
     });  
  }
}

module.exports.create = async(req,resp)=>{
   try{
     console.log("@@@@@@@@");
     let proName = req.body.name;
     let proQuant = req.body.quantity;

     let currProd = await Product.create({
        name : proName,
        quantity : proQuant 
     });
     
     return resp.status(200).json({
      message: "Product created",
      product : currProd 
    });     

   }catch(err){
    return resp.status(400).json({
      message: "There is some issue in Creating Product"
    });
   }
}

module.exports.productsList = async(req,resp)=>{
  try{
    let productList = await Product.find({});
    return resp.status(200).json({
     message: "Alll Products List",
     products : productList
   });     

  }catch(err){
   return resp.status(400).json({
     message: "There is some issue in displaying all records"
   });
  }
}

module.exports.delProduct = async(req,resp)=>{
  try{
   
    console.log(req.params.id);
    let delProID = req.params.id;
    await Product.findByIdAndDelete(delProID);
    return resp.status(200).json({
     message: "Product deleted"
   });     

  }catch(err){
   return resp.status(400).json({
     message: "There is some issue in deleting product"
   });
  }
}

// module.exports.updateProduct = async(req,resp)=>{
//   try{
//     console.log(req.body);
//     let currPro = await Product.findById(req.params.id);
//     console.log(currPro);
//     let updateQuant = req.query.number;
//     currPro.quantity = updateQuant;
//     await currPro.save();
//     return resp.status(200).json({
//      message: "Product updated",
//      product:currPro
//    });     

//   }catch(err){
//    return resp.status(400).json({
//      message: "There is some issue in product updation"
//    });
//   }
// }

module.exports.updateProduct = async(req,resp)=>{
  try{
    console.log(req.body);
    let currPro = await Product.findById(req.params.id);
    console.log(currPro+" and the param ");
    let updateQuant = req.query.number;
    currPro.quantity = updateQuant;
    await currPro.save();
    return resp.status(200).json({
     message: "Product updated",
     product:currPro
   });     

  }catch(err){
   return resp.status(400).json({
     message: "There is some issue in product updation"
   });
  }
}
