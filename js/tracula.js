///<reference path="tracula-ns.d.ts" />
//init routes
var routes = new routes();
//always need the navbar
Tracula.Components.NavBar();

var loginScreen = function() {
    Tracula.Components.Login();

};

routes.get("/ticket/create", function (req) {
    if(Tracula.Session.loggedIn()) {
        Tracula.Components.CreateTicket();
    } else {
        loginScreen();
    }
});

routes.get("/ticket/:id", function (req) {
    console.log('inside route handler');
    var id = req.params.id;
    if(Tracula.Session.loggedIn()) {
        Tracula.Components.Ticket();

        Tracula.Api.Ticket.get(id, function (data) {
        });
    } else {
        loginScreen();
    }

});

routes.get("/", function (req) {
	if(Tracula.Session.loggedIn()) {
		Tracula.Components.Home();
	} else {
		loginScreen();
	}

});

routes.get("/login", function (req) {
    loginScreen();
});

routes.get("/logout", function (req) {
    Tracula.Session.destroy();
    //re-render the navbar
    Tracula.Components.NavBar();
    loginScreen();
    Tracula.History.pushState({}, 'Home', '/');
});
