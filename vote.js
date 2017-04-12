//状态机
var domStatus = {
  0 : function($dom){ //未选中
    $dom.removeClass('on');
  },
  1 : function($dom){ //选中未投票
    $dom.addClass('on');
  },
  2 : function($dom){ //选中并已投票
    $dom.addClass('on');
    $dom.data('join','1');
  }
};


//初始化投票状态
var initVoteStatus = function(){
  
};
//初始化投票事件
var initVoteEvent = function(){
  
};

//初始化测一测
var initGuess = function(){
  
};

//初始化测一测
var initGift = function(){
  
};



// 初始化用户投票状态
var initVoteStatus function(voteList){
  var _dom = null;
  for(var i in vl){
    _dom = $('data-actid' + i);
    'undefined' != typeof vl[i]['join'] ? domStatus[0](_dom) : domStatus[1](_dom);
  }
  $('#voteList li').bind('click', function(){
    if($(this).hasClass('on')){
      domStatus[]
    }
    $(this).addClass('on');
  });
};

