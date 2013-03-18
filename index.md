---
layout: page
title: 
tagline:
---
{% include JB/setup %}
<div class="card">
    <img src="devang.jpg" class="picture img-rounded"/>
    <div class="heading-container">
        <div class="desc"><span class="text-warning">Devang Paliwal</span></div>
        <div class="desc">Frontend Engineer</div>
        <div class="desc"><a target="_blank" href="http://next.mygola.com">Mygola Inc</a></div>
    </div>  
</div>



<ul class="unstyled">
  {% for post in site.posts %}
    <div class="post-info">
  <li>
    <a class="post-title" href="{{ post.url }}">
        {{ post.title }}
    </a>
    <span class="pull-right"> {{post.date | date: "%d %B %Y"}} </span>
    
  </li>
  </br> <em>{{ post.content | split: '<!-- more -->' | first }} </em>
  <a href="{{ post.url}}">Read More ... </a>
    </div>
  {% endfor %}
</ul>
