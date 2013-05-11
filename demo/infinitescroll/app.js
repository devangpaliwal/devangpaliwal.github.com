var DataCollection = Backbone.Collection.extend({
	url:function(){
		return './result.json';
	},
	parse:function(resp,xhr){
		return resp.results;
	}
});

var ItemView = Backbone.View.extend({
	className:"item",
	render:function(){
		this.$el.html(this.model.get("text"));
		return this;
	}
})

var DataContainerView=Backbone.View.extend({
	subViewArray:[],
	fetching:false,
	id:"dataContainer",
	events:{
		"scroll":"scrollHandler"
	},
	initialize:function(){
		this.collection = new DataCollection();
		this.collection.on("reset",this.populateTweets,this);
		this.collection.fetch();
		this.render();
	},
	scrollHandler:function(){
		//console.log("this.$el.scrollTop() ",this.$el.scrollTop(),"this.$el[0].scrollHeight",this.$el[0].scrollHeight);
		if((this.$el.scrollTop() + this.$el.height() > this.$el[0].scrollHeight-100)){
			if(!this.fetching){
				this.fetching=true;
				this.loadMore();	
			}
		}	
	},
	loadMore:function(){
		var thisObj=this;
		this.collection.fetch();
		console.log("Adding more ----");
	},
	populateTweets:function(coll){
		var thisObj=this;
		coll.each(function(model){
			var itemView=new ItemView({'model':model});
			thisObj.subViewArray.push(itemView);
			thisObj.$el.append(itemView.$el);
			itemView.render();
			thisObj.fetching=false;	
		})		
		
		
	}
});

var dataContView=new DataContainerView();
$("body").append(dataContView.$el);
