import React from "react";
import { Navbar, Footer } from "../components";
export const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section class="section-cta">
        <div class="cta">
          <div class="cta-text-form">
            <form class="form-cta">
              <div>
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="full name"
                />
              </div>

              <div>
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </div>

              <label for="content">Content</label>
              <textarea
                name="content"
                id="content"
                cols="30"
                rows="10"
              ></textarea>

              <button class="btn-submit">Submit</button>
            </form>
          </div>
          <div class="cta-img" role="img"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};
