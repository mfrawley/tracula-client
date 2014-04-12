
Tracula.Api = {
	config : Tracula.Config,
  _createAuthHeaders : function(username, password) {
    return {
        'Authorization' : 'Basic ' + utf8_to_b64(username + ':' + password)
      }
  },
	buildUrlForResource: function(res) {
		var c = this.config;
		var url = c.protocol + '//' + c.host + c.pathPrefix + '/' + res;
    console.log(url);
    return url;
	},
	get : function(resource, success) {
    var c = this.config;

    if(Tracula.Session.loggedIn()) {
      var userinfo = Tracula.Session.get('userinfo');
      
      $.ajax(this.buildUrlForResource(resource), {
        type : 'GET',
        success : success,
        dataType : c.dataType,
        headers : this._createAuthHeaders(userinfo.username, userinfo.password)});  
    } else {
      Tracula.History.pushState({}, 'Logout', '/logout');
    }
    
  },
  post : function(resource, data, success) {
    var c = this.config;
    $.ajax(this.buildUrlForResource(resource), {
      type : 'POST',
      success : success,
      error : function(data) {
        console.log(data);
      },
      dataType : c.dataType,
      data : data,
      headers : this._createAuthHeaders(username, password)
    });
	}
};

Tracula.Api.Ticket = {
	get : function(id, callback) {
		Tracula.Api.get('tickets/'+id, function(data) {
      Tracula.Event.sendEvent('ticketLoaded', data);
      // history.pushState(data, data.summary, '/ticket/'+searchNum);

      if (callback) {
      	callback(data);
      }
    });
	}
}

Tracula.Api.Auth = {
  login : function(username, password, callback) {
    Tracula.Api.post('login', {"username" : username, 'password' : password},
    function(data) {
      Tracula.Session.set('userinfo', {'username' : username, 'password' : password});
      Tracula.Event.sendEvent('loginCompleted', data);

      if (callback) {
        callback(data);
      }
    });
  }
}