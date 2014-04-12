/** @jsx React.DOM */

var Login  = React.createClass( {
  handleSubmit : function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    Tracula.Api.Auth.login(username, password, function(data) {
      Tracula.Session.set('userinfo', {username : username, password : password});
      window.location = '/';
    });
  },
  render : function() {
    var dom = React.DOM;
    var div = dom.div, form = dom.form, label = dom.label, input = dom.input, h1 = dom.h1, button = dom.button;

    return (
      div(null,
        h1(null, "Login"),
        form( {role:"form", className:"col-md-9", onSubmit:this.handleSubmit, id:"login_form"},
          div( {className:"form-group"},
            label( {htmlFor:"username"}, "Username"),
            input( {type:"text", className:"form-control", id:"username", placeholder:"Enter Username"} )
          ),
          div( {className:"form-group"},
            label( {htmlFor:"password"}, "Password"),
            input( {type:"password", className:"form-control", id:"password", placeholder:"Enter Password"} )
          ),
          button( {type:"submit", className:"btn btn-default"}, "Submit")
        )
      )
    );
  }
});

Tracula.Components.Login = function () {
  React.renderComponent(Login( {} ), document.getElementById('container'));
};