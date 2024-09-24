async function addproducts(event){
    event.preventDefault();
    console.log('reached add user');


    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    let image = document.getElementById('image').value;
    let author = document.getElementById('author').value;
    let language = document.getElementById('language').value;


    let data={
        title,
        price,
        description,
        language,
        image,
        author
    }

    let json_data=JSON.stringify(data);
    try{
        let response=await fetch('/submit',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:json_data
        });
        if(response){
            alert("product addedsuccessfully");
        }
        else{
            alert("something went wrong");
        }
        window.location=`addbook.html`
        console.log("response",response);
    }
    catch(error){
        console.log("error adding product",error);

    }
}