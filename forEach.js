//for문은 배열과 같이 많이 쓴다.
/**
 * 배열 함수
 * 원하는 값을 찾거나, 검사하는 유용한 함수
 * 배열 함수는 쓰는 방식이 똑같다.
*/

let names = [
	'Steven Paul Jobs',
	'Bill Gates',
	'Mark Elliot Zuckerberg',
	'Elon Musk',
	'Jeff Bezos',
	'Warren Edward Buffett',
	'Larry Page',
	'Larry Ellison',
	'Tim Cook',
	'Lloyd Blankfein'
]

//기존 for문 사용
for(let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

/**
 * 배열함수 1. forEach()
 * forEach는 
 * 1.첫번째 매개변수로 함수를 받는다.
 * 2.두번째 매개변수로 index를 받는다.
 * 
 * 기존 for문을 통해 얻은 names[i] 값을 forEach()가 지가 알아서 준다.
 * forEach가 알아서 회전을 하면서 매번 아이템 하나씩 넘겨준다. for문에서 for(let i = 0; i < names.length; i++)가 하던일
 */ 

//1번 사용 방법
function printName(item){
	//console.log(item);
}
//forEach()매개변수로 printName()함수를 부른다.
names.forEach(printName);

//2번 사용 방법 (옛날 문법)
//위에 1번 함수를 아래처럼 코드 작성할 수 있다.
names.forEach(function(item){
//console.log(item);
});

//3번 사용 방법 (ES6 문법)
//위에 2번 함수를 아래처럼 최신 코드로 작성할 수 있다. (익명함수)
names.forEach((item, index) => {
console.log(item, index); //Steven Paul Jobs 0, Bill Gates 1, Mark Elliot Zuckerberg 2, Elon Musk 3, Jeff Bezos 4, Warren Edward Buffett 5, Larry Page 6, Larry Ellison 7, Tim Cook 8, Lloyd Blankfein 9
});
