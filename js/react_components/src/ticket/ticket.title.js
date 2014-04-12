/** @jsx d */
// var dom = d;

var TicketTitle = React.createClass({
  getInitialState : function() {
    return {title : this.props.summary}
  },
  ticketChanged : function(ev) {
    this.setState({title: ev.target.value});
    console.log(this.state.title);
  },
  render: function () {
    var p = this.props, d = React.DOM, div = d.div, small = d.small, title='';
    if (p.summary && !this.state.title) {
      title = p.summary;
    } else {
      title = this.state.title;
    }
    return (
      div( {className:"row ticket-title"},
        div( {className:"col-md-9"},
          div( {className:"page-header"},
            d.h1( {id:"summary"}, d.input( { type: "text", id:"summary_field", onChange: this.ticketChanged, value : title, size: 48 }), d.small(null, p.id)),
            d.small(null, "Created:",p.time_created)
          )
        ),
        div( {className:"col-md-3"},
          TicketActions( {updated:p.updated, ticketReverted:p.ticketReverted} )
        )
      )
    )
  }
 });