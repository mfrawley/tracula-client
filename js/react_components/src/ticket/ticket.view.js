/** @jsx React.DOM */
var TicketView  = React.createClass( {
  getInitialState : function() {
    return {
      updated : false
    };
  },
  componentDidMount : function() {
    var that = this;
    Tracula.Event.addListener('ticketLoaded', function(evt) {
      console.log('ticketLoaded handler in TicketView');
      var data = evt.detail;
      console.log('data');
      console.log(data);
      that.setState(data);
    });
  },
  ticketChanged: function(e) {
    console.log('ticketChanged');
    console.log(e);
    if (!e.metaKey) {
      return this.setState({updated: true});
    }
  },
  ticketReverted: function() {
    console.log ('ticketReverted');
    this.setState({updated: false});
  },
  render: function() {
    if(this.state) {
      var props = this.state, div = React.DOM.div;
      props.ticketChanged = this.ticketChanged;
      props.ticketReverted = this.ticketReverted;

      return div(null,
        TicketTitle(props),
        TicketInfo(props)
      );
    } else {
      return (div(null, null));
    }
  }
});