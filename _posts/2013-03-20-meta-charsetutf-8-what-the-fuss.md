---
layout: post
title: "meta charset='utf 8' what the fuss?"
description: ""
category: 
tags: []
image: "html"
---
{% include JB/setup %}
<p>
I have seen html developers writing below piece of code in the head tag of the html document.
</p>
<pre>
&lt;meta charset='utf-8'&gt;

		OR

&lt;meta http-equiv='Content-Type' content='text/html; charset=utf-8'&gt;
</pre>

<hr>
<p>
	What does <code>charset='utf-8'</code> mean? What if this tag is ommited from the document?
</p>

<blockquote>
Charset is used to specify character encoding.
</blockquote>

<!-- more -->

<p>
Lets go to the basics, a text is a collection of characters and its stored in the computer as bytes.
When we save anything to our computer it exists as bytes. Characters are represented by numbers and stored in sequence of bytes. Sometimes more than one byte is used to represent a single character.
</p>

<p>
	Character encoding governs the way these bytes will be converted back to characters.<br/>
	<h4>
	 What is character encoding? </h4>
	<div class="alert alert-info">Each characters is represented by a number called a code point, and code point are stored in the memory in one or more bytes. Character encoding is a mapping between the bytes representing the code points and the characters. Its a key to interpret the data stored in bytes.

	Lot of character set and character encoding exists, which defines different ways of mapping bytes to characters. For example: a code point of 97 point to A in one character encoding, the same value may point to a different character by different character encoding. 
</div>
</p>

<p>
Now what happens when we omit the encoding declaration? When a developer miss the meta tag declaring the char encoding, then the char encoding of the content is left to be interpreted by the browser. 
</p>
Have you ever noticed garbled characters on a web page? See the pic below.

<p>
	<img src="/garbled-text.png" alt="garbled-text"/>
</p>

<p>
So the absence of character may lead garbled text compromising on readability and also on search engine(<code>SEO</code>) failing to make sense of the text and will not display the content in search result
</p>

<p>
One more important thing, <code>"Fonts"</code> are nothing but representation of characters in symbolic form. A font is a collection of glyph definations, defining shapes for characters. 
</p>

<p>
Once the bytes are interpreted as a character via a character encoding, the application looks for fonts which can be used to display these characters. If the encoding is wrong then the shape used to denote that character will be wrong.
</p>

<p>
If a font does not have a glyph of a particular character, it may look into other fonts and display wrong info or a square box, question mark or any other character.
</p>

<h4>Browser's Role</h4>
<p>
Browsers identifies the character encoding of a document via a algorithm. In absence of the character encoding declaration, it may calculate the character encoding incorrectly and may render the page incorrectly with garbled characters.
</p>

<p>
Specifying the character encoding speeds up a webpage rendering as browser does not have tp calculate the encoding and saves time.
</p>

<h4>Different ways of specifying character encodings</h4>

Character encoding can be specified by meta tags specified above in the article or they can be set by the server.

In php it can be done using the header function like this
<pre>
header('Content-type: text/html; charset=utf-8');
</pre>

In python:
<pre>
print "Content-Type: text/html; charset=utf-8\n\n";
</pre>

In JSP:
<pre>
&lt;%@ page contentType="text/html; charset=UTF-8" %&gt;
</pre>

In XML:
<pre>
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
</pre>

<br/>
<h4>Apache Sever configuration</h4>
It can also be configured in Apache server, via <code>.htaccess</code> file. Just add the following like to the file

<pre>
AddCharset UTF-8 .html
</pre>

<p>
We need to configure our text editors to save data in whichever encoding we want out data to be in. For sublime it can be done like image below.
</p>
<br/>
<img src="/encoding-pref.png" alt="encoding pref"/>

<hr>

<h4>More Information</h4>
<ul class="unstyled">
	<li><a href="http://www.htmlbasictutor.ca/character-encoding.htm">HtmlBasicTotor</a></li>
	<li><a href="http://htmlpurifier.org/docs/enduser-utf8.html#fixcharset-server-htaccess">Secret of Character Encoding</a></li>
</ul>	


