export async function load() {
	try {
		const response = await fetch(`http://localhost:3000/books/`);

		if (response.ok) {
			const data = await response.json();
			return {
				books: data,
				categories: ['lol','lol2']
			};
		} else {
			return { books: [] };
		}
	} catch (error) {
		console.error('Failed to fetch data:', error);
		return { books: [] };
	}
}
