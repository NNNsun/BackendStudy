// 1. 문자, 숫자, 불린 기본타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive("철수", 123, true);

//
// 2. Any 타입 == JS
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 100); // any는 모든 type이 가능
  return [arg3, arg2, arg1];
};
const resultAny = getPrimitive("철수", 123, true);

//
// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 100);
  return [arg3, arg2, arg1];
};
const resultUnknown = getUnknown("철수", 123, true);

//
// 4. generic 타입
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const resultGeneric = getGeneric<string, number, boolean>("철수", 123, true);
// ✨ 모든 type을 다 넣을수있고 return type도 알수있다.

//
// 4-2. generic 타입
function getGenericTwo<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const resultGenericTwo = getGenericTwo("철수", 123, true);
// ✨ 모든 type을 다 넣을수있고 return type도 알수있다.

// 4-3. generic 타입
function getGenericTree<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const resultGenericTree = getGenericTree("철수", 123, true);
// ✨ 모든 type을 다 넣을수있고 return type도 알수있다.

// 4-4. generic 타입 -> 제공자 입장에서 사용 -> 어떻게 쓸 지 모르겠지만 넣고싶은 거 다 넣어~
const getGenericFour = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const resultGenericFour = getGenericFour("철수", 123, true);
// ✨ 모든 type을 다 넣을수있고 return type도 알수있다.
