import React from 'react'
import "./contact.css"
import artImage from '../../assets/art.png.png'
import phone from '../../assets/phone.png'
import gmail from '../../assets/gmail.png'
import location from '../../assets/location.png'
const Contact = () => {
    

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
      
        const formData = new FormData(event.target);
        const formFields = Array.from(event.target.elements); // Get all form elements
      
        // Check if any form field is empty
        const isFormValid = formFields.every((field) => {
          if (field.type !== "submit" && field.type !== "button") {
            return field.value.trim() !== ""; // Return false if any field is empty
          }
          return true; // Skip buttons and non-input elements
        });
      
        if (!isFormValid) {
          alert("Please fill out all fields.");
          return; // Stop the form submission if validation fails
        }
      
        formData.append("access_key", "88c1201a-afb7-4db7-b367-08e0661979bd");
      
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
          });
      
          const data = await response.json();
      
          if (response.ok) {
            alert("Form submitted successfully!"); // Show success alert
            event.target.reset(); // Clear form fields after successful submission
          } else {
            alert("There was an error submitting the form. Please try again."); // Show error alert if the submission fails
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("An unexpected error occurred. Please try again."); // Show error alert if an exception is thrown
        }
      };
      
    return (
        <div id='contact' className='contact'>
            <div className='contact-title' >
                <h1>Get in touch</h1>
                <img src={artImage} />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>let's talk</h1>
                    <p>I am available lets connect with me on email</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={phone} />
                            <p>+91 9834426839</p>
                        </div>
                        <div className='contact-detail'>
                            <img style={{ width: "34px" }} src={gmail} />
                            <p>sufiyanrazapathan51800@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location} />
                            <p>Nagpur maharashtra India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />
                    <label htmlFor=''>Write Your Message Here</label>
                    <textarea name='message' rows={8} placeholder='Enter your message' className='text'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>

            </div>

        </div>
    )
}

export default Contact
