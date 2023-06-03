/* Theme color version change*/

const body = document.getElementsByTagName('body')[0],
	themeMoodIconBox = document.getElementById('_theme_mood_icon_box'),
	themeMoodIcon = document.getElementById('fa');

	themeMoodIconBox.addEventListener('click',function(){
		body.classList.toggle('_dark_theme');
		if (themeMoodIcon.classList.contains('fa-sun-o')) {
			themeMoodIcon.classList.remove('fa-sun-o');
			themeMoodIcon.classList.add('fa-moon-o');
		}else{
			themeMoodIcon.classList.add('fa-sun-o');
			themeMoodIcon.classList.remove('fa-moon-o');
		}
	});