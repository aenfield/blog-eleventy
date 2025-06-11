import { DateTime } from "luxon";

export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	permalink: data => {
		const dt = DateTime.fromJSDate(data.date, { zone: 'utc' });
		const year = dt.toFormat('yyyy');
		const month = dt.toFormat('MM');
		const day = dt.toFormat('dd');

		const slug = data.title
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^\w-]/g, "");

		return `/blog/${year}/${month}/${day}/${slug}/`;
	}
};
