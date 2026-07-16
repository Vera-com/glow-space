# TESTING

## Table of Contents

- [Introduction](#introduction)
- [Testing Strategy](#testing-strategy)
- [Manual Testing](#manual-testing)
- [User Story Testing](#user-story-testing)
- [CRUD Functionality Testing](#crud-functionality-testing)
- [Authentication and Authorisation Testing](#authentication-and-authorisation-testing)
- [Stripe Checkout Testing](#stripe-checkout-testing)
- [Responsive Design Testing](#responsive-design-testing)
- [Browser Compatibility Testing](#browser-compatibility-testing)
- [Code Validation](#code-validation)
- [Lighthouse Testing](#lighthouse-testing)
- [Bugs Encountered and Fixed](#bugs-encountered-and-fixed)
- [Known Bugs](#known-bugs)
- [Testing Summary](#testing-summary)


## Introduction

Testing was carried out throughout the development of Glow Space to ensure the application functioned correctly across all core features and provided a consistent user experience.

The testing process included manual testing, CRUD functionality testing, authentication and authorisation testing, responsive design testing, browser compatibility testing, code validation and deployment testing.

Where issues were identified, they were investigated, resolved and retested before development continued.

---

## Testing Strategy

Testing followed an iterative approach throughout the project. Rather than waiting until development was complete, each feature was tested immediately after implementation to confirm it behaved as expected.

As new functionality was introduced, previously completed features were also retested to ensure they continued to work correctly. This approach helped identify regressions early, improve code quality and maintain a stable application throughout development.

The final stage of testing focuses on validating the deployed application, confirming responsiveness across different devices and browsers, and ensuring that all core user stories have been successfully implemented.


## Manual Testing

Manual testing was carried out throughout development to ensure that each feature behaved as expected. The following tables summarise the functionality tested, the expected outcome and the actual result.

### User Registration and Authentication

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| Register | Created a new user account with valid details | User account created successfully and redirected | Pass |
| Register | Attempted registration with missing required fields | Validation messages displayed | Pass |
| Register | Attempted registration with an existing username | Error message displayed | Pass |
| Login | Logged in with valid credentials | User logged in successfully | Pass |
| Login | Logged in with incorrect credentials | Error message displayed | Pass |
| Logout | Clicked Logout | User successfully logged out | Pass |


### Appointment Booking

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| Create Booking | Submitted a booking with valid details | Booking saved successfully and confirmation message displayed | Pass |
| Required Fields | Submitted the form with missing information | Validation messages displayed and booking not submitted | Pass |
| Past Date Validation | Selected a previous date | Booking rejected with validation message | Pass |
| Sunday Booking | Selected a Sunday | Booking rejected with validation message | Pass |
| Opening Hours Validation | Selected a time outside opening hours | Booking rejected with validation message | Pass |
| Duplicate Booking | Attempted to book the same date and time twice | Duplicate booking prevented | Pass |


### Appointment Management

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| View Appointments | Opened the My Appointments page while logged in | User's bookings displayed correctly | Pass |
| Edit Booking | Updated the appointment date, time or service | Booking updated successfully | Pass |
| Cancel Booking | Deleted an existing booking | Booking removed successfully and confirmation displayed | Pass |
| Access Protection | Attempted to access another user's booking | Access denied | Pass |
