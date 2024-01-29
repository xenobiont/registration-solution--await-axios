Напишите код, который работает так:
Пользователь вводит в форму свой email, и 2 раза одинаковый пароль. После чего по нажатию кнопки - регистрируется.
Для регистрации нужно отправить AJAX-запрос методом POST по адресу: "http://books.danit.com.ua/register-new", передав в теле запроса объект вида:
{
"email": "register email",
"password": "register password"
}

В случае успешной авторизации вы получите в качестве ответа объект вида:
{
"status": "Success",
"message": "Your are register"
}

В случае неуспешной авторизации вы получите в качестве ответа объект вида:
{
"status": "Error",
"message": "Somethins was wrong. Please try latter"
}
