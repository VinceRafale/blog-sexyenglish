$ ->
  timer = undefined
  delay = 5500
  functionTimeOut = (a) ->
    timer = setTimeout(->
      $('.slide-02').removeClass('oculto')
      $('.slide-02').removeClass('z-bottom')
      $('.slide-01').addClass('oculto')
      $('.slide-01,.slide-04,.slide-03,.slide-05').addClass('z-bottom')
      functionTimeOut2()
    , delay)
  functionTimeOut2 = (a) ->
    timer = setTimeout(->
      $('.slide-03').removeClass('oculto')
      $('.slide-03').removeClass('z-bottom')
      $('.slide-02').addClass('oculto')
      $('.slide-01,.slide-02,.slide-04,.slide-05').addClass('z-bottom')
      functionTimeOut3()
    , delay)
  functionTimeOut3 = (a) ->
    timer = setTimeout(->
      $('.slide-04').removeClass('oculto')
      $('.slide-04').removeClass('z-bottom')
      $('.slide-03').addClass('oculto')
      $('.slide-03,.slide-01,.slide-02,.slide-05').addClass('z-bottom')
      functionTimeOut4()
    , delay)
  functionTimeOut4 = (a) ->
    timer = setTimeout(->
      $('.slide-05').removeClass('oculto')
      $('.slide-05').removeClass('z-bottom')
      $('.slide-04').addClass('oculto')
      $('.slide-04,.slide-03,.slide-02,.slide-01').addClass('z-bottom')
      functionTimeOut5()
    , delay)
  functionTimeOut5 = (a) ->
    timer = setTimeout(->
      $('.slide-01').removeClass('oculto')
      $('.slide-01').removeClass('z-bottom')
      $('.slide-04').addClass('oculto')
      $('.slide-04,.slide-03,.slide-02,.slide-05').addClass('z-bottom')
      functionTimeOut()
    , delay)
  
  goBrowser = () ->
    $('.browser').removeClass('oculto')
  
  functionTimeOut()
  goBrowser()