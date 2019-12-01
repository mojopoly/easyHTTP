function easyHTTP() {
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  const self = this.http;
  this.http.onload = function() {
    if (self.status === 200) {
      callback(null, self.responseText); //this call back makes this an async function. null will send back an error
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  const self = this.http;
  this.http.onload = function() {
    callback(null, self.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  const self = this.http;
  this.http.onload = function() {
    callback(null, self.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  const self = this.http;
  this.http.onload = function() {
    if (self.status === 200) {
      callback(null, 'Post Deleted!');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
