"use strict"

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active')
        })

        this.classList.add('active');

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    })
})