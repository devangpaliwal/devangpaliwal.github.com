---
layout: post
title: "Back button issue with Iframes"
description: ""
category: 
tags: []
---
{% include JB/setup %}

<p>Ever stuck with a problem/issue with <code>browser back button</code> and an <code>iFrame</code> on a webpage? If yes, read on.</p>
<p>Consider a scenerio where we have an iframe inside a webpage. When user clicks any links present inside iframe the iframe's content changes and it displays a new page. </p>
<!-- more -->
<p >As a side effect of clicking the link an entry is created in browser history for that URL. This changes browser behaviour as users will have to click twice to navigate to the previous page.</p> <p> The first back button click will take the iframe to the prev displayed page. The second back button click will take the user to the actual previous page.</p>

<p>
Even if you change the iframe's src with javascript, as in the code shown below. It will create an entry in the browser history.
</p>

<pre>
$("myIframe").attr("src","http://devangpaliwal.com");
</pre>
<p>
	OR
</p>
<pre>
document.getElementById("myIframe").src="http://devangpaliwal.com";
</pre>
<br>
<h3>How to avoid making an entry in the browser history when we change the iframe's src url?</h3>
<p>
If we want to change the src of a iframe without changing the browser history we can take advantage of the <code>location</code> object. We can do something like this -
</p>
<pre>
document.getElementById("myIframe").contentWindow.location.replace="http://abc.com";
</pre>

<p>
Another solution would be to delete the iframe completely and add a new one dynamically with the desired src.
</p>
<br>
<h4>More Information</h4>

<ul class="unstyled">
<li>
	<a target="_blank" href="http://www.w3schools.com/jsref/met_loc_replace.asp">location.replace</a>
</li>
</ul>	


<!-- 
Links inside Iframe adds entry to browser history and back button takes you to the prev clicke link inside iFrame.
Don't inherit parent css.
Don't expand to fit contents


WTF : seamless attribute 
<iframe seamless src="http://parent.com"></iframe>


<base> specifies base URL for all relative URLs
-->