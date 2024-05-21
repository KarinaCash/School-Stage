$(function () {
    $('#button').click(function () {
      $('.mod').addClass('mod_active');
    });
   
    $('.mod__close-button').click(function () {
      $('.mod').removeClass('mod_active');
    });
});

function openModal() {
  document.getElementById('modal').style.display = 'block';

}

$(function () {
    $('.mod__close_but').click(function () {
      document.getElementById('modal').style.display = 'none'
    });

});

function checkPassword() {
  var login = document.getElementById('login').value;
  var password = document.getElementById('password').value;

  if (login === 'user' && password === '123') {
    window.location.href = 'account.html'; 
  } else {
    alert('Неправильный логин или пароль');
  }
}