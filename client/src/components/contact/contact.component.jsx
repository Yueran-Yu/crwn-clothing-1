import React from "react";
import Wrapper, {ContactForm, Frame} from "./contact.styles";

const ContactPage = () => {
  return (
    <Wrapper>
      <div>
        <h2>
          Contact us
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>
      <ContactForm>
        <div>
          <h3>
            <div/>
            Write to us:
          </h3>
        </div>
        <p>
          We'll write rarely, but only the best content.
        </p>
        <label>
          Your Name:
          <input
            type="text"
            id="form-name"
          />
        </label>
        <label>
          Your email:
          <input
            type="email"
            id="form-email"
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            id="form-subject"
          />
        </label>
        <label>
          Message:
          <textarea
            id="form-text"
          />
        </label>
        <button className='submit'>Submit</button>
      </ContactForm>
      <Frame>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20608.705739163768!2d-97.20975394999999!3d49.78440595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1639097869533!5m2!1sen!2sca"
          title="This is a unique title"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{border: 0}}
        />
      </Frame>
      <br/>
      <div>
        <p>Toronto, 94126</p>
        <p>Canada</p>
      </div>
      <div>
        <p>+ 01 234 567 89</p>
        <p>Mon - Fri, 8:00-22:00</p>
      </div>
      <div>
        <p>info@gmail.com</p>
        <p>sale@gmail.com</p>
      </div>
    </Wrapper>
  );
}

export default ContactPage;