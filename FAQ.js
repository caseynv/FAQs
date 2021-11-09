const faqs = document.querySelectorAll('.faq-toggle');

faqs.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

