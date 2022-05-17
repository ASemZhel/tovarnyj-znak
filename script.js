const toggleBtns = document.querySelector('.options__buttons');

toggleBtns.addEventListener('click', (e) => {
	if (e.target.classList.contains('toggle-button')) {
		document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active'));
		e.target.classList.add('active');

		document.querySelectorAll('.toggle-options').forEach(option => option.classList.add('hidden'));
		document.querySelector(`#${e.target.dataset.id}`).classList.remove('hidden');
	}
});

document.getElementById('castom-radio').addEventListener('click', (e) => {
	if (e.target.classList.contains('options__category')) {
		document.querySelectorAll('#castom-radio .options__category').forEach(option => option.classList.remove('selected'));
		e.target.classList.add('selected');
	}
});

document.getElementById('custom-checkbox').addEventListener('click', (e) => {
	if (e.target.classList.contains('options__category')) {
		e.target.classList.toggle('selected');
	}
});