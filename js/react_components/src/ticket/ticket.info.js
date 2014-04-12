/** @jsx d */
var TicketInfo = React.createClass( {

  getInitialState: function() {
    return {
    }
  },
  ticketChanged : function(e) {
    console.log(e);

    this.props.ticketChanged({
      description : document.getElementById('description')
    });
  },
  render: function() {
    var p = this.props, d = React.DOM, div = d.div, pre = d.pre, label = d.label;
    if (!p) {
      return (
        div(null)
      );
    } else {
      return (
        div(null,
          div( {className:"row"},
            div( {className:"col-md-2"}, "Type:"),
            div( {className:"col-md-1"}, "Priority:"),
            div( {className:"col-md-1"}, "Status:"),
            div( {className:"col-md-2"}, "Owner:"),
            div( {className:"col-md-2"}, "Reported by:"),
            div( {className:"col-md-2"}, "Component:")
          ),

          div( {className:"row"},
            div( {className:"col-md-2"}, p.type),
            div( {className:"col-md-1"}, p.priority),
            div( {className:"col-md-1"}, p.status),
            div( {className:"col-md-2"}, p.owner),
            div( {className:"col-md-2"}, p.reporter),
            div( {className:"col-md-2"}, p.component)
          ),

          div( {className:"row"},
            label( {htmlFor:"description"}, "Description"),
            pre( {className:"col-md-12", id:"description", contentEditable:"true", onInput: this.ticketChanged},
              p.description
            )
          )
        )
      );
    }

  }
});