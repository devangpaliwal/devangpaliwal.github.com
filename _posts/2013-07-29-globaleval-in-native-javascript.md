---
layout: post
title: "$.globalEval in native javascript"
description: ""
category: 
tags: []
---
{% include JB/setup %}
<p>
<code>eval</code> allows developers to execute code and create variables in the scope in which it is executed.
For Example:
</p>
<pre>
function evalExec(){
	eval('var a=10;');
}
evalExec();
</pre>	
<!-- more -->

<p>
When we execute <code>evalExec</code> function <code>a</code> variable is created inside evalExec function's scope.
</p>	
<hr>

<h4>What do we do when we want the code to be evaluated in the global scope? </h4>
<p>jQuery provides a $.globalEval function which executes the code in global scope. If we want to achieve same thing via javascript, we can do it like this - </p>

<pre>
function globalEvalExec(){
	window.eval.call(window,'var a=10;');
}
globalEvalExec();
</pre>	

<p>
This creates a variable <code>a</code> in the global scope and it is accessible via <code>window.a</code>
</p>


<h4>More Information</h4>

<ul class="unstyled">
<li>
	<a target="_blank" href="http://api.jquery.com/jQuery.globalEval/">$.globalEval</a>
</li>
</ul>	
<!-- 
globalEval vs eval

http://stackoverflow.com/questions/7921851/jquery-globaleval-function
http://api.jquery.com/jQuery.globalEval/

http://www.blog.highub.com/javascript/decoding-jquery-evaluates-a-script-in-a-global-context/

http://api.jquery.com/jQuery.ajax/


===============================================
dynamic script vs $.ajax({dataType:'script'})
-->




