---
layout: post
title: "Web Storage"
description: ""
category: 
tags: []
---
{% include JB/setup %}
<p>
W3C has defined a webstorage spec which deals with the task of storing data on the web clients. Prior to this spec, developers used to store key/value pairs in cookies. 
</p>
<p>	
Cookies are good but they have few drawbacks like the maximum amount of data(4kb) per domain and all cookies are sent to server along with each request adding to request overhead.
</p>
<p>
Webstorage solves this problem by allowing storage size of minimum 5mb per domain, also  the data stored in the storage is not passed to the server with every request.
</p>
<!-- more -->

All major browsers picked up the spec and implemented the Storage interface.

Storage Interface from the spec:
<pre>
interface Storage {
  DOMString key(unsigned long index);
  getter DOMString getItem(DOMString key);
  setter creator void setItem(DOMString key, DOMString value);
  deleter void removeItem(DOMString key);
  void clear();
  readonly attribute unsigned long length;
};
</pre>

<h4>Support</h4>
The WebStorage is supported by <span class="label label-info">IE8+</span>, <span class="label label-info">Chrome 5</span>, <span class="label label-info">Firefox 3.5</span>, <span class="label label-info">Safari 4</span>, <span class="label label-info">Opera 10</span>.

There are two use cases for storing data on the client.

1] Storing data for a sesssion (Session Storage) <br/>
2] Storing data utill it is removed by develper or user by deleting the data manually. (Local Storage)

<h4>Session Storage Object</h4>
<p>
This stores data for a session, <span class="label label-inverse">untill the user closes the browser/tab</span>. The data is available till the window is not closed. It allows separate instance of same application to run in different windows independently. The data is lost once we close the browser/window. The data is available only from the page which stored the data.

The session storage object is available under the window object in javascript.
</p>

<h4>Local Storage Object</h4>
<p>
It allows the data to be <span class="label label-inverse">presisted even after the browser is closed</span>. Its available to all the scripts loaded from the same domain. The data remains there until some script is used to remove it.

The localStorage object is available under the window object.
</p>
Both local and session storage object implement the Storage interface and have same methods. They differ in the scope and lifetime of the data.

<h4>Storage Event</h4>
<p>
An storage event is fired on the window object when something changes in any of the storage objects. Method like <b><i>set</i></b>, <b><i>clear</i></b>, <b><i>remove</i></b> can trigger storage event.
</p>
From the spec:
<pre>
interface StorageEvent : Event {
  readonly attribute DOMString key;
  readonly attribute DOMString? oldValue;
  readonly attribute DOMString? newValue;
  readonly attribute DOMString url;
  readonly attribute Storage? storageArea;
};
</pre>

Storage event has following attributes:
<ul class="unstyled">
	<li><strong>key</strong> - the key which was added, removed or modified</li>
	<li><strong>oldValue</strong>: old value</li>
	<li><strong>newValue</strong>: new value</li>
	<li><strong>url</strong>: the url of the page which triggered the change </li>
	<li><strong>storageArea</strong>: localStorage/sessionStorage</li>
</ul>	

<p>
Storage Event can be used to keep multiple window/tabs in sync. For example if we change a property in localStorage the storage event will fired on all the windows which have the site open. So the change in one window can be propogated to other windows. 
</p>

<p>

While reseaching the possibility of using persistent for out product at <a href="http://next.mygola.com">Mygola</a>, i came across <strong><a href="http://amplifyjs.com/api/store/">Amplifyjs</a></strong>.
</p>

<div class="alert alert-info">Its a wrapper for various client side persistent storage systems.

It allows developers to use all the latest technologies in the mordern browsers and gracefully degrading for browsers which does not support them.


It allows developer to specify storage type to use while storing data. If no storage type is specified then it goes through all the available storage types available in the browser and choose whichever it finds first. 
</div>

<h4>Storage types</h4>
<ol>
	<li>localStorage</li>
	<li>sessionStorage</li>
	<li>globalStorage</li>
	<li>userData</li>
	<li>memory</li>
</ol>	


<p>
	Jsfiddle regarding the usage of Amplify to store data can be found at <a href="http://amplifyjs.com/api/store/">here</a>
</p>


<h4>How to see whats there in Storage Objects</h4>
<ol>
	<li>Firefox: Firebug -> Dom tab</li>
	<li>Google Chrome: Developer Tools -> Resources Tab</li>
	<li>Opera: Storage Tab in dragonfly</li>
</ol>

For browsers which does not support Web Storage, we have an option to use Amplify.js or other polyfills listed
at <a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills#web-storage-localstorage-and-sessionstorage">Modernizr wiki</a>.

<h4>More Information</h4>
<ul class="unstyled">
	<li><a href="http://www.w3.org/TR/webstorage/">WebStorage</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/DOM/Storage">Mozilla Dom Storage</a></li>
	<li><a href="http://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage">Treehouse</a></li>
</ul>	

