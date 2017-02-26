/*
* jData v1.0.0 - handle data, rely on Zeptojs
* @description You have to change BASEURL as your server url.
* @example
    jData.add({
      "creator" : "johnxy",
      "content" : "Hello world!"
    }, function(result){
      console.log(result);
    });
    
    jData.delete(1, function(result){
      console.log(result);
    });
    
    jData.query({
      "keyword" : "keyword",
      "pageNum" : 1,
      "pageSize" : 10
    }, function(result){
      console.log(result);
    });
    
    jData.update(1, {
      "creator" : "johnxy",
      "content" : "Hello world!"
    }, function(result){
      console.log(result);
    });
**/
;(function(global, factory) {
  if(typeof define === 'function' && define.amd) {
    define(function(){ return factory(global) });
  }else {
    factory(global);
  }
}(this, function(window) {
  
  //you need to change BASEURL for reuqest.
  var BASEURL = '//***.com/superWelfare/';
  
  var jData = {}, context = this;
  
  var request = function(action, data, callback){
    // request the server and trigger the callback event
    $.ajax({
      url : BASEURL + action,
      data : data,
      success : callback || function(){
        console.info("Info:" + action + " operation is successful.");
      },
      error : function(){
        console.error("Error happened during " + action + "operation.");
      }
    });
    
  };
  
  var add = function(data, callback){
    request.call(this, 'add', {"data" : data}, callback);
  };
  
  var delete = function(id, callback){
    request.call(this, 'delete', {"id" : id}, callback);
  };
  
  var query = function(data, callback){
    request.call(this, {"keyword" : "keyword", "pageNum" : 1, "pageSize" : 10}, callback);
  };
  
  var update = function(id, data, callback){
    request.call(this, 'update', {"id" : id, "data" : data}, callback);
  };
  
  jData = {
    "add" : add,
    "delete" : delete,
    "query" : query,
    "update" : update
  };
  
  return window.jData = jData;
  
}));
