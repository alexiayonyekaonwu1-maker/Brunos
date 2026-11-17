document.addEventListener('DOMContentloaded',()=>{
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navlinks = document.getElementById('nav-links');
    if (hamburger){
        hamburger.addEventListener('click', () =>{
            navlinks.classList.toggle('active');
        });
    }
    // Contact form validation
    const ContactForm = document.getElementById('ContactForm');
    const successBanner = document.getElementById('successBanner');
    if (ContactForm){
        ContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            // Get form fields
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            // Reset error messages
            document.querySelectorAll('.error message').forEach(el => el.style.display = 'none');
            successBanner.style.display = 'none';
            // Validate full name
            if (fullName.value.trim ()=== ''){
                showError('nameError','Full name is required.');
                isValid = false;
            }
            // Validate Email
             if (email.value.trim ()=== ''){
                showError('emailError','Email address is required.');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())){
                showError('emailError', 'Please enter a valid email address');
                isValid=false;
                //Validate Subject
            }
             if (subject.value.trim ()=== ''){
                showError('subjectError','Subject is required is required.');
                isValid = false;
                //Validate message
            }
             if (message.value.trim ()=== ''){
                showError('messageError','Message content cannot be blank.');
                isValid = false;
            } 
            //If valid, display feedback
            if(isValid){
                successBanner.style.display = 'block';
                successBanner.textContent= 'Thank you! Your message has been validated successfully(note: no live backend is connected)[span_7](start_span)[span_7])end_span).';

            }
        });
    }
    function showError(elementid, message){
        const errorElement = document.getElementById(elementid);
        if(errorElement){
            errorElement.textContent=message;
            errorElement.style.display='block';
        }
    }
    function isValidEmail(email){
        const re = document.getElementById(email);
        return re.test(email);
    }
});