$('.form').find('input').on('keyup blur focus', function (e) {
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'focus') 
        label.addClass('active highlight')
    if (e.type === 'blur')
    	if( $this.val() === '' )
    		label.removeClass('active highlight')
})

$('.tab a').on('click', function (e) {
  
  e.preventDefault()
  
  $(this).parent().addClass('active')
  $(this).parent().siblings().removeClass('active')
  
  target = $(this).attr('href')

  $('.tab-content > div').not(target).hide()
  
  $(target).fadeIn(600)
  
})