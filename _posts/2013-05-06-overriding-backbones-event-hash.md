---
layout: post
title: "Overriding backbone's event hash"
description: ""
category: 
tags: []
image: "backbone"
---
{% include JB/setup %}

Backbone provides a declarative way of binding events to the respective dom of a view object. For example:

<pre>
events:{
	".close click":"closeMe",
	".delete click":"deleteMe"
}
</pre>

<p>
	All events listed in the event's hash will be attached to the dom and corresponding function will be called when listed event happens on selected elements.
</p>
<!-- more -->
<p>
	Sometimes we run into scenerios where we need to overwrite the eventhash. For example: Lets say we have a button which on clicked on desktop calls closeMe function and on iPad when clicked it should call a function showTooltip, but both should now happen at the same time.
</p>

<p> One of the ways of achieving it can be: </p>

<pre>

events:function(){
	
	var eventHash={};
	var tab=navigator.userAgent.match(/iPad/);
	if(tab){
		_.extend(eventHash,{".close tap":"showTooltip"});
	}else{
		_.extend(eventHash,{".close click":"closeMe"});
	}
	return eventHash;
}
	
</pre>

<p>
	According to <a href="http://backbonejs.org/#View" target="_blank">Backbone.js</a> documentation
	
	<blockquote>The events property may also be defined as a function that returns an events hash, to make it easier to programmatically define your events, as well as inherit them from parent views.</blockquote>

	Here we utilize the above and define events as a <code>function</code> which returns a event hash. 
	<p>We can create a custom event object in that function and return that. This opens up a great deal of flexibility as we can manipulate the event hash programatically.</p>
</p>

<p>
	Any other smart way of doing it?
</p>


<h4>More Information</h4>
<ul class="unstyled">
	<li><a href="http://backbonejs.org/#View">Backbone View</a></li>
</ul>	


