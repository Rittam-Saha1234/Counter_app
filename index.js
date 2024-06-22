const countValue=document.querySelector('#counter')

const increment=()=>{
    //get the value from html. Return value is in string so convert it into int
    let value=parseInt(countValue.innerText);
    //update the value
    value=value+1;
    //set the value onto UI
    countValue.innerText=value;
}

const decrement=()=>{
    //get the value from html. Return value is in string so convert it into int
    let value=parseInt(countValue.innerText);
    //update the value
    value=value-1;
    //set the value onto UI
    countValue.innerText=value;
}