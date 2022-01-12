// unit type
type A = 'A';
type B = 'B';

// union type
type AB = 'A'|'B'; 
type AB12 = 'A'|'B'|12;

const a: AB = 'A';
//const c: AB = 'C'; 
// '"C"' 형식은 'AB' 형식에 할당할 수 없습니다.ts(2322)

const ab: AB = Math.random() < 0.5 ? 'A':'B'; // 정상
const ab12 : AB12 = ab; // 정상

// declare
// JS코드로 컴파일되지 않고 TypeScript 컴파일러에게 타입 정보를 알리는 역할.
declare let twelve: AB12; 
// const back: AB = twelve; 
// 'AB12' 형식은 'AB' 형식에 할당할 수 없습니다.
//'12' 형식은 'AB' 형식에 할당할 수 없습니다.ts(2322)

declare let abc: AB;
// 실제로 declare는 타입스크립트만 인식하므로 자바스크립트코드에서는 읽어지지 않는다.
const ABC:AB = abc; // 타입스크립트가 오류를 잡아내지는 못했지만,
// 실제로는 없는 값을 변수에 할당하게 되어 js에 오류가 된다.
