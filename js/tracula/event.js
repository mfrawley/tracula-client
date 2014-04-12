Tracula.Event = {
	/**
	 @param name [String]
	*/
	createEvent : function(name, detail) {
	  return new CustomEvent(
	    name,
	    {
	      detail: detail,
	      bubbles: true,
	      cancelable: true
	    }
  	);
	},
	sendEvent : function(name, detail) {
  	var evt = this.createEvent(name, detail);
  	document.dispatchEvent(evt);
	},
	addListener : function(name, func) {
    document.addEventListener(name, func);
	}
}