---
layout: page
title: 
tagline:
---
{% include JB/setup %}

<ul class="unstyled">
  {% for post in site.posts %}
 
  <li>
    <a class="post-title" href="{{ post.url }}">
        {{ post.title }}
    </a>
    <span class="pull-right"> {{post.date | date: "%d %B %Y"}} </span>
    
  </li>
 
  {% endfor %}
</ul>
