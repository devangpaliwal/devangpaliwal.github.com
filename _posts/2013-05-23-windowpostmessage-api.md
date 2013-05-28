---
layout: post
title: "postMessage API"
description: ""
category: 
tags: ["javascript"]
---
{% include JB/setup %}
<p>
	Think of cross window, cross iframe communication and what comes to mind is <code>postMessage</code> API. This postMessage api  allows windows(iframes) to communicate among themselves. <p>One window can post a message to other message and the other can react to the message upon recieving it. Lets see how it works.</p>
</p>
<br>
<h4>Code in Message Sender window</h4>

<pre>
var window2=window.open("/someurl.html"); 

/* This url can be anything but it should point to page which is the reciever */

window2.postMessage("Hello window 2","http://devangpaliwal.com");
</pre>	
<!-- more -->
<br>
<h4>Explanation</h4>
<p>
	The code above is trying to send message <code>Hello window 2</code> to <code>window2</code> whose domain must be 
	<code>devangpaliwal.com</code>
</p>	
<br>
<h4>Code in Reciever window</h4>

<pre>
/* This code is present in someurl.html */
	
if(!window.attachEvent){
	window.addEventListener("message",function(e){
		console.log("Recieved ",e.data);
	});	
}else{
	window.attachEvent("message",function(){
		console.log("Recieved ",e.data);
	});	
}
</pre>
<br>
<h4>Explanation</h4>
<p>The code above sits in the receiver window and listens to message event. Whenever it gets the message event it prints out a log message in the console.</p>
<br>
<h4>Caution</h4>

<blockquote>
<strong>If you do not expect to receive messages from other sites, do not add any event listeners for message events.</strong>
</blockquote>	
<p>
On the recieving end we should check for the domain from which we get the message. Failing to check that can lead to cross-site scripting attacks. We should also check the syntax of the message recieved.
</p>
<pre>
if(e.origin == "devangpaliwal.com"){
  console.log("I accept the message as it is recieved from devangpaliwal.com");
}
</pre>
<br>
<h4>Browser Support</h4>
<p><code>IE8+</code>, <code>FF</code>, <code>Chrome</code>, <code>Opera</code> and <code>Safari</code></p>
<br>
<a class="demo" href="/demo/postmessage/index.html" target="_blank">Demo</a>

<br>
<h4>More Information</h4>
<ul class="unstyled">
	<li><a href="http://msdn.microsoft.com/en-us/library/ie/cc197015(v=vs.85).aspx">postMessage MSDN</a></li>
	<li><a href="http://ejohn.org/blog/cross-window-messaging/">postMessage - resig</a></li>
	
</ul>	


