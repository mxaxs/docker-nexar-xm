( async () => {
	try {
		const { connect, StringCodec } = require( "nats" );
		const sc = new StringCodec();
		const nc = await connect( {
			servers: "localhost:4222",
			user: "ruser",
			pass: "T0pS3cr3t"
		} );
		console.log( "CONNECTED to NATS" );
		nc.publish( "channels.sample.user-added", sc.encode( JSON.stringify( {
			title: "Hello World",
			author: "Marcio Santos",
			description: "This is a sample message"

		} ) ) );

	} catch ( error ) {
		console.log( error );
	}
})();
