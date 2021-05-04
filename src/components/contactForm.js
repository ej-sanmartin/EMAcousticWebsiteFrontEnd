import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { encode } from '../utilities/helpers.js';

import * as contactFormStyles from '../styles/contactForm.module.scss';
export default class ContactForm extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className={contactFormStyles.contactFormLayout}>
                    <h2>Contact Us</h2>
                    <hr className={contactFormStyles.hrLine} />
                    <div className={contactFormStyles.innerFormLayout}>
                        <div className={contactFormStyles.contactMessage}>
                            <h4 className={contactFormStyles.companyName}>R.C. Acousticals</h4>
                            <p>101 Main St., East Hartford, CT 06118</p>
                            <p>860 - 888 - 1111</p>
                            <p>contact@rc_acoustics.com</p>
                            <div className={contactFormStyles.contactBlurb}>
                                <p>Let's talk about your project.</p>
                                <p>~ Eliseo</p>
                            </div>
                        </div>
                        <Formik
                            initialValues={{
                                fullName: '',
                                email: '',
                                message: ''
                            }}

                            onSubmit={(values, actions) => {
                                fetch("/", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                    body: encode({ "form-name": "contact-demo", ...values })
                                })
                                .then(() => {
                                    alert("Successfully Submitted");
                                    actions.resetForm();
                                })
                                .catch(() => {
                                    alert("Error detected..");
                                })
                                .finally(() => actions.setSubmitting(false));
                            }}

                            validate={values => {
                                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                                const errors = {};

                                if(!values.name) errors.name = "Name Required";
                                if(!values.email ?? !emailRegex.test(values.email)) errors.email = "Valid Email Required";
                                if(!values.message) errors.message = "Message Required";

                                return errors;
                            }}
                        >
                            {() => (
                                <Form className={`${contactFormStyles.formItemLayout} ${contactFormStyles.formContent}`} name="contact" data-netlify={true}>
                                    <div className={contactFormStyles.formItem}>
                                        <label htmlFor="name">Full Name</label>
                                        <Field name="name" />
                                        <div className={contactFormStyles.errorText}>
                                            <ErrorMessage name="name" />
                                        </div>
                                    </div>

                                    <div className={contactFormStyles.formItem}>
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" />
                                        <div className={contactFormStyles.errorText}>
                                            <ErrorMessage name="email" />
                                        </div> 
                                    </div>

                                    <div className={contactFormStyles.formItem}>
                                        <label htmlFor="message">Message</label>
                                        <Field name="message" component="textarea" />
                                        <div className={contactFormStyles.errorText}>
                                            <ErrorMessage name="message" />
                                        </div>
                                    </div>

                                    <button className={contactFormStyles.submitButton} type="submit">Submit</button>
                                </Form>
                            )}
                        </Formik>  
                    </div>
                </div>
            </div>
        );
    }
}