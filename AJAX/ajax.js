let fetchBtnn = document.getElementById('fetchBtn');
fetchBtnn.addEventListener('click', buttonClickHandler)


function buttonClickHandler() {
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the Object
    xhr.open('GET', 'vihar.txt', true) //true:asynchronous , false:synchronous, here we take true because we don't want to block our website
        //GET means we only fetch the data....and in POST,we sent some data along with request
        //GET ma khali URL moklisu ane e mujab no response madse and POST ma URL with data ane e mujab no response madse

    //What to do on progress
    xhr.onprogress = function() { //not necessary
        console.log('On Progress');
    }

    //What to do when response is ready
    xhr.onload = function() {
        console.log(this.responseText);
    }

    //send the request
    xhr.send();
}