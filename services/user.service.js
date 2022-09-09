"use strict";

module.exports = {
	name: "users",
	actions: {
		addUser: {
			params: {
				name: "string",
				email: "string"
			},
			handler ( ctx ) {
				const { name, email } = ctx.params;
				const user = { name, email };
				ctx.broadcast( "user.added", user );
				return user;
			}
		}
	}
};
