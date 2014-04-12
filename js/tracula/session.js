Tracula.Session = {
	_data : {},
	set : function(key, val) {
		// this._data[key] = val;
		Tracula.LocalStorage.setItem(key, val);
	},
	get : function(key) {
		return Tracula.LocalStorage.getItem(key);
	},
	loggedIn : function() {
		return !!this.get('userinfo');
	},
	destroy : function() {
		Tracula.LocalStorage.removeItem('userinfo');
	}
};

/**
 LocalStorage wrapper with JSON serialization of objects
*/
Tracula.LocalStorage = {
	setItem : function(k, v) {
		localStorage.setItem('tracula.' + k, JSON.stringify(v));
	},
	getItem : function(k) {
		var key = 'tracula.' + k;
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage[key]);
		}
	},
	removeItem : function(key) {
		localStorage.removeItem('tracula.' + key);
	}
}