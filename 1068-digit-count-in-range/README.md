<h2><a href="https://leetcode.com/problems/digit-count-in-range">Digit Count in Range</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>Given a single-digit integer <code>d</code> and two integers <code>low</code> and <code>high</code>, return <em>the number of times that </em><code>d</code><em> occurs as a digit in all integers in the inclusive range </em><code>[low, high]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> d = 1, low = 1, high = 13
<strong>Output:</strong> 6
<strong>Explanation:</strong> The digit d = 1 occurs 6 times in 1, 10, 11, 12, 13.
Note that the digit d = 1 occurs twice in the number 11.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> d = 3, low = 100, high = 250
<strong>Output:</strong> 35
<strong>Explanation:</strong> The digit d = 3 occurs 35 times in 103,113,123,130,131,...,238,239,243.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= d &lt;= 9</code></li>
	<li><code>1 &lt;= low &lt;= high &lt;= 2 * 10<sup>8</sup></code></li>
</ul>
