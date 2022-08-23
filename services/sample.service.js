"use strict";

module.exports = {
	name: "sample",
	channels: {
		"sample.user-added": {
			async handler ( payload ) {
				console.log( "sample.processes", payload );
				return payload;
			}
		}
	}
};
