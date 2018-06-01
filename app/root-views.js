// First, the router is invoked, with the component name as an argument.
// Secondly a view is invoked, depending on the component passed.

/* I think the purpose of having a view here is to determine and name all of the content
we need, external and internal. Then we request all of this from the API. The controller
handles the internal templates, and our js querying externally would handle requests for
other content.

6-1-18: Update: Most of the above will be handled in the controller. The view will handle
larger tasks, closer to the browser. For instance, handling direct navigation via the
URL, or directing requests via events on the client browser. Not sure yet if this
is how things are structured in more established environments, but it seems to work
in this context.
*/
var views = {
	navbar: function (pageView, data, params) {
		var pageView = pageView;
		utils.request (pageView);
	},

	home: function (page_view, data, params) {
		var page_view = page_view || 'home';
	    // var api_stub = 'posts/index.json'; not needed. not sure, but I think this
			// involves requesting content externally as well. some of the stuff here
			// is from the original app, keeping for reference later.
	    var api_stub = '';

	    // invoke a request to the API.
	    //utils.request (page_view, api_stub, 'show_all_posts', 'show_all_posts_error');
		utils.request ('homeHero');
		utils.request ('homeContent');
	},

	code: function (pageView, data, params) {
		var pageView = pageView;
		utils.request (pageView);
	},

	resume: function (pageView, data, params) {
		var pageView = pageView;
		utils.request (pageView);
	},

	footer: function (pageView, data, params) {
		var pageView = pageView;
		utils.request (pageView);
	}
};
