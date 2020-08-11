window.addEventListener('keydown',playsound);

function playsound(e){
	const sounds = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

	key.classList.add('playing');

	if(!sounds) return;
	sounds.currentTime = 0;
	sounds.play();
};

function RemoveTransition(e){
	if(e.propertyName !== 'transform') return;

	this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', RemoveTransition));