const Home = require("./views/Home.vue");
const NopeNothingHere = require("./views/NopeNothingHere.vue");
const Blog = require("./views/Blog.vue");
export let routes = [
	{
		path: "/",
	 	component: Home,
		name: "home",
	 	meta: {
			title: "illogicalapple",
			metaTags: [{
				name: "description",
				content: "my website"
			}]
		}
	},
	{
		path: "/blog",
		component: Blog,
		name: "blog",
		meta: {
			title: "blog",
			metaTags: [{
				name: "description",
				content: "my blog"
			}]
		}
	},
	{
		path: "/:pathMatch(.*)*",
	 	component: NopeNothingHere,
		name: "404",
	 	meta: {
			title: "404: not found",
			metaTags: [{
				name: "robots",
				content: "noindex"
			}]
		}
	}
];
