let books=require('../db/model/books')
const { success_function, error_function } = require('../util/responceHandler')




// addbook

exports.addbook=async function (req,res){
    try{
        let body=req.body;
        console.log(body);
        let new_book=await books.create(body);
        console.log(new_book);

        let response=success_function({
            success:true,
            statuscode:200,
            message:"succsessfully added"
        })
        res.status(response.statuscode).send(response)
        return; 

    }
    catch(error){
        console.log(error);
        let response=error_function({
            success:false,
            statuscode:400,
            message:"error"
        })
        res.status(response.statuscode).send(response)
        return;
    }
}