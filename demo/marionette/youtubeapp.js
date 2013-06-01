var Y=new Backbone.Marionette.Application();
Y.addRegions({
	content:"#content"
});



var AppLayout=Backbone.Marionette.Layout.extend({
	template:"#layout-template",
	regions:{
		searchBar:"#searchBar",
		searchResults:"#searchResults"
	}
});

var SearchView=Backbone.View.extend({
	el:"#searchBar",
	events:{
		"change input":"search",
		"click button":"search"

	},
	search:function(){
		var searchTerm=this.$el.find("input").val();
		this.$el.find("input").val('');
		Y.vent.trigger("search",searchTerm);
	}
});


var Video=Backbone.Model.extend();

VideoList = Backbone.Collection.extend({
	initialize:function(){
		this.on("reset",function(){
			console.log(this);
		});
	},
	searchVideos:function(query){
		var self=this;
		$.ajax({
			type:"GET",
			url:"https://gdata.youtube.com/feeds/api/videos?q="+query+"&v=2&alt=jsonc",
			dataType:"json",
			success:function(resp){
				if(resp.data.items.length > 0){
					_.each(resp.data.items,function(item){
						self.add(new Video(item));	
					})
					self.trigger("reset");
				}
			}
		})
	}
});

var videoList = new VideoList();
//videoList.searchVideos("SRK");

VideoView = Backbone.Marionette.ItemView.extend({
	template:"#video-template",
	className:"video-container"
});

VideoListView = Backbone.Marionette.CompositeView.extend({
	template:"#composite-template",
	itemView:VideoView,
	itemViewContainer:".results",
	clear:function(){
		this.$el.find(".results").html("<img src='./ajax-loader.gif'>");
	}
});

Y.addInitializer(function(){
	Y.layout = new AppLayout();
	Y.content.show(Y.layout);
	Y.vent.trigger("rendered:layout");
});


var MyController = Marionette.Controller.extend({
	search: function(query){
		var videoList=new VideoList();
		videoList.searchVideos(query);  
		var videoListView=new VideoListView({collection:videoList});
		videoListView.clear();
		Y.layout.searchResults.show(videoListView);  	
  	}
});


Y.vent.on("rendered:layout",function(){
	var searchView=new SearchView();
	Y.layout.searchBar.attachView(searchView);
	Y.controller=new MyController();
});

Y.vent.on("search",function(searchTerm){
	Y.controller.search(searchTerm);
});

Y.start();