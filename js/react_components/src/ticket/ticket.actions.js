/** @jsx d */
var TicketActions = React.createClass( {
  cancelAction : function(e) {
    console.log('cancelAction');
    this.props.ticketReverted();
  },
  render : function() {
    var d = React.DOM;

    if(this.props.updated) {
      return (
        d.div(null , 
        d.button( {type:"button", className:"btn btn-primary", onClick:this.cancelAction}, "Cancel"),
        d.button( {type:"button", className:"btn btn-primary"}, "Save")
        )
      );
    } else {
      return ( d.div(null));
    }
    
  }
});