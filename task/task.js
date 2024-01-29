// Your code here
import axios from 'axios';

const req = axios.create({
	baseURL: 'https://books.danit.com.ua',
});

const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', async function(e) {
	e.preventDefault();
	const email = this.querySelector('[name="user-email"]').value;
	const password = this.querySelector('[name="user-password"]').value;
	const userRepeatPassword = this.querySelector('[name="user-password-repeat"]')
		.value;
	const messageEl = this.querySelector('#form-message');
	if (!(password === userRepeatPassword)) {
		messageEl.innerHTML = 'Пароли не совпадают';
	} else {
		const { data } = await req.post('/register-new', {
			email,
			password,
		});

		if (data.status === 'Success') {
			messageEl.innerHTML = 'Вы успешно зарегистрированы';
		} else {
			messageEl.innerHTML = 'Пользователь с такой почтой уже имеется';
		}
	}
});
