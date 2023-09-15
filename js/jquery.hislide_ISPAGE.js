let query = window.matchMedia("(max-width:1110px)");
if(query.matches){
    (function($) {
        var slide = function(ele,options) {
            var $ele = $(ele);
            var setting = {
                speed: 800,
                interval: 3000,
                
            };
            $.extend(true, setting, options);
            var states = [
                { $zIndex: 15, width: 150, height: 199, top: 0, left: 0, $opacity: 1 },
                { $zIndex: 14, width: 130, height: 170, top: 15, left: 110, $opacity: 0.9 },
                { $zIndex: 13, width: 0, height: 0, top: 100, left: 200, $opacity: 0.9 }
            ];
    
            var $lis = $ele.find('li');
            var timer = null;
    
            // 事件
            $ele.find('.hi-next').on('click', function() {
                next();
            });
            $ele.find('.hi-prev').on('click', function() {
                states.push(states.shift());
                move();
            });
            $ele.on('mouseover', function() {
                clearInterval(timer);
                timer = null;
            }).on('mouseout', function() {
                autoPlay();
            });
    
            move();
            autoPlay();
            function move() {
                $lis.each(function(index, element) {
                    var state = states[index];
                    $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
                });
            }
            function next() {
                states.unshift(states.pop());
                move();
            }
    
            function autoPlay() {
                timer = setInterval(next, setting.interval);
            }
        }
        $.fn.hiSlide = function(options) {
            $(this).each(function(index, ele) {
                slide(ele,options);
            });
            return this;
        }
    })(jQuery);
    
}else{
    (function($) {
        var slide = function(ele,options) {
            var $ele = $(ele);
            var setting = {
                speed: 800,
                interval: 3000,
                
            };
            $.extend(true, setting, options);
            var states = [
                { $zIndex: 15, width: 250, height: 332, top: 0, left: 0, $opacity: 1 },
                { $zIndex: 14, width: 203, height: 267, top: 32, left: 125, $opacity: 0.9 },
                { $zIndex: 13, width: 145, height: 193, top: 64, left: 260, $opacity: 0.9 }
            ];
    
            var $lis = $ele.find('li');
            var timer = null;
    
            // 事件
            $ele.find('.hi-next').on('click', function() {
                next();
            });
            $ele.find('.hi-prev').on('click', function() {
                states.push(states.shift());
                move();
            });
            $ele.on('mouseenter', function() {
                clearInterval(timer);
                timer = null;
            }).on('mouseleave', function() {
                autoPlay();
            });
    
            move();
            autoPlay();
            function move() {
                $lis.each(function(index, element) {
                    var state = states[index];
                    $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
                });
            }
            function next() {
                states.unshift(states.pop());
                move();
            }
    
            function autoPlay() {
                timer = setInterval(next, setting.interval);
            }
        }
        $.fn.hiSlide = function(options) {
            $(this).each(function(index, ele) {
                slide(ele,options);
            });
            return this;
        }
    })(jQuery);
    
}


