---
layout: post
title: "Date issue in ie8"
description: ""
category: 
tags: []
---
{% include JB/setup %}

<p> I was left stunned when I encountered this wierd IE8 issue. My flow involved taking input from the user via a calender and convert that input into date. I used a datepicker which returned me date string in the format <code>yyyy-mm-dd</code>. 
</p>
<p>
	I took the values selected by user and pass it ot the Date constructor in javascirpt and it worked in FF, Chrome, IE8+. But as soon as i tried the same in IE8 it <code>Bombed</code> and left me wondering why?
</p>
<!-- more -->
<p>Here's the code:</p>
<pre>
var dt=new Date("2013-05-28");
</pre>
<br><br>
<h4>What really happend?</h4>
<p>
	MSDN documentation says:
<blockquote>
	ISO Date Format is not supported in Internet Explorer 8 standards mode and Quirks mode.
</blockquote>

<strong>ISO format is YYYY-MM-DDTHH:mm:ss.sssZ</strong>
</p>
<br><br>
<h4>Solution</h4>
<p>
Solution 1: To allow IE8 to be able to construct date we need to replace all <code>-</code> with <code>/</code>.
</p>	
<pre>
var d="2013-05-28";
d=d.replace(/-/g,"/");
var dt=new Date(d);
</pre>	
<p>
Solution 2:	We can also do something like this.
</p>
<pre>
var d="2013-05-28";
var dt=new Date();
dt.setYear(d.substring(0,4));
dt.setMonth(d.substring(5,7),d.substring(8,10));
</pre>	
<br><br>
<h4>More Information</h4>
<ul class="unstyled">
	<li><a target="_blank" href="http://msdn.microsoft.com/en-us/library/ie/ff743760(v=vs.94).aspx">MSDN : IE8 date issue</a></li>
</ul>	
