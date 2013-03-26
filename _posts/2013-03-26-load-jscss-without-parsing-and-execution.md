---
layout: post
title: "Load js/css without parsing and execution"
description: ""
category: 
tags: []
---
{% include JB/setup %}
<p>
Usecase: Lets say we have a workflow on our website which follows a particular path, for example after signup we ask user to complete his user profile. In order to make the complete profile page experience faster we can download the required resources of the profile page at signup page itself. 
</p>

<p>
Note that i said just <code>download, not parse and execute</code>. By doing this we download all the javascripts,css and images of the profile page while the user is filling up the registration details.
</p>
<!-- more -->

<h4>Concept</h4> 
<p>In HTML the &lt;object&gt; is used to embed another object into the document. For example an external flash file(swf object) or another html doc. As an example the below code will embed aboutme.html into a html document.</p>
<pre>
&lt;object data="/static/scripts/aboutme.html" width="150" height="200">&lt;/object&gt;
</pre>	

The data attribute points to a resource residing on the server.

When browser encounters this tag, it starts downloading the resource specified in the data attribute.

<h4>Technique</h4>

<pre>
var futureLoader=function(url){
	var objElem=document.createElement("object");
	objElem.data=url;
	objElem.width=0;
	objElem.height=0;
	document.body.appendChild(objElem);
};

var resources = [
	"static/scripts/userprofile.js",
	"static/iamges/dummy-user.png",
	"static/scripts/userprofile.css"
];

for(var i=resources.length-1; i&lt;=0; i--){
	futureLoader(resources[i]);
};

</pre>

<p>
	Here we have a resource array of URLs pointing to them. We loop through the array and create an object tag for each URL and append it to the body tag. It will trigger browser to download all the resources specified in the array.
	In futureLoader function setting the heigh,width to 0 is essential as we do not want the element to be shown to the user.
	<p>
	This technique can be used for for css as well as images.
</p>
</p>	

<p>
Supported by non-ie browsers. For IE we need to rely on <a href="http://www.javascriptturnsmeon.com/image-beacons/">Image becon technique</a>.
</p>


<h4>Advantages</h4>
<p> 
Preloading resources for the next page makes them available in cache. When the next page request the resources the browser serves them from cache and it reduces the page load time.
</p>

<h4>More Information</h4>
<ul class="unstyled">
	<li><a href="http://www.quackit.com/html_5/tags/html_object_tag.cfm">Object Tag</a></li>
	<li><a href="http://www.javascriptturnsmeon.com/image-beacons/">Image Beacon</a></li>
</ul>	


