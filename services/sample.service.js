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
	},
	actions: {
		addUser: {
			rest: "GET /addUser",
			async handler ( ) {
				const { connect, StringCodec } = require( "nats" );
				const sc = new StringCodec();
				const nc = await connect( {
					servers: "nats:4222",
					user: "ruser",
					pass: "T0pS3cr3t",
				} );
				console.log( "CONNECTED to NATS" );
				nc.publish( "channels.sample.user-added", sc.encode( JSON.stringify( {
					title: "Hello from ADD-USER!",
					author: "Marcio Santos",
					description: "This is a sample message"

				} ) ) );
			}
		}
	}
};
