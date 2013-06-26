---
layout: post
title: "Issue with onbeforeunload on IE"
description: ""
category: 
tags: []
---
{% include JB/setup %}

<h4>What is onbeforeunload?</h4>
<p>Accourding to MDN docs its an event which fires when a page is about to be unloaded. This event is cancelable and is presented as a modal box to the user. Here is the image of the modal box shown by jsfiddle.net when someone tries to navigate away.</p>
<!-- more -->
<br>
<p style="text-align:center;">
	<img  src="/images/onbeforeunload.png">
</p>
<br>
<h4>How to we assign a handler to onbeforeunload event?</h4>
<p> Attaching an event handler to the onbeforeunload event is dead simple. Here's the code. </p>
<pre>
window.onbeforeunload=function(){
	return "Make sure you have saved everything before leaving this page.";
}
</pre>

<p>This code will show the message in the modal box presented by the browser.</p>
<br><br>
<h4>What is the problem on IE?</h4>
<p> Suppose we have a event handler attached for onbeforeunload event and we also have links on our page which looks something like the code below.</p>
<pre>
&lt;a href="javascript:void(0)" onclick="save();"&gt;Save&lt;/a&gt;
</pre>

<p>IE invokes the onbeforeunload handler before even executing our code in save function. Its a bit wired as this does not happen in other browsers like Chrome,FF,Safari. </p>
<br/><br/>
<h4>Solution</h4>

<p>Workaround to this problem can be change the a tags to span tags and make your code look like this.</p>
<pre>
	&lt;span class="linkposer" onclick="save();"&gt;Save&lt;/span&gt;
</pre>
<p> We can style our class that it looks likes a Link with text-decoration, color and cursor.</p>
<br>
<h4>More Information</h4>

<ul class="unstyled">
<li>
	<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/window.onbeforeunload">onbeforeunload</a>
</li>
</ul>	

