function evenNumbYes(a, b, c) {
    function evenNumbChecker(num){
        if (num%2==0){
          return "YES"
        } else return "NO";
    }
    let result =evenNumbChecker(a);
    console.log (result);
    let result1 =evenNumbChecker(b);
    console.log (result1);
    let result2 =evenNumbChecker(c);
    console.log (result2);
}
evenNumbYes(3,4,5);