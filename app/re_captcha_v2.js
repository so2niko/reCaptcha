function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6LfYk68ZAAAAAJXyuC_pcFo2mA8a5EvMktl_RbA7', {action: 'submit'}).then(function(token) {
        console.log('smth happens', token);
    });
  });
}


document.querySelector('#demo-form').addEventListener('submit', onClick);