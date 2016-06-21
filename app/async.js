exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var deferred;

  	deferred = Promise.defer();

  	setTimeout(function(){
  		if(true){
  			deferred.resolve(value);
  		} else{
  			deferred.reject();
  		}
  	},100);

  	return deferred.promise;

  },

  manipulateRemoteData: function(url) {
  	var deferred, httpRequest;

  	deferred = Promise.defer();
    httpRequest = new XMLHttpRequest();

    httpRequest.open('GET', url);
    httpRequest.onload = function(){
    	if(httpRequest.status === 200){
    		data = JSON.parse(httpRequest.responseText).people.map(function(k){ return k.name }).sort();
    		deferred.resolve(data);
    	} else{
    		deferred.reject();
    	}
    }

    httpRequest.send();

    return deferred.promise;
  }
};
