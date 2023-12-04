function unitNumb(x){
    let result=0;
    if ((x-x%10000)/10000)%2>0  {result=result+1}
    console.log(result)
    function oddNumbChecker(a){
        if(a%2>0){
            return a;
        } else return -1;
    }
}
unitNumb(23457);

