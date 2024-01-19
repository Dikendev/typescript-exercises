export {};

const language = {
	name: "Typescript",
	age: 8,
	extensions: ["ts", "tsx"],
};

const objectFiltered = pickObject(language, ["age", "extensions"]);
console.log(objectFiltered);

function pickObject<T extends object, K extends keyof T>(
	obj: T,
	keys: K[]
): Pick<T, K> {
	let result = {} as Pick<T, K>;
	for (const key of keys) {
		if (key in obj) {
			result[key] = obj[key];
		}
	}

	return result;
}
