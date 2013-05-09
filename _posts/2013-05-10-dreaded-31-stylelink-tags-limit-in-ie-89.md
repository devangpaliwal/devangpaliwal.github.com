---
layout: post
title: "Dreaded 31 style/link tags limit in IE 8/9"
description: ""
category: 
tags: []
image: "css"
---
{% include JB/setup %}
<p>
I lost lot of hairs while debugging a rich webpage in IE 9, by rich i mean having lot of js and css. In <code>development</code> mode,  the scripts and css are not minified and combined into a single js, css file. Yeah, so my page had around 35 to 40 links and style tags. 
</p>
<!-- more -->
<p>
I tested in chrome/FF and things worked like charm, but as soon as i opened the page on IE, i was surprised to see some portion of the page was unstyled. I kept on wondering/debugging to figure out why it was happening? <br/>After 30-40 minutes of all sorts of debugging including brute-force approach, i found out what i call is <code>"Dreaded 31 link/style tags limit in IE 8/9"</code>.
</p>
<h3>What is it?</h3>
<blockquote>IE 8/9 has a limitation due to which it only allows 31 stylesheets (link/style) tags in a page. If you have more tags than 31 then IE silently ignores all the rules included in those tags. 
</blockquote>
<h4>Workaround</h4>
<p>We can workaround the issue by grouping css files using the @import method. <code>@import</code>  allows us to include external stylesheets in our document.
</p>

<pre>
&lt;style type="text/css"&gt;
  @import url("A.css");
  @import url "B.css";
&lt;/style&gt;
</pre>


<h4>Breather</h4>
<p>Fortunately IE-10 does not have this issue and it allows developers to use as many link tags as they want.</p>

<h4>More Information</h4>
<ul class="unstyled">
	<li><a href="http://blogs.telerik.com/blogs/posts/10-05-03/internet-explorer-css-limits.aspx">IE 8/9 Limitation</a></li>
</ul>	
