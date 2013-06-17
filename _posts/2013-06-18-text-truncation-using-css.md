---
layout: post
title: "text truncation using css"
description: ""
category: 
tags: []
image: "css"
---
{% include JB/setup %}
<p>Ever wondered how to truncate text using only css with no javascript and apply ellipsis (...) at the end of the text.
</p>
<br>
<p>
Here is the solution.
</p>	


<pre>
.ellipse{
	width:240px;
	overflow:hidden;
	white-space:nowrap;
	text-overflow:ellipsis;
}
</pre>	
<!-- more -->
<br><br>
<h3>Explanation</h3>
<p>
	<code>white-space</code> property controls the spaces between words. If the value is set to no wrap, it forces the text to be rendered in a single line.
</p>
<p>
	<code>text-overflow</code> property defines the behaviour of text when it overflows its container. The default behaviour os tp clip the text. The value "ellipsis" renders "..." to show the clipped text. 
</p>
<p>
	Fixed width and overflow hidden is applied to force the text to be clipped.
</p>	
<br><br><br><br>
<h4>More Information</h4>
<ul class="unstyled">
	<li><a target="_blank" href="www.w3schools.com/CSSref/pr_text_white-space.asp">White space</a></li>
	<li><a target="_blank" href="http://www.w3schools.com/cssref/css3_pr_text-overflow.asp">Text Overflow</a></li>
</ul>	
