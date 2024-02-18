/**
 * 
 * filter 과 find의 차이첨
 * filter는 
 * 1. 결과를 배열에 담아준다.
 * 2. 조건에 속하는 애들 모두 반환
 * 
 * find는 
 * 1. 해당 갑만 하나 준다. String 타입
 * 2. 첫번째로 찾은 하나만 반환해준다.
 * 3. find는 정확한 값 딱 하나만 찾기에 좋다.
 */

//find()활용 예제
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

names.forEach((item, index) => {
    console.log(item, index);
})

let data = names.find((item) => {
    return item.startsWith('L'); //L로 시작하는 첫번째 값 찾아줘
})
console.log('find:', data); //Larry Page

/**
 * findIndex
 * 인덱스 번호 찾아줘
 */
let data2 = names.findIndex((item) => {
    return item == 'Lloyd Blankfein';
})
console.log('findIndex:', data2); //9