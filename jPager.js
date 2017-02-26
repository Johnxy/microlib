/*
* jPager v1.0.0 - handle page, rely on Zeptojs
* @description It defines the pager for your website.
* @example
    jPager.init({
      "template" : {
        "default" : '<a href="//***.com/center/superWelfare/index?pageNum={pageNum}">{pageNum}</a>',
        "current" : '<a class="current" href="//***.com/center/superWelfare/index?pageNum={pageNum}">{pageNum}</a>',
        "first" : '<a class="current" href="//***.com/center/superWelfare/index?pageNum=1">&lt;&lt;</a>',
        "last" : '<a class="current" href="//***.com/center/superWelfare/index?pageNum={maxNum}">&gt;&gt;</a>'
      },
      "pageNum" : 1,
      "pageSize" : 0
    });
**/
;(function(global, factory) {
  if(typeof define === 'function' && define.amd) {
    define(function(){ return factory(global) });
  }else {
    factory(global);
  }
}(this, function(window) {
 
  var jPager = {}, context = this, foreach = [].forEach;
  
  var _config = {
    "template" : {
      "default" : '<a href="//***.com/center/superWelfare/index#pn={pageNum}">{pageNum}</a>',
      "current" : '<a class="current" href="//***.com/center/superWelfare/index#pn={pageNum}">{pageNum}</a>',
      "first" : '<a class="current" href="//***.com/center/superWelfare/index#pn=1">&lt;&lt;</a>',
      "last" : '<a class="current" href="//***.com/center/superWelfare/index#pn={maxNum}">&gt;&gt;</a>'
    },
    "maxPage" : 1,
    "pageSize" : 10,
    "container" : "#jPager"
  };
  
  var init = function(conf){
    $.extend(true, _config, conf);
  }
  
  var miniTpl = function(str, $obj){
    str.replace(/\{[\w\d]+\}/g, function(){
      
    });
  };
  
  var render = function(pageNum){
    if(!$pageNum){
      console && console.log("pageNum need to transfered");
      return false;
    }
    var htmlArr = [];
    htmlArr.push(miniTpl(_config.template.first));
    for(var i = 1; i <= _config.maxPage; i++){
      if(i == pageNum){
        htmlArr.push(miniTpl(_config.template.current, {pageNum : i}));
      }else{
        htmlArr.push(miniTpl(_config.template.default, {pageNum : i}));
      }
    }
    htmlArr.push(miniTpl(_config.template.last, {maxNum : _config.maxPage}));
    $(_config.container).html(htmlArr.join(""));
  }
  
  return window.jPager = jPager;
  
}));
