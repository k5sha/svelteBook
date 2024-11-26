export async function load({params}) {
	try {
		const response = await fetch(`http://localhost:3000/books/${params.slug}`);
		if (response.ok) {
			const data = await response.json();
			return {
				book: data,
			};
		} else {
			return { book: {} };
		}
	} catch (error) {
		console.error('Failed to fetch data:', error);
		return { book: {} };
	}
}
