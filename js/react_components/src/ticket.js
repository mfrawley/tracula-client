

//render even without data
Tracula.Components.Ticket = function () {
  React.renderComponent(TicketView( {id: '', title:""} ), document.getElementById('container'));
};