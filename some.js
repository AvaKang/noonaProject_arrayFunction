/**
 * 배열함수4. some()
 * 
 * some()은 값이 있으면 true, 없으면 false로 반환한다.
 */

//some()활용 예제
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

let data = names.some((item) => {
   return item.startsWith('L') //배열 아이템 중에 L로 시작하는게 있는가?
})
console.log(data); //true

let data2 = names.some((item) => {
    return item.startsWith('A'); //배열 아이템 중에 A로 시작하는게 있는가?
})
console.log(data2); //false