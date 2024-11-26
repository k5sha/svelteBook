<script>
	let { data } = $props();
</script>


<!-- Контейнер с контентом -->
<div class="page-container">
	<!-- Информация о книге -->
	<div class="book-info">
		<h1>{data.book.title}</h1>
		<p>{data.book.description}</p>
		<div class="author">Author: {data.book.author}</div>
		<div class="createdAt">Published on: {data.book.createdAt}</div>
		<button class="btn">Read Now</button>
	</div>

	<!-- Футер -->
	<div class="footer">
		<p>&copy; {new Date().getFullYear()} All rights reserved.</p>
	</div>
</div>


<style>
    /* Общие стили */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #f5f5f5;
        color: #333;
    }

    /* Контейнер, занимающий всю страницу */
    .page-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: url('{data.book.coverImage}') no-repeat center center;
        background-size: cover;
        padding: 20px;
        color: white;
    }

    /* Блок с информацией о книге */
    .book-info {
        background-color: rgba(255, 255, 255, 0.7); /* Полупрозрачный фон */
        border-radius: 15px;
        padding: 30px;
        text-align: center;
        max-width: 800px;
        width: 100%;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 2.5em;
        color: #333;
        margin-bottom: 15px;
    }

    p {
        font-size: 1.2em;
        color: #555;
        margin-bottom: 20px;
        line-height: 1.5;
    }

    .author,
    .createdAt {
        font-size: 1.1em;
        margin-bottom: 10px;
    }

    .author {
        font-weight: bold;
    }

    /* Кнопка */
    .btn {
        background-color: #0a9bdc;
        color: white;
        padding: 15px 30px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1.2em;
        transition: background-color 0.3s ease;
    }

    .btn:hover {
        background-color: #4954da;
    }

    /* Футер */
    .footer {
        position: absolute;
        bottom: 20px;
        text-align: center;
        font-size: 1.1em;
        color: white;
    }

</style>
