import Birthday from "./birthday";

export default class Person {
	name: string
	birthday: Birthday

	constructor(name: string, birthday: Birthday) {
		this.name = name;
		this.birthday = birthday;
	}

	compareTo(other: Person): number {
		return this.birthday.compareTo(other.birthday);
	}
}