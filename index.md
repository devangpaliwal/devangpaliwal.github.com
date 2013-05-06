---
layout: page
title: 
tagline:
---
{% include JB/setup %}


<div class="cpt top">Concepts &nbsp; Practices</div>
<div class="cpt center">&amp;</div>
<div class="cpt center">Tips</div>



<div class="card">
    <a class="logo" href="/">
      <span>
        <img src="devang.jpg" class="picture img-rounded"/>
       </span> 
  </a>
    <div class="heading-container">
        <div class="desc"><span class="text-warning">Devang Paliwal</span></div>
        <div class="desc">Frontend Engineer</div>
        <div class="desc"><a target="_blank" href="http://next.mygola.com">Mygola Inc</a></div>
    </div>  
</div>



<ul class="unstyled">
  {% for post in site.posts %}
    <div class="post-info">
  <li class="post-head">
    <a class="post-title" href="{{ post.url }}">
        {{ post.title }}
    </a>
    <span class="pull-right"> {{post.date | date: "%d %B %Y"}} </span>
    
  </li>
  </br>
  <div class="clearfix"> 
      <div class="pull-left text-center" style="width:200px;height:200px;text-align:center;">
          {% if !post.image %}
              <img style="border-radius:140px;" alt="post.image" src="/images/{{post.image }}.png">  
          {% else %}   
            <img style="border-radius:140px;" src="/images/javascript.png"> 
          {% endif %}   
      </div>
      <div class="pull-right" style="width:480px;">  
      {{ post.content | split: '<!-- more -->' | first }} 
      </div>
  </div>  
    <a class="btn btn-info read-more" href="{{ post.url}}">Read More ... </a>
    </div>
  {% endfor %}
</ul>
