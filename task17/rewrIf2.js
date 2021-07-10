let message;
(login == 'Сотрудник') ?
    message = 'Привет' :
    (login == 'Директор') ?
        message = 'Здравствуйте' :
        (login == '') ?
            message = 'Нет логина' :
            message = '';