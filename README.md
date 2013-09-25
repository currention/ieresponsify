ieresponsify
============

How it works:

- It simply adds/removes a class to the body tag based on the browsers width. The resize is debounced via the lodash framework. Modernizr is used to apply the class as required.

Supported Viewports:

- If is above or equal to 768px
- If is above or equal to 1030px
- If is above or equal to 1240px

Requirements:

- JQuery
- Modernizr http://modernizr.com/
- Lo-Dash utility library http://lodash.com/
- Compass Bones responsive framework. Use the compass project file, /css & /scss folder and customize as required.

JQuery example:

$("body").IEResponsify();

SCSS example:

.lt-ie9 {
	.ie768up {
		@import "768up";
	}
	.ie1030up {
		@import "1030up";
	}
	.ie1240up {
		@import "1240up";
	}
}
