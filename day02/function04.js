//14번 : 익명함수

let printAll = function (num){
  console.log(num);
};

printAll(100);

//매개변수로 전달한 값이 짝수라면 +10한 값을 출력
//아니라면 전달된 값만 출력
//result 변수, 익명함수 이용

let result = function (num){
  if(num%2===0 && typeof num === 'number'){
    console.log(num+10);
  }else{
    console.log(num);
  }
};

result(10);

console.log(typeof 10)



let square = function (x){
  return x * x;
};

console.log(square(10));

setTimeout(function (){
  console.log("2초 뒤 출력");
}, 2000);