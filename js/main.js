

async function getApi() {

    var element = await fetch('https://jsonplaceholder.typicode.com/photos')
    var exo = await element.json();
    var myText ="";
    for(var i=0; i<exo.length; i++){
        var cartoona = `<div class="col-md-4 text-center mb-4">
                       <img src="${exo[i].url}" class="img-fluid">
                       <h3>${exo[i].id}</h3>
                       <h5>${exo[i].title}</h5>
                       </div>
                       `;
        
            myText = myText + cartoona;
    }


        document.querySelector(".test").innerHTML = myText;
    
    
}

getApi();