function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
        // Add your logic to submit to your backend server here.
    });
  });
}


document.querySelector('#demo-form').addEventListener('submit', onClick);