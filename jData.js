/*
* jData v1.0.0 - handle data, rely on Zeptojs
**/
;(function(global, factory) {
  if(typeof define === 'function' && define.amd) {
    define(function(){ return factory(global) });
  }else {
    factory(global);
  }
}(this, function(window) {
  var jData = {}, context = {},
      BASEURL = '//***.com/superWelfare/';
  
  var request = function(action, data, callback){
    // request the server and trigger the callback event
    $.ajax({
      url : BASEURL + $action,
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
    request.call(this, 'add', data, callback);
  };
  
  var delete = function(id, callback){
    request.call(this, 'delete', data, callback);
  };
  
  var query = function(data, callback){
    request.call(this, 'query', data, callback);
  };
  
  var update = function(id, data, callback){
    request.call(this, 'update', data, callback);
  };
  
  jData = {
    "add" : add,
    "delete" : delete,
    "query" : query,
    "update" : update
  };
  
  return jData;
}));
