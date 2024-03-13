//* keyof
type DatePropertyNames = keyof Date;
type DateStringPropertyNames = DatePropertyNames & string;
type DateSymbolPropertyNames = DatePropertyNames & symbol;

//* typeof
async function main() {
	const apiResponse = await Promise.all([
		fetch("https://api.example.com/users"),
		Promise.resolve("Hello!"),
	]);
	type ApiResponseType = typeof apiResponse;
}
