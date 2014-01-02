(function() {
  $(function() {
    var delay, functionTimeOut, functionTimeOut2, functionTimeOut3, functionTimeOut4, functionTimeOut5, goBrowser, timer;
    timer = void 0;
    delay = 5500;
    functionTimeOut = function(a) {
      return timer = setTimeout(function() {
        $('.slide-02').removeClass('oculto');
        $('.slide-02').removeClass('z-bottom');
        $('.slide-01').addClass('oculto');
        $('.slide-01,.slide-04,.slide-03,.slide-05').addClass('z-bottom');
        return functionTimeOut2();
      }, delay);
    };
    functionTimeOut2 = function(a) {
      return timer = setTimeout(function() {
        $('.slide-03').removeClass('oculto');
        $('.slide-03').removeClass('z-bottom');
        $('.slide-02').addClass('oculto');
        $('.slide-01,.slide-02,.slide-04,.slide-05').addClass('z-bottom');
        return functionTimeOut3();
      }, delay);
    };
    functionTimeOut3 = function(a) {
      return timer = setTimeout(function() {
        $('.slide-04').removeClass('oculto');
        $('.slide-04').removeClass('z-bottom');
        $('.slide-03').addClass('oculto');
        $('.slide-03,.slide-01,.slide-02,.slide-05').addClass('z-bottom');
        return functionTimeOut4();
      }, delay);
    };
    functionTimeOut4 = function(a) {
      return timer = setTimeout(function() {
        $('.slide-05').removeClass('oculto');
        $('.slide-05').removeClass('z-bottom');
        $('.slide-04').addClass('oculto');
        $('.slide-04,.slide-03,.slide-02,.slide-01').addClass('z-bottom');
        return functionTimeOut5();
      }, delay);
    };
    functionTimeOut5 = function(a) {
      return timer = setTimeout(function() {
        $('.slide-01').removeClass('oculto');
        $('.slide-01').removeClass('z-bottom');
        $('.slide-04').addClass('oculto');
        $('.slide-04,.slide-03,.slide-02,.slide-05').addClass('z-bottom');
        return functionTimeOut();
      }, delay);
    };
    goBrowser = function() {
      return $('.browser').removeClass('oculto');
    };
    functionTimeOut();
    return goBrowser();
  });

}).call(this);
