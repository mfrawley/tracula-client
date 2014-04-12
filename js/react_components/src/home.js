/** @jsx React.DOM */

var Home  = React.createClass( {
  render : function() {
    var dom = React.DOM;
    return (
      dom.div(null, 
      dom.h1(null, "Welcome to Castle Tracula!"),
      dom.p( {className:"lead"}, "Tracula will hopefully make your bug tracker easier to use.")
    ));
  }
});

Tracula.Components.Home = function () {
  React.renderComponent(Home( {} ), document.getElementById('container'));
};