---
layout: post
title: "Crossbrowser image rotation"
description: ""
category: 
tags: []
---
{% include JB/setup %}

<p>
Image rotation is a key requirement that any front-end guy encounters while doing a web project. For example:
Lets say we have a slideshow which can be configured to work both <code>horizontally</code> as well as <code>vertically</code>. For navigation we have an image of a arrow pointing to the right.
</p>
<!-- more -->
<p style="text-align:center;">
<img  src="/images/forward.png"/>
</p>
<p>
We can use the same image to produce arrows which points to the <code>left</code>, <code>up</code> and <code>down</code>. We just need to rotate this image to certain angles.
</p>

<p>
CSS3 provides a <code>transform</code> property which allows developers to rotate any dom element to any specified degree.

For example, we can apply 90 deg rotation to pur image via this css rule:
<pre>
img{
	transform: rotate(90deg) 	
}
</pre>

</p>

<p>
All the browsers do not support this yet, so we use the vendor prefixes applied to the property to get the desired roration.

We use the below code to get the same effect across different browsers.

<pre>
img{
	-webkit-transform:rotate(90deg); // chrome
	-moz-transform:rotate(90deg); // Firefox
	-o-transform:rotate(90deg); //Opera	
	filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3); // IE 5.5+
	transform:rotate(90deg);
}
</pre>

</p>

<p>
Internet explorer has a special <code>filter</code> property which can be used to get the desired result.

<pre>
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
</pre>

We can set the rotation property of the BasicImage filter to rotate the image by 0, 90, 180, 270 degrees by supplying values of 0, 1, 2, 3.
</p>

<p>	
The <a href="http://msdn.microsoft.com/en-us/library/ms532972%28VS.85%29.aspx">basic image filter</a> has lots of other properties like grey scale, mirroring etc.
</p>

Have fun with rotation :)

<h4>More Information</h4>
<ul class="unstyled">
	<li><a href="https://developer.mozilla.org/en-US/docs/CSS/transform">CSS Transform</a></li>
</ul>
