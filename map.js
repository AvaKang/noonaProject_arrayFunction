/**
 * forEach와 map의 비교
 * 1. forEach는 반환값이 없음
 * 2. ★map은 반드시 배열을 반환한다.
 * 3.
 */

/**
 * 배열함수2. map()
 * 
 * 1.map()은 반드시 반환값이 있다.
 * 2.배열을 반환한다.
 * 3.반드시 return을 해줘야 한다.
 * 
 * map()은 Api파일 중 json파일은 대부분 데이터가 객체 형식이다.
 * 내가 원하는 데이터만 가져오고 싶을 때 map을 많이 쓴다.
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

//map(익명함수)
let data = names.map((item, index) => {
	return item;
});
console.log(data); //['Steven Paul Jobs', 'Bill Gates', 'Mark Elliot Zuckerberg', 'Elon Musk', 'Jeff Bezos', 'Warren Edward Buffett', 'Larry Page', 'Larry Ellison', 'Tim Cook', 'Lloyd Blankfein']

//map()활용 예제
let ceoList = [
	{name:'Larry Page', age:23, ceo:true},
	{name:'Tim Cook', age:40, ceo:true},
	{name:'Elon Musk', age:55, ceo:false}
]

let data2 = ceoList.map((item) => {
	//return item.name; // ceoList배열에 name만 가져올 경우
	return item.age; // ceoList배열에 age만 가져올 경우
})
console.log(data2);
