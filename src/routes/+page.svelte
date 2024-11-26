<script>
	let {data} = $props();
</script>

<div class="container">
	<header class="header">
		<section class="logo-section">
			<img src="/favicon.png" alt="Library Logo" class="logo">
		</section>
		<h1 class="library-title">Library</h1>
		<p class="welcome-message">Welcome to our online library. Explore a wide range of books across various categories.</p>
	</header>

	<section class="categories">
		<h2>Categories</h2>
		<ul class="category-list">
			{#each data.categories as category}
				<li class="category-item">
					<a href="#" class="category-link">{category}</a>
				</li>
			{/each}
		</ul>
	</section>

	<section class="book-section">
		<h2 class="book-section-title">Featured Books</h2>
		<ul class="book-list">
			{#each data.books as book}
				<li class="book-card">
					<!-- Link to the detailed page of each book -->
					<a href={`/books/${book.id}`} class="book-link">
						<h2 class="book-title">{book.title}</h2>
						<p class="book-description">{book.description}</p>
						<span class="book-author">by {book.author}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<footer class="footer">
		<p>&copy; 2024 Library. All Rights Reserved.</p>
	</footer>
</div>

<style>
    /* General styling */
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: linear-gradient(135deg, #f1f1f1, #e4e4e4);
    }

    .container {
				top: 128px;
        width: 80%;
        max-width: 1200px;
        margin: auto;
        padding: 40px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    /* Header Section */
    .header {
        text-align: center;
        margin-bottom: 30px;
    }

    .logo-section {
        text-align: center;
        margin-bottom: 30px;
    }

    .logo {
        width: 128px;
        height: auto;
    }

    .library-title {
        font-size: 3rem;
        color: #333;
        margin-bottom: 10px;
        font-weight: 700;
        background: linear-gradient(to right, #5f6fff, #7b7dfe);
        -webkit-background-clip: text;
        color: transparent;
    }

    .welcome-message {
        font-size: 1.2rem;
        color: #666;
        margin-top: 0;
    }

    /* Categories Section */
    .categories {
        margin-bottom: 30px;
    }

    .categories h2 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 20px;
        font-weight: 600;
    }

    .category-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    .category-item {
        background-color: #68bcf1;
        border-radius: 25px;
        padding: 10px 20px;
        font-size: 1.2rem;
        transition: transform 0.3s ease;
    }

    .category-item:hover {
        transform: scale(1.1);
    }

    .category-link {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }

    .category-link:hover {
        text-decoration: underline;
    }

    /* Book Section */
    .book-section {
        margin-bottom: 40px;
    }

    .book-section-title {
        font-size: 2.2rem;
        color: #333;
        margin-bottom: 20px;
        font-weight: 600;
    }

    .book-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
    }

    .book-card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        padding: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        cursor: pointer;
    }

    .book-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }

    .book-title {
        font-size: 1.7rem;
        color: #333;
        margin-bottom: 15px;
        font-weight: 700;
    }

    .book-description {
        font-size: 1.1rem;
        color: #555;
        margin-bottom: 15px;
        line-height: 1.6;
    }

    .book-author {
        font-size: 1.1rem;
        color: #777;
        font-style: italic;
    }

    .book-link {
        color: inherit;
        text-decoration: none;
        display: block;
    }

    /* Footer Section */
    .footer {
        text-align: center;
        margin-top: 40px;
        font-size: 0.9rem;
        color: #777;
    }

    /* Responsive Styling */
    @media (max-width: 768px) {
        .library-title {
            font-size: 2.5rem;
        }

        .book-list {
            gap: 20px;
        }

        .book-card {
            padding: 15px;
        }

        .book-title {
            font-size: 1.5rem;
        }

        .book-description {
            font-size: 1rem;
        }

        .book-author {
            font-size: 1rem;
        }
    }
</style>
