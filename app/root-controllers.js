// Thirdly, a controller is invoked, which grabs the template,
// and content, and invokes render. Render actually inserts the content.
var controllers = {
	navbar: function (data, params) {
		console.log (data);

		var desktop = navbarTemplates.nav_desktop ();
		var mobile = navbarTemplates.nav_mobile ();
		var finalContent = desktop + mobile;

		console.log ('navbar is grabbed, and ready to invoke render!');
		utils.render ('navbar', finalContent);
	},

	home: function (data, params) {
		console.log (data);

		// this looks like more of inserting the external data requested into our page.
		// this will probably be useful later when dealing with a db or external API.
	    /* var all_posts = JSON.parse (data);
	    var posts_to_show = 3;
	    var template_context = [];
	    for (var i = 0; i < posts_to_show; i++) {
	        var post = all_posts [i];
	        var item = {
	            'link': '#post?'+post.post,
	            'title': post.post.replace (/-/g, ' '),
	            'snippet': post.snippet,
	            'published_on': post.added_on,
	        };
	        template_context.push (item);
	    } */
	    // get recent posts
	    // var recent_posts = templates.recent_posts (template_context);

	  // Get our template for this page. The more I think about it, the more I think
	  // this is where we can grab multiple components for one request. We will see.
	  var page1_home = page1Templates.home ();

	  // Here is where we would probably add the items together to produce a final
	  // content variable, with multiple objects inserted.
	  // var page1_home = fullPage;  + recent_posts;

	  console.log ('content is grabbed, and ready to invoke render!');
	  // Now actually render the html on the page. First argument is the id of the
		// containing element where the template will be inserted. second argument is
		// the content that will be inserted. This is where my naming convention for
		// the html may be affected. Might need to adjust that.
	  utils.render ('body', page1_home);    

	  // Hero content-invoked after home because content should be priority. Plus
		// this helps with debugging; having them load separately. The reason they
		// are together in this controller, is because I think I will have different
		// heros for different pages later on.
		var heroContent = page1Templates.hero ();

		console.log ('hero is grabbed, and ready to invoke render!');
		utils.render ('hero', heroContent);
	},

	footer: function (data, params) {
		console.log (data);

		var footerContent = footerTemplates.footer ();
		var finalContent = footerContent;

		console.log ('footer is grabbed, and ready to invoke render!');
		utils.render ('footer', finalContent);
	}
};