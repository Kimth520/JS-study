//2번 객체1

const user = {
  name : "김태현",
  age : 20,
  address : "서울시",
  introduce : () => {
    console.log("안녕하세요");
  },
};

console.log(user, typeof user);
console.log(user.introduce);
user.introduce();

console.log(user.address);
console.log(user['address']);
//.로 직접 접근할 수 있고, key값의 규칙성이 필요하다면 [''] 문법을 사용하여 접근

//1.programing 객체 생성
//프로퍼티 키는  pro1~pro4까지
//프로퍼티 값은 java, dbms, html/css, javascript
const programing = {
  pro1 : "java",
  pro2 : "dbms",
  pro3 : "html/css",
  pro4 : "javascript"
};
//2.객체 출력
console.log(programing, typeof programing);
//3.javascrip만 출력하기(방법 2개)
console.log(programing.pro4);
console.log(programing['pro4']);
//4.pro1의 값을 자바로 변경
programing.pro1 = "자바";
console.log(programing.pro1);

//5 pro5 객체 추가 프로퍼티 값은 git
programing.pro5 = "git";
console.log(programing);
//const는 재할당이 안되어야하지만 객체에서는 내용이 바뀐다

//6. 객체의 값 출력
for(let i in programing){
  console.log(i);//해당 인덱스의 프로퍼티 키가 나온다
  console.log(programing[i])
}

//for...in
//객체릐 키 (프로퍼티 이름)을 순회한다
//일반 객체나 배열에서 모두 사용 가능하다

//for...of
//이터러블(iterabel) 객체에서만 사용가능 => 배열, 문자열, Map, Set 등...
//순회 시 객체의 값(value)를 반환한다
//일반 객체는 이터러블 객체가 아니기 때문에 사용불가하다
//[Symbol.iterator] 메소드를 가진 객체를 이터러블 객체라고 한다

//객체를 for...of로 순회하려면 배열로 변환하면 된다
//Object.keys(), Object.values(), Object.entries()를 사용한다
for(let key of Object.keys(programming)){
  console.log(key);
}

for(let value of Object.values(programing)){
  console.log(value);
}

for(let[key, value] of Object.entries(programing)){
  console.log(key, value);
}

//객체에 [Symbol.iterator]를 직접 추가
const program = {
  lang1 : "javascript",
  lang2 : "git",
  lang3 : "jsp",
  [Symbol.iterator] : function* (){
    for(let key in this){
      if(this.hasOwnProperty(key)){
        yield this[key];
      }
    }
  },
};

for(let value of program){
  console.log(value);
}
