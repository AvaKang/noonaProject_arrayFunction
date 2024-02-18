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
/**
 * map 문제
*/

//1. 모든 이름을 대문자로 바꾸어서 출력하시오.
//대문자는 toUpperCase();
const data = names.map((item) => {
	return item.toUpperCase();
})
console.log('map Q1:', data);

//2. 성을 제외한 이름만 출력하시오.(예 -['Steven', 'Bill', 'Mark', 'Elon' ...])
/**
 * 1. 스페이스 기준으로 분할한다
 * 2. 자른 문자열 중 첫번째 요소만 반환하여 새 배열을 만든다.
 */
const data2 = names.map((item) => {
	return item.split(' ')[0];
})
console.log('map Q2:', data2);

//3.이름이 이니셜만 출력하시오(예 -['SPU','BG','MEZ','EM'...]) 
/**
 * 1. 스페이스 기준으로 분할한다.
 * 2. 자른 문자열에 각각 첫번째 문자만 어떻게 출력할 것인가?
 */
//※ 다시 풀어보기
const data3 = names.map((item) => {
	let splitName = item.split(' ');
	let initial = '';
	splitName.forEach((nameItem) => (initial += nameItem[0]));
	return initial;
})
console.log('map Q3:', data3);

/* ===================================================== */
/**
 * filter 문제
*/
//1. 이름에 a를 포함한 사람들을 출력하시오.
//includes는 배열 항목에 특정 값이 포함되어 있는지 판단하여 true 또는 false를 반환한다.
const data4 = names.filter((item) => {
	return item.includes('a');
})
console.log('filter Q1:', data4);

//2. 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오 (예 -tt, ff, ll 이런 글자)
//※다시 풀어보기
const data5 = names.filter((item) => {
	let splitName = item.split('');
	return splitName.some((letter, index) => letter == splitName[index + 1]);
})
console.log('filter Q2:', data5);

/* ===================================================== */
/**
 * some 문제
*/
//1. 전체 이름의 길이가 20자 이상인 사람이 있는가?
const data6 = names.filter((item) => {
	return item.length > 20 ;
})
console.log('some Q1:', data6);

//2. 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
//※다시 풀어보기
const data7 = names.filter((item) => {
	let splitName = item.split(' ');
	splitName.pop();
	return splitName.some(eachName => eachName.toLocaleLowerCase().includes('p')) ;
})
console.log('some Q2:', data7);

/* ===================================================== */
/**
 * every 문제
*/
//1. 모두의 전체 이름의 길이가 20자 이상인가?
const data8 = names.every((item) => {
	return item.length > 20 ;
})
console.log('every Q1:', data8);

//2. 모두의 이름에 a가 포함되어 있는가?
const data9 = names.every((item) => {
	return item == 'a';
})
console.log('every Q2:', data9);

/* ===================================================== */
/**
 * find 문제
  */
//1. 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
const data10 = names.find((item) => {
	return item.length > 20 ;
})
console.log('find Q1:', data10); //Mark Elliot Zuckerberg (첫번째 값만 반환)

//2. 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
const data11 = names.find((item) => {
	return item.split(' ').length === 3;
})
console.log('find Q2:', data11); //Steven Paul Jobs (첫번째 값만 반환)

/* ===================================================== */
/**
 * findIndex문제
 */
//1. 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
const data12 = names.findIndex((item) => {
	return item.length > 20 ;
})
console.log('findIndex Q1:', data12); //2

//2. 미들네임이 포함되어 있는 사람의 인덱스 번호를 찾으시오.
const data13 = names.findIndex((item) => {
	return item.split(' ').length === 3 ;
})
console.log('findIndex Q2:', data13); //0