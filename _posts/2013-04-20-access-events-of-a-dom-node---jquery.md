---
layout: post
title: "Access events of a DOM node   jQuery "
description: ""
category: 
tags: []
---
{% include JB/setup %}

<p>
Ever wondered how and where jQuery <code>stores event handlers for a dom node</code> and how we can access all the event handlers ?
<p>jQuery stores event handlers for a dom node in the <span style="text-decoration:underline;">events store</span>. It can be accesses via the <code>data</code> method of the dom node.
</p>
</p>
<!-- more -->
<p>
	Lets look at an example:
<pre>
function clickHandler1(){

}
function clickHandler2(){
	
}
var $body=$("body");

$body.bind("click",clickHandler1);

$body.bind("click",clickHandler2);

console.log($("body").data("events"));

</pre>
</p>

<p>
	The result of the above code is as follows:
	<p>
		<img src="/images/dom-eventhandlers.png">
	</p>

	<h4>What do we conclude?</h4>

	<p>
		The result shows an object having key as <code>click</code> and value as <code>Array</code> of objects which represent each handler. Each handler object has various properties, one of them is handler which points to the function bound to the event. Object also has namespace, tyep etc important properties. 
	</p>	
</p>

<section>
	<h4>Learnings/Tips</h4>
	We have to be careful while binding and unbinding event handlers to a DOM. <br>For example:
<p>
<pre>
$("body").bind("click",function(){
	alert("1");
});
$("body").unbind("click",function(){
	alert("1");
});
</pre>
</p>
	
	<p>
		After executing above an alert will be thrown when we click on body. Why?
	</p>
	<p>
		The reason is jQuery keeps a map of event and event handlers. When we execute the above code, a single event handler is attached to the body node with anonymous function attached to it. When we unbind the anonymous function from the click event, its not the same function we binded. So as its a different function the prev function is not removed and we get an alert when we click on body. 
	</p>	
	<h4> How to fix it?</h4>
	<p>
		We can do something like this
<pre>
function clickHandler(){

}
$("body").bind("click",clickHandler);

$("body").unbind("click",clickHandler);
</pre>
		<p>
			In the above snippet we are binding and unbinding the same function <code>clickHandler</code> and hence it works :)
		</p>
	</p>

</section>

