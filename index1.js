// let num=prompt("enter a number");
// summ=0;
// for(i<=1;i<=num;i++){
    
//     if(i==num){
//         summ=summ+i;
//     }
//     else{
//         summ=summ+i+","
//     }
    
// }
// console.log(summ);


// let str1="moom";
// let str2=""
// for(i=str1.length-1;i>=0;i--){
//     str2+=str1[i];
// }
//     if(str2==str1){
//         console.log("It is a palindrom");
//     }
//     else{
//         console.log("It is not a palindrom'");
// let num=1237;
// let summ=0;
// for(i of num){
//   summ=summ+i;

// }
// console.log(summ);  

// let =1237;
// let summ=0;
// for(i of num){
//     summ=summ+i;
// }

// let a="NaGeNdRa"
// let res=""
// for(i of a){
//     if(i==i.toUpperCase()){
//         a=i.toLowerCase()
//     }
//     else {
//         a=i.toUpperCase()
//     }
//     res=res+a;
// }
// console.log(res);

// num=+prompt("enter a number")
// c=0;
// if(num>1){
// for(i=2;i<num;i++){
//    if(num%i==0){
       
//        console.log("Not a prime");
//        c++
//        break;
//    }
// }
// if(c==0){
//     console.log("prime");
// }

// }
// else{
//     console.log("Enter a valid a number");
// }








// (PRIME SUM BIGGER OD NONPRIME SUM IS BIGGER)
// // let number=prompt("enter a number")
// // primeSum=0;
// // nonprimeSum=0;
// // c=0;
// // for(num of number){
// //     if(1>0){
// //         for(i=2;i<num;i++){
// //             if(num%i==0){
// //                 c++
// //             }
// //         }
// //         if(c>0){
// //             nonprimeSum=nonprimeSum+Number(num)
// //         }
// //         else{
// //             primeSum=primeSum+Number(num)
// //         }
// //     }
// // }
// // if(nonprimeSum>primeSum){
// //     console.log("nonprime sum is bigger");
// // }
// // else{
// //     console.log("prime sum is bigger");
// // }




// (fib0nacci series prime sum)
// let number=prompt("enter a number")
// primeSum=0
// function prime(n){
//     if(n>1){
//         c==0
//         for(i=2;i<=n;i++){
//             if(n%i==0){
//                 c++
//                 break
//             }
//         }
//         if(c==0){
//             primeSum=primeSum+n
//         }
//     }
// }
// a=0,b=1,i=1
// while(i<=number){
//   prime(a)
//   c=a+b
//   a=b
//   b=c
//   i++
// }
// console.log(primeSum);
 


// (fibbonacci series sum of odd numbers)
// let num=prompt("enter a number")
// a=0,b=1,i=1,c=0,oddSum=0
// while(i<=num){
//     if(a%2==1){
//         oddSum=oddSum+a
      
//     }
//     c=a+b
//     a=b
//     b=c
//     i++
// }
//     console.log(oddSum);

// function findMinMaxSums(arr) {
//     // Calculate the total sum of all five integers
//     const totalSum = arr.reduce((acc, num) => acc + num, 0);

//     // Find the minimum and maximum sums
//     const minSum = totalSum - Math.max(...arr); // Exclude the maximum element
//     const maxSum = totalSum - Math.min(...arr); // Exclude the minimum element

//     // Print the results
//     console.log(minSum, maxSum);
// }

// // Example usage:
// const arr = [1, 2, 3, 4, 5];
// findMinMaxSums(arr);

// let numbers = [10, 1, 20, 5];
// numbers.sort((a, b) => a - b);
// console.log(numbers);


// var str=["apple","banana","grapes"]
// var result=str.toString()
// console.log(result);



// var str=["apple","banana","grapes","guava"]
// var result=str.at(2)
// console.log(result);


// var str=["Nagendra","Nagamani","Ramana"]
// var result=str.join(" Reddyshekar ")
// console.log(result);

// arr PopStateEvent()
// var str=["Nagendra","Nagamani","Reddyshekar","chinnari"]
// var result=str.pop()
// console.log(result);


// function miniMaxSum(arr){
//         arr.sort((a,b)=>a-b)
//         const miniSum=arr.slice(0,4).reduce((acc,num)=>acc+num,0)
//         const maxSum=arr.slice(1).reduce((acc,num)=>acc+num,0)
//         console.log(miniSum+" "+maxSum);
// }
// const number=[1,2,3,4,5]
// miniMaxSum(number)



// var fruits=["apple","banana","guava","orange"]
// var result=fruits.copyWithin(2,0)
// console.log(result);

// let arr=["one10kone","10ktwo","three","four","five10k"]
//   for(i=0;i<arr.length;i++){
//         if(arr[i].startsWith("10k")||arr[i].endsWith("10k")){
//             console.log(arr[i]);
//         }

//   }



