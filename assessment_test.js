/*
Proof of work:
- Response 1: See screenshot "Response1_Chaining_Error.png"
   Error proves chaining setAttribute() fails in vanilla JS.

-Response 2: See screenshot "Response2_UtilityFunction_Valid.png"
  Output shows valid HTML element creation.
*/


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


//Response 2 Test

function createAndConfigureElement(tag,attributes){
    try{
        const element = document.createElement(tag);
       for(const [key,value] of Object.entries(attributes)){
        element.setAttribute(key,value);
    }
    return element;
    }
    catch(error)
    {
        console.log("Utility Function Error:", error.message);
        return null;
        
    }
}

try{
    const newHiddenInput = createAndConfigureElement('input',{
        type:'hidden',
        name:'test',
        value:'123'
    });
    if(newHiddenInput)
    {
        console.log("Response 2 Success:", newHiddenInput.outerHTML);
        
    }
    else{
        console.error("Response 2 Failed: Element creation returned null");
    }
}
catch(error)
{
    console.error("Response 2 Runtime Error:", error.message);
}