"use strict";

module.exports = {
	name: "sample",
	channels: {
		"sample.user-added": {
			async handler ( payload ) {
				console.log( "sample.user-added", payload );
				return payload;
			}
		}
	}
};
