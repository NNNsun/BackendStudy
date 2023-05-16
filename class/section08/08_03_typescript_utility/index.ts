interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial type
type a = Partial<IProfile>;

// 2. Required type
type b = Required<IProfile>;

// 3. Pick type
type c = Pick<IProfile, "name" | "age">;

// 4. Omit type
type d = Omit<IProfile, "school">;

// 5. Record type
type e = "철수" | "맹구" | "나미리"; // Union type
let child1: e = "철수"; // 철수 맹구, 나미리 됨
let child2: string = "사과"; // 문자열 아무거나

type f = Record<e, IProfile>; // Record type, <key: e, value: IProfile>

// 6. Object의 key들로 Union type 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" |" hobby"
let myprofile: ggg = "hobby";

// 7. type vs interface => interface는 선언병합 가능
interface IProfile {
  candy: number; // 선언병합으로 추가됨
}
// 8. 배운 것 응용
let profile: Partial<IProfile> = {
  candy: 10,
};
