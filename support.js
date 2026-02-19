document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('supportForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:alperenkabadayi0110@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        try {
            window.location.href = mailtoLink;
            
            form.style.display = 'none';
            formSuccess.style.display = 'block';
            formError.style.display = 'none';

            setTimeout(() => {
                form.reset();
                form.style.display = 'flex';
                formSuccess.style.display = 'none';
            }, 5000);
        } catch (error) {
            form.style.display = 'none';
            formError.style.display = 'block';
            formSuccess.style.display = 'none';
        }
    });
});
