/**
 * 배열함수3. filter()
 * 
 * filter()은 조건을 넣고, 조건에 대해 참인 것만 반환된다.
 */

//filter()활용 예제
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

let ceoList = [
	{name:'Larry Page', age:23, ceo:true},
	{name:'Tim Cook', age:40, ceo:true},
	{name:'Elon Musk', age:55, ceo:false}
]

let data2 = ceoList.filter((item) => {
    //return item.name.startsWith('L');
})
console.log(data2);

let data = names.filter((item) => {
    //return item.age == 23; //나이가 23인 리스트 출력
    return item.startsWith('L') //이름 첫 글자가 L로 시작하는 모든 리스트 출력 ['Larry Page', 'Larry Ellison', 'Lloyd Blankfein']
})
console.log(data);