/**
 * The navigation bar of the app, search, create buttons etc
**/
var NavBar  = React.createClass( {
  getInitialState : function() {
    return {
      search: ''
    }
  },
  componentDidMount : function() {
    var that = this;
    Tracula.Event.addListener('ticketLoaded', function(evt) {
      var data = evt.detail;
      that.setState({'search' : data.id});
    });
  },
  handleForm : function(e) {
    console.log('handleForm');
    e.preventDefault();
    var search = this.state.search;
    var searchNum = parseInt(search, 10);

    if(isNaN(searchNum)) {
      console.log('Numbers only at the moment, thanks');
    } else {
      Tracula.Api.Ticket.get(searchNum, function(data) {
        // Tracula.History.pushState(data, data.summary, '/ticket/'+searchNum);
        //should work with popstate
        Tracula.History.go('/ticket/' + searchNum);
      });
    }
  },
  handleSearchChange : function(e) {
    this.setState({search: e.target.value});
  },
  createTicketAction : function(e) {
    e.preventDefault();
    console.log('createTicketAction');
    window.location = '/ticket/create';
  },
  logoutAction : function(e) {
    e.preventDefault();
    //Tracula.History.pushState({}, 'logout', '/logout');
    window.location = '/logout';
  },
  loginBtn : function() {
    var d = React.DOM;
    var loggedIn = Tracula.Session.loggedIn();
    if (loggedIn) {
      return d.div( {className:"form-group"}, d.button( {type:"button", className:"btn form-inline", id:"_ticket_btn", onClick:this.logoutAction}, "Logout") );
    } else {
      return null;
    }
  },
  render: function() {
    var d = React.DOM;
    return (
      d.header( {className:"navbar-default", role:"banner"},
        d.div( {className:"navbar-header"},
          d.a( {href:"/", className:"navbar-brand"}, "Home")
        ),
        d.nav( {className:"collapse navbar-collapse bs-navbar-collapse", role:"navigation"},
          d.form( {name:"search", action:"/search", className:"form-inline", role:"form", id:"search_form", onSubmit:this.handleForm},
            d.div( {className:"form-group"},
              d.label( {className:"sr-only", htmlFor:"ticket_search"}, "Search Trac"),
              d.input( {className:"form-control input-md", type:"search", placeholder:"Search", onChange:this.handleSearchChange, value:this.state.search} )
            ),
            d.button( {type:"submit", className:"btn btn-success", id:"search_btn"}, "Search"),
            d.button( {type:"submit", className:"btn btn-success form-inline", id:"create_ticket_btn", onClick:this.createTicketAction}, "Create"),
            this.loginBtn()
          )
        )
      )
    )
  }
});

Tracula.Components.NavBar = function() {
  React.renderComponent(NavBar(), document.getElementById('navbar'));
}
