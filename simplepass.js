//type checkString below
function checkString(str){
    if(str < 0){
        return str;
    }
    else{
        throw new RangeError("Not cool man");
    }
}
//type getString below
function getString(str){
    try{
        str = checkString(str);
    }
    catch(e){
        console.log(e.message);
        getString(str);
    }
}
