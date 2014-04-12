/** @jsx d */
var TicketCreate = React.createClass({
  handleFormSubmit : function() {
    console.log('handleFormSubmit');
  },
  render : function() {
    var d = React.DOM;
    return (
      d.div(null,
      d.h1(null, "Create Ticket"),
        d.form( {name:"create_ticket", id:"create_ticket_form", onSubmit:this.handleFormSubmit},
          d.div( {className:"form-group"},
            d.label( {htmlFor:"summary"}, "Title/Summary"),
            d.input( {defaultValue:"", name:"summary", className:"form-control",  id:"summary"} )
          ),
          d.div( {className:"form-group"},
            d.label( {htmlFor:"description"}, "Description"),
            d.textarea( {name:"description", rows:"3", className:"form-control"} )
          ),
          d.button( {type:"submit", className:"btn btn-primary"}, "Save")
        )
      )
      )
  }
});

Tracula.Components.CreateTicket = function () {
  React.renderComponent(TicketCreate( {} ), document.getElementById('container'));
};