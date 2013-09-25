ieresponsify
============

Requirements:

- Lo-Dash utility library http://lodash.com/
- Compass Bones responsive framework. Use the compass project file and /scss folder and customize as required.

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
