/**
 * 배열함수5. every()
 * 
 * every()은 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트한다.
 * 불리언 값을 반환한다. 
 */

//every()활용 예제
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

//모두의 이름이 A로 시작하는가?
let data = names.every((item) => {
    return item.startsWith('A'); //배열 아이템이 모두 A로 시작하는가?
})
console.log(data); //false

let data2 = names.every((item) => {
    return item.length > 0 ;
})
console.log(data2);
