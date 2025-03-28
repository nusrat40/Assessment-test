//Response 1 Test 

const key ="test";
const results= {test:"123"};
try{
    const newHiddenInput = document.createElement('input')
    .setAttribute('type' , 'hidden')
    .setAttribute('name',key)
    .setAttribute('value', results[key]);

    console.log("Response 1 Success:", newHiddenInput);
    
}
catch(error){
    console.log("Response 1 Error:", error.message);
    
}