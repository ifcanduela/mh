export function getSortedWeaknesses(weaknesses: Record<string, number>) {
	const result = ["fire", "water", "thunder", "ice", "dragon"].map(
		(element) => {
			return {
				label: element,
				value: weaknesses[element],
			}
		},
	)

	result.sort((a, b) => b.value - a.value)

	return result
}
