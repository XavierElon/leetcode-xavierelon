<h2><a href="https://leetcode.com/problems/minimum-runes-to-add-to-cast-spell">Minimum Runes to Add to Cast Spell</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>Alice has just graduated from wizard school, and wishes to cast a magic spell to celebrate. The magic spell contains certain <strong>focus points</strong> where magic needs to be concentrated, and some of these focus points contain <strong>magic crystals</strong> which serve as the spell&#39;s energy source. Focus points can be linked through <strong>directed runes</strong>, which channel magic flow from one focus point to another.</p>

<p>You are given a integer <code>n</code> denoting the <em>number</em> of focus points and an array of integers <code>crystals</code> where <code>crystals[i]</code> indicates a focus point which holds a magic crystal. You are also given two integer arrays <code>flowFrom</code> and <code>flowTo</code>, which represent the existing <strong>directed runes</strong>. The <code>i<sup>th</sup></code> rune allows magic to freely flow from focus point <code>flowFrom[i]</code> to focus point <code>flowTo[i]</code>.</p>

<p>You need to find the number of directed runes Alice must add to her spell, such that <em>each</em> focus point either:</p>

<ul>
	<li><strong>Contains</strong> a magic crystal.</li>
	<li><strong>Receives</strong> magic flow <em>from</em> another focus point.</li>
</ul>

<p>Return the <strong>minimum</strong> number of directed runes that she should add.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 6, crystals = [0], flowFrom = [0,1,2,3], flowTo = [1,2,3,0]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong>&nbsp;</p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/11/08/runesexample0.png" style="width: 250px; height: 252px;" /></p>

<p>Add two directed runes:</p>

<ul>
	<li>From focus point&nbsp;0 to focus point&nbsp;4.</li>
	<li>From focus point 0 to focus point 5.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 7, crystals = [3,5], flowFrom = [0,1,2,3,5], flowTo = [1,2,0,4,6]</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong>&nbsp;</p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/11/08/runesexample1.png" style="width: 250px; height: 250px;" /></p>

<p>Add a directed rune from focus point 4 to focus point 2.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= crystals.length &lt;= n</code></li>
	<li><code>0 &lt;= crystals[i] &lt;= n - 1</code></li>
	<li><code>1 &lt;= flowFrom.length == flowTo.length &lt;= min(2 * 10<sup>5</sup>, (n * (n - 1)) / 2)</code></li>
	<li><code>0 &lt;= flowFrom[i], flowTo[i] &lt;= n - 1</code></li>
	<li><code>flowFrom[i] != flowTo[i]</code></li>
	<li>All pre-existing directed runes are <strong>distinct</strong>.</li>
</ul>
