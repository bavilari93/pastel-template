console.log('works ');

window.onload = (()=>{
	const container = document.querySelector('.nav');
	const aTag = container.querySelectorAll('a');
	console.log(aTag);
	aTag.forEach((e)=>{

		e.addEventListener('click', ((event)=>{
			e.className===''?
			e.className += 'select' :
			e.classList.remove('select');
	
		}))
	
	})
})
// when using jquery 
// $('body').on('click', 'li', function() {
//       $('li.active').removeClass('active');
//       $(this).addClass('active');
// });