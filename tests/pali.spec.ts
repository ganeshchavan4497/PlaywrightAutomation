import{test,expect} from '@playwright/test'

test('Find Palindrom',async({page}) =>{

    var num =121;
    while(num<10){
    var n1= num%10;
    var n2=10*n1+n1;
    console.log(n2);

    if(n2=num)
        console.log("Number is Palindrom")

    else
        console.log("Number is not palindrome")

    }
    
})