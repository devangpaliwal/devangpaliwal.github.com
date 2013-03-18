---
layout: page
title: 
tagline:
---
{% include JB/setup %}

<style>
.card{     
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.1);
    margin: 40px  auto;
    padding: 50px 20px 20px;
    width: 464px;
    overflow: auto;
}
.card .picture{
    border: 0px solid white;
    border-radius: 10px;
    float: left;
    height: 130px;
    width: 130px;
}
.card .heading-container{
    float: left;
    margin-bottom: 20px;
    margin-left: 13px;
}
.card .input-block{
        background-color: #F3F2F0;
    border-radius: 3px 3px 3px 3px;
    clear: both;
    color: #5C5858;
    font-size: 20px;
    height: 27px;
    line-height: 30px;
    margin-top: 4px;
    padding: 10px 20px;
}
.card .desc{
    color: #5C5857;
    font-size: 23px;
    font-weight: normal;
    height: 29px;
    line-height: 29px;
    width: 315px;
}

</style>
<div class="card">
    <img src="devang.jpg" class="picture"/>
    <div class="heading-container">
        <div class="desc">Devang Paliwal</div>
        <div class="desc">UI Guy @Mygola Inc</div>
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
