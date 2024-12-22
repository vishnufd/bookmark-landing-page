const hamburgerMenu = document.querySelector("#ham-menu");
const closeMenu = document.querySelector("#close-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelectorAll("#mobile-nav > li > a")

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.classList.add('ham')
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  document.body.classList.remove('ham')
});

mobileNav.forEach((list) => {
    list.addEventListener('click', () => {
     document.body.classList.remove('ham')
     mobileMenu.classList.add("hidden");
    })
})

// tabs navigation
let tabs = document.querySelectorAll(".tabs p");
let tab_contents = document.querySelectorAll(".tab-content .tab");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tab_contents.forEach((contents) => {
      contents.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab_contents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

// QA section
const question = document.querySelectorAll("#questions");

question.forEach((singleQuestion) => {
    singleQuestion.addEventListener('click', () => {
        if(singleQuestion.children[1].classList.contains('hidden'))
        {
            singleQuestion.children[0].children[1].classList.toggle('rotate-180')
            singleQuestion.children[1].classList.remove('hidden')
        }else {
            singleQuestion.children[1].classList.add('hidden')
            singleQuestion.children[0].children[1].classList.remove('rotate-180')
        }
        const svgPath = singleQuestion.children[0].children[1].children[0]

        if (singleQuestion.children[0].children[1].classList.contains("rotate-180")) {
            svgPath.setAttribute("stroke", "hsl(0, 94%, 66%)");
        } else {
            svgPath.setAttribute("stroke", "#5267DF");
        }
    })
})


// email verification

const email = document.querySelector('#email')
const contactBtn = document.querySelector('#contact-btn')
const errorIcon = document.querySelector('#error-icon')
const errorMsg = document.querySelector('#error-msg')
const mail = document.querySelector('#mail')

contactBtn.addEventListener('click', () => {
  if(email.value === '' || !(email.value.includes('@')) || !(email.value.includes('.')))
  {
    mail.classList.add('border-2','border-red_color')
    errorIcon.classList.remove('hidden')
    errorMsg.classList.remove('hidden')
  }else {
    mail.classList.remove('border-2','border-red_color')
    errorIcon.classList.add('hidden')
    errorMsg.classList.add('hidden')
  }
})