// First, the router is invoked, with the comonent name as an argument.
// Secondly a view is invoked, depending on the component passed.
var views = {
	navbar: function (pageView, data, params) {
		var pageView = pageView;
		utils.request (pageView);
	},

	hero: function (pageView, data, params) {
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
	    utils.request (page_view, api_stub, 'show_all_posts', 'show_all_posts_error');
	},

	code: function (pageView, data, params) {
		var pageView = pageView;
	},

	footer: function (pageView, data, params) {
		var pageView = pageView;
		utils.request (pageView);
	}
};