<h2><a href="https://leetcode.com/problems/books-with-null-ratings">Books with NULL Ratings</a></h2> <img src='https://img.shields.io/badge/Difficulty-Easy-brightgreen' alt='Difficulty: Easy' /><hr><p>Table: <code>books</code></p>

<pre>
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| book_id        | int     |
| title          | varchar |
| author         | varchar |
| published_year | int     |
| rating         | decimal |
+----------------+---------+
book_id is the unique key for this table.
Each row of this table contains information about a book including its unique ID, title, author, publication year, and rating.
rating can be NULL, indicating that the book hasn&#39;t been rated yet.
</pre>

<p>Write a solution to find all books that have not been rated yet (i.e., have a <strong>NULL</strong> rating).</p>

<p>Return <em>the result table</em> <em>ordered by</em> <code>book_id</code> in <strong>ascending</strong> order.</p>

<p>The result format is in the following example.</p>

<p>&nbsp;</p>
<p><strong class="example">Example:</strong></p>

<div class="example-block">
<p><strong>Input:</strong></p>

<p>books table:</p>

<pre class="example-io">
+---------+------------------------+------------------+----------------+--------+
| book_id | title                  | author           | published_year | rating |
+---------+------------------------+------------------+----------------+--------+
| 1       | The Great Gatsby       | F. Scott         | 1925           | 4.5    |
| 2       | To Kill a Mockingbird  | Harper Lee       | 1960           | NULL   |
| 3       | Pride and Prejudice    | Jane Austen      | 1813           | 4.8    |
| 4       | The Catcher in the Rye | J.D. Salinger    | 1951           | NULL   |
| 5       | Animal Farm            | George Orwell    | 1945           | 4.2    |
| 6       | Lord of the Flies      | William Golding  | 1954           | NULL   |
+---------+------------------------+------------------+----------------+--------+
</pre>

<p><strong>Output:</strong></p>

<pre class="example-io">
+---------+------------------------+------------------+----------------+
| book_id | title                  | author           | published_year |
+---------+------------------------+------------------+----------------+
| 2       | To Kill a Mockingbird  | Harper Lee       | 1960           |
| 4       | The Catcher in the Rye | J.D. Salinger    | 1951           |
| 6       | Lord of the Flies      | William Golding  | 1954           |
+---------+------------------------+------------------+----------------+
</pre>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The books with book_id 2, 4, and 6 have NULL ratings.</li>
	<li>These books are included in the result table.</li>
	<li>The other books (book_id 1, 3, and 5) have ratings and are not included.</li>
</ul>
The result is ordered by book_id in ascending order</div>
