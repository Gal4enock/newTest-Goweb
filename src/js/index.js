const refs = {
  header: document.querySelector(".header"),
  form: document.querySelector(".request-button"),
  input: document.querySelector(".required"),
  inputName:document.querySelector(".request-input-name"),
  navLink: document.querySelector(".header-nav-list")
}

window.addEventListener('scroll', function() {
  refs.header.classList.add("newHeader")
 if (window.innerWidth >= 320 && pageYOffset > 120
    || window.innerWidth >= 768 && pageYOffset > 70
    || window.innerWidth >= 1360 && pageYOffset > 70) {
     refs.header.classList.add("headerScrolled")
  } else refs.header.classList.remove("headerScrolled")
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset - 35;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

refs.form.addEventListener("click", (e) => {
  console.log(e);
  if (refs.input.value.length < 5) {
    e.preventDefault();
    refs.input.insertAdjacentHTML("afterend", '<div class="warning-icon"><div/>')
  }
  refs.input.value = '';
  refs.inputName.value = '';
})

refs.navLink.addEventListener("click", (e) => {
  document.querySelectorAll(".header-nav-list-li .current").forEach(n => n.classList.remove('current'))
  e.target.classList.add('current')
})