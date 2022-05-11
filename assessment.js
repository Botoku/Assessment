// ==UserScript==
// @name         Help Scout intake form Team Croco assessment
// @namespace    //teamcroco.com
// @version      0.1
// @description  Team Croco assessment
// @author       Vincent Babajide Botoku
// @match        https://puddle.teamcroco.com/academy/test/register/

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    // Your code here...
    //selectors
    const form = document.querySelector('form');
   const companyInput = document.getElementById('company');
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phoneNumber = document.getElementById('phone-number');
    const failIcon = '<i class="fas fa-times-circle fa-2x invalid-cross hidden-icon"></i>'
    const correctIcon = '<i class="fas fa-solid fa-check"></i>'
    const controls = document.querySelectorAll('.controls')
    const fontCDN = document.createElement('script')
    fontCDN.src = 'https://kit.fontawesome.com/b5870135c6.js'
   fontCDN.crossorigin = 'anonymous'
    document.querySelector('head').appendChild(fontCDN)
    const modalOpenParent = document.getElementById('agree')



//classes

    const classSelectors = document.createElement('style')
    classSelectors.type='text/css'
    classSelectors.innerHTML = `
    .checkContainer{
     background-color: #0e741c;
     color: white;
     border-radius: 50%;
                height:24px;
                width: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
    }
    .iconPosition{
    position:absolute;
    right: 8px;
    top:50%;
    transform:translateY(-50%);
    display: none;
    }
    .controls.success .checkContainer{
    display: flex;
    }
    .controls.fail .invalid-cross{
    display:block;
    }
    .controls.success input{
    background-color: #c1dcbd;
    }
    .controls.fail input{
    background-color: #f1d9d9;
    }
    .fa-2x{
color:red
}
.password-strength{
display: none !important
}
.modal-container {
                display: flex;
                position: absolute;
                z-index: 10;
                left: 0;
                top: 0;
                width: 100%;
                height: 110%;
                background-color: rgba(0, 0, 0, 0.894);
                overflow: hidden;


              align-items: center;
              justify-content: center;
            }
            .modal-content{
             z-index: 10;
                background-color: #63a7cec5;
                width: 80%;
                height: 80vh;
                margin: auto 10%;
                padding: 20px;
                overflow-y: hidden;
                overflow-x: hidden;
                position: relative;
            }
              .close-modal-btn {
                position: absolute;
                top: 0px;
                right: 0px;
                background-color: #df3434;
                font-size: 20px;
                color: white;
                height: 23px;
                width: 23px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;
            }
           .modal-container iframe{height: 100%;width: 100%;}
            .phone-number-cont{margin-top: 14px;}
             .fadeIn{
             animation: showMe 2s forwards }
             @keyframes showMe{
                0%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
        .pass-container li p {color: black!important}
        .pass-container li {color: blue}

   `
    document.head.appendChild(classSelectors)

    //insert select dropdown and phone number div
    const dropDownContainer = `
     <select  class="controls"name="usersNum" id="usersNum">
                        <option value="">
                            How many people will be using Help Scout
                        </option>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="more">More than 3 people</option>
                    </select>
                    <div class="phone-number-cont controls">
                    <div class="checkContainer iconPosition">
                    <i class="fas fa-solid fa-check pass"></i>
                 </div>
               <i class="fas fa-times-circle fa-2x invalid-cross iconPosition"></i></div>
               <input
                            id="phone-number"
                            type="tel"
                            placeholder="Phone Number (optional)"
                        />
                    </div>
    `
    password.parentElement.parentElement.insertAdjacentHTML('afterend', dropDownContainer)
//insert icons to input elements
    controls.forEach(div=> div.insertAdjacentHTML('afterbegin', `
                <div class="checkContainer iconPosition">
                    <i class="fas fa-solid fa-check pass"></i>
                 </div>
               <i class="fas fa-times-circle fa-2x invalid-cross iconPosition"></i></div>
    `))
    controls.forEach(control=>control.style.position='relative')

form.addEventListener('submit',(e)=>{
   e.preventDefault();
})
    //inserting the element for selecting reason
  const reasonBoxes = `
 <p class="reason-title">I'm signing up to</p>
    <div class="interests-container">

                        <button class="learn interest">
                            <div class="check-container">
                                <i class="fas fa-solid fa-check"></i>
                            </div>
                            <h6 class="interest-title">Learn</h6>
                            <p>I'm here to look around</p>
                        </button>
                        <button class="start interest">
                            <div class="check-container">
                                <i class="fas fa-solid fa-check"></i>
                            </div>
                            <h6 class="interest-title">Start</h6>
                            <p>I want to find my first help desk</p>
                        </button>
                        <button class="switch interest">
                            <div class="check-container">
                                <i class="fas fa-solid fa-check"></i>
                            </div>
                            <h6 class="interest-title">Switch</h6>
                            <p>I'm interested in switching help desks</p>
                        </button>
                    </div>

    `
    const reasonBoxStyle ={
        textAlign:'left',
        display: 'flex',
        width: '100%',
        marginBottom: '30px',
        height: '120px',
    }
    const interest ={
                width: '33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                outline: 'none',
                border: '2px solid rgba(199, 199, 199, 0.453)',
                borderRight: '2px',
                cursor: 'pointer',
    }
    form.insertAdjacentHTML('afterbegin',reasonBoxes)
    Object.assign(document.querySelector('.interests-container').style, reasonBoxStyle)
    document.querySelector('.reason-title').style.textAlign = 'left'
      const learnDiv = document.querySelector('.learn')
    const startDiv = document.querySelector('.start')
    const switchDiv = document.querySelector('.switch')
    Object.assign(learnDiv.style, interest)
    Object.assign(startDiv.style, interest)
    Object.assign(switchDiv.style, interest)
    //Event listener to control highlighting of interest divs
    const activeClass ={
      border: '2px solid #8cbde7',
      backgroundColor: '#8cbde76f',
      color: '#2f97d5',
    }
    const resetClass={
         border: '2px solid #c7c7c774',
         backgroundColor: 'transparent',
    }
    learnDiv.addEventListener('click',()=>{
       Object.assign(startDiv.style,resetClass)
       Object.assign(switchDiv.style,resetClass)

    Object.assign(learnDiv.style, activeClass)})

    startDiv.addEventListener('click',()=>{
    Object.assign(learnDiv.style,resetClass)
    Object.assign(switchDiv.style,resetClass)
    Object.assign(startDiv.style, activeClass)})

    switchDiv.addEventListener('click',()=>{
    Object.assign(learnDiv.style,resetClass)
    Object.assign(startDiv.style,resetClass)
    Object.assign(switchDiv.style, activeClass)})

    //validation for names
     function checkInput(element) {
                if (element.value.trim().length < 1) {
                    element.parentElement.classList.remove('success');
                    element.parentElement.classList.add('fail');
                } else {
                    element.parentElement.classList.remove('fail');
                    element.parentElement.classList.add('success');
                }
            }

companyInput.addEventListener('blur',()=>{
  checkInput(companyInput)
})
    firstName.addEventListener('blur', ()=>{
        const nameValue = firstName.value.trim();
        if (/\d/.test(nameValue)) {
                    firstName.parentElement.classList.remove('success');
                    firstName.parentElement.classList.add('fail');
                    return;
                }
                checkInput(firstName);
    });
    lastName.addEventListener('blur', ()=>{
        const nameValue = lastName.value.trim();
         if (/\d/.test(nameValue)) {
                    lastName.parentElement.classList.remove('success');
                    lastName.parentElement.classList.add('fail');
                    return;
                }
                checkInput(lastName);
   
    });
    //email validation
    email.addEventListener('blur', ()=>{
        const emailValue = email.value.trim();
        if(checkEmail(emailValue) ){
           email.parentElement.classList.remove('fail');
           email.parentElement.classList.add('success')
        return}
        else{
            email.parentElement.classList.remove('success');
            email.parentElement.classList.add('fail');
        }
        function checkEmail(mail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
        }
})
    //Password event listener

    password.addEventListener('focus',()=>{
        const passwordStyles= {
            display:'flex',
            textAlign: 'left',

}
        const listStyle ={
            color:'blue'
        }
        const pStyle ={
        color:'black'
        }
        password.parentElement.insertAdjacentHTML('afterend',`
        <div id="pass-container">
             <div><ul><li class="pass-list fadeIn">
             <p>One lowercase character</p></li><li class="pass-list fadeIn">
             <p>One upperrcase character</p></li><li class="pass-list fadeIn">
             <p>One number</p></li></ul></div><div><ul><li class="pass-list fadeIn">
             <p>One special character</p></li><li class="pass-list fadeIn">
             <p>Eight characters minimum</p></li></ul></div>
        </div>
        `)
        const passListItems = document.querySelectorAll('.pass-list')
        Object.assign(document.getElementById('pass-container').style,passwordStyles)


})
    password.addEventListener('blur',()=>{
        document.getElementById('pass-container').remove();
        const passValue = password.value.trim();
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(passValue)) {
                    password.parentElement.classList.remove('fail');

                    password.parentElement.classList.add('success');
                } else {
                    password.parentElement.classList.remove('success');

                    password.parentElement.classList.add('fail');
                }
    })


//listeners to open modals
    console.log(modalOpenParent.children)
    const termsModal =modalOpenParent.children[0]
    const privacyModal =modalOpenParent.children[1]
    const closeModalBtn = document.querySelectorAll('.close-modal-btn')
    const termsModalContainer = document.querySelector('.terms-modal-container')
    const privacyModalContainer = document.querySelector('.privacy-modal-container')


termsModal.addEventListener('click',(e)=>{
    e.preventDefault()
    document.querySelector('body').insertAdjacentHTML('beforeend',`
       <article class="terms-modal-container modal-container">
                <div class="terms-mod modal-content">
                    <div class="close-modal-btn">&times;</div>
                    <iframe  src="https://www.helpscout.com/company/legal/terms-of-service/" frameborder="0"></iframe>
                    </div>
                </div>
            </article>
    `)
})

    privacyModal.addEventListener('click',(e)=>{
        e.preventDefault()
        document.querySelector('body').insertAdjacentHTML('beforeend', `<article class="privacy-modal-container modal-container"><div class="privacy-mod modal-content"><div class="close-modal-btn">&times;</div><iframe src="https://www.helpscout.com/company/legal/privacy/" frameborder="0"></iframe>
</div></div></article>`)})

     closeModalBtn.forEach(btn=>btn.addEventListener('click',(e)=>{
         e.stopPropagation()
termsModalContainer.remove()
         console.log('click')
            }))
    window.addEventListener('click',(e)=>{
            if(e.target==termsModalContainer)
           { termsModalContainer.style.display='none'
        }
            if(e.target==privacyModalContainer){privacyModalContainer.style.display='none'
            document.querySelector('body').style.overflow='visible'
        }
})})();