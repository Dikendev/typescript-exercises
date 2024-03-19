export {};

interface Animal {
	live(): void;
}

interface Dog extends Animal {
	woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
	id: number;
}

interface NameLabel {
	name: string;
}

type NameOrId<T extends number | string> = T extends number
	? IdLabel
	: NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
	throw "unimplemented";
}

let a = createLabel("TypeScript");

let b = createLabel(2);

let c = createLabel(Math.random() ? "hello" : 42);
