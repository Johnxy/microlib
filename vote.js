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


    // 初始化用户投票状态
    var initVoteStatus = function(voteList){
        var _dom = null;
        for(var i in vl){
            _dom = $('data-actid' + i);
            'undefined' != typeof vl[i]['join'] ? domStatus[0](_dom) : domStatus[1](_dom);
        }
        initVoteEvent();
    };

    //初始化投票事件
    var initVoteEvent = function(){
        $('#voteList li').bind('click', function(){
            if($(this).data('join') != null && Number($(this).data('join')) != 1 && $('li.on').length <= 3){
                $(this).toogleClass('on');
            }
        });
        $('#vote').bind('click', function(){
            //弹过成功框的标记，弹出过则不再弹
            var hasShowTip = false;
            //未投过票的才可以投
            $('li.on[^data-join]').each(function(el){
                zHttp.send({actid : $(el).data('actid')},function(json) {
                    if (json.ret == 0) {
                        if (!hasShowTip) {
                            zMsg.show('投票成功');
                            $('[data-actid=' + $(el).data('actid') + ']').data('join', 1);
                            hasShowTip = true;
                        }
                    }
                });
            });
        });
    };

    //初始化测一测
    var initGuess = function(){

    };
