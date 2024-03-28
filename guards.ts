function selectDeliveryAddresses(
	addressOrIndex: unknown,
	address: string[]
): string {
	if (typeof addressOrIndex === "number" && addressOrIndex < address.length) {
		return address[addressOrIndex];
	} else if (typeof addressOrIndex === "string") {
		return addressOrIndex;
	}
	return "";
}
