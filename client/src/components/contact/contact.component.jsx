import React from "react";
import {MDBRow, MDBCol,MDBIcon, MDBBtn} from "mdbreact";
import Wrapper, {ContactForm} from "./contact.styles";

const ContactPage = () => {
  return (
    <Wrapper className="my-5">
      <div>
        <h2 className=" text-center my-5">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>
      <ContactForm>
        <div className="form-header blue accent-1">
          <h3 className="mt-2">
            <MDBIcon icon="envelope"/> Write to us:
          </h3>
        </div>
        <p className="dark-grey-text">
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
        <div className="text-center">
          <button className='submit'>Submit</button>
        </div>
      </ContactForm>
      <MDBCol lg="7">
        <div
          id="map-container"
          className="rounded z-depth-1-half map-container"
          style={{height: "400px"}}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20608.705739163768!2d-97.20975394999999!3d49.78440595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1639097869533!5m2!1sen!2sca"
            title="This is a unique title"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{border: 0}}
          />
        </div>
        <br/>
        <MDBRow className="text-center">
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="map-marker-alt"/>
            </MDBBtn>
            <p>Toronto, 94126</p>
            <p className="mb-md-0">Canada</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="phone"/>
            </MDBBtn>
            <p>+ 01 234 567 89</p>
            <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="envelope"/>
            </MDBBtn>
            <p>info@gmail.com</p>
            <p className="mb-md-0">sale@gmail.com</p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </Wrapper>
  );
}

export default ContactPage;