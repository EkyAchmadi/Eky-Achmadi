document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header h1');
    header.addEventListener('click', function() {
        header.textContent = 'Welcome to My Website!';
    });

    const navLinks = document.querySelectorAll('.navibar li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const con2 = document.querySelector('.con2');
    const button = document.createElement('button');
    button.textContent = 'Add More Content';
    con2.appendChild(button);

    button.addEventListener('click', function() {
        const newContent = document.createElement('p');
        newContent.innerHTML = '<b>New Content Added! <a href="https://www.tiktok.com/@chuck_peterson?_t=8qjOvCi4ODX&_r=1" target="_blank">My Account</a></b>';
        con2.appendChild(newContent);
    });

    const footer = document.querySelector('footer p');
    footer.addEventListener('mouseover', function() {
        footer.textContent = 'Thanks for visiting!';
    });

    footer.addEventListener('mouseout', function() {
        footer.textContent = 'Footer';
    });
});
