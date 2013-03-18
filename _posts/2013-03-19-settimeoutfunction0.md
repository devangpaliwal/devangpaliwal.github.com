---
layout: post
title: "setTimeout(function(){},0)"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Sometimes i needed to do it in my code. I wanted to understand how did this solved my issue and why?:
<pre>
var callMeLater=function(){
}
setTimeout(callMeLater,0);
</pre>


<p>Browser is responsible for so many thigs like loading files, interpreting html, rendering html, executing javascript. Browser uses multithreading to do its tasks in parallel. One thread handles rendering of html, other takes care of downloading js,css and other files. 
</p>

<p>
When we ask javascript to build html and add it to the Dom, we may think that it happens synchronously as javascript is single threaded, but wait a second it does not happen synchronously. The task is generating html and appending to html is submitted to browsers event queue, which already has lot of other tasks. Browser keeps on executing the tasks on the event queue and finally renders the newly added element.
</p>
<p>
When we setTimeout with a function and timeinterval of 0, we are putting our function in the event queue, so as browser will execute our function as soon as it finishes the other tasks in the queue above our function. 
</p>

####Applicability/scenerio : 


I encounted this when iw as building a backbone widget, it had lot of subviews in it and the top container had a tinyscrollbar attached to it. Read tinyscrollbar here. I was calling the tinyscrollbar function just after i called render for all the subviews and to my surprise the tinyscrollbar was not applied correctly as it could not calculate the height of the subviews.

I added the below piece of code and it worked for me. :)<br> 

<pre>
var thisOBj=this;
setTimeout(function(){
thisObj.$el.find(".tinyscrollbar").tinyscrollbar()
},0)
</pre>    

Simply stated, it allows up to do a certain task only after the current eventloop is finished

Take a look at this [interesting artical](http://snook.ca/archives/javascript/settimeout%5Fsolve%5Fdomcontentloaded) about using this technique to solve DomcontentReadiness.
