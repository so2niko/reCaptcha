var onloadCallback = function() {
  grecaptcha.render('html_element', {
    'sitekey' : '6Ldmka8ZAAAAAI1USAlJrmHll786jMFyGiw9tmNj',
    'data-callback' : onSubmit
  });
};

document.querySelector('.feedback-form')
  .addEventListener('submit', e => {
    e.preventDefault();//Отмена отправки формы по умолчанию
});

function onSubmit(ev){
  const msgThanks = document.querySelector('.msg-thanks');

  const { inpEmail, inpName, inpOpinion } = document.querySelector('.feedback-form').elements;

  const rEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const rName = /[a-zа-я]+/i;

  if(rEmail.test(inpEmail.value) && rName.test(inpName.value)){
      sendFeedback(inpName.value, inpEmail.value, inpOpinion.value);
      inpName.value = inpEmail.value = inpOpinion.value = '';
      msgThanks.classList.remove('d-none');
  }

  console.log(inpEmail, inpName, inpOpinion);
}

function sendFeedback(name, email, opinion){
  fetch(`https://script.google.com/macros/s/AKfycbwjxgyrYvq2awc7f8iE2xmY5ggRqeEjdlAdvCSq3YV5Bdr8fF4/exec?name=${name}&email=${email}&opinion=${opinion}`, {
      mode : 'no-cors',
      method : 'GET'
  });
}
