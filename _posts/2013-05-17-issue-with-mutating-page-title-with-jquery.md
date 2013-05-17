---
layout: post
title: "Issue with mutating page title with jQuery"
description: ""
category: 
tags: []
---
{% include JB/setup %}
<p>
If we have to change an element's content using jQuery we can use the <code>html()</code> or <code>text()</code> functions
provided by the library. This works like a charm until we are not dealing with title element in <code>Internet Explorer</code>.
</p>

<p>
Yeah, I was surprised to see IE throwing error when asked to changed the title using jQuery's html() method. My code
</p>
<pre>
$("title").html("Js Blog");
</pre>
<!-- more -->
<span class="label label-info"> This works well in Chrome, Firefox, Safari.</span> 
<br/>
<h4>The Solution</h4>
<p>
So how did i manage to change the title? I used the following code to change the page title. 
</p>
<pre>
document.title="Js Blog";
</pre>
<p>
<code>document.title</code> works well in all the browsers and is THE solution when we want to change the title.
</p>
<p>
Sometimes while using a library we are engrossed into it that don't realize that dom api already have a solution for it which is cross browser compatible.
</p>

<h4>More Information</h4>
<ul class="unstyled">
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/document.title">document.title</a></li>
</ul>	
