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

---

### Appointment Management

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| View Appointments | Opened the My Appointments page while logged in | User's bookings displayed correctly | Pass |
| Edit Booking | Updated the appointment date, time or service | Booking updated successfully | Pass |
| Cancel Booking | Deleted an existing booking | Booking removed successfully and confirmation displayed | Pass |
| Access Protection | Attempted to access another user's booking | Access denied | Pass |

---

### Product Catalogue

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| View Products | Opened the Products page | All available products displayed correctly | Pass |
| Product Details | Selected a product | Product detail page opened with full information | Pass |
| Product Images | Checked product images | Images displayed correctly without distortion | Pass |
| Product Availability | Viewed available products | Available products displayed correctly | Pass |

---

### Shopping Cart

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| Add to Cart | Added a product to the cart | Product added successfully | Pass |
| Increase Quantity | Increased product quantity | Quantity and subtotal updated correctly | Pass |
| Decrease Quantity | Reduced product quantity | Quantity updated correctly | Pass |
| Remove Product | Removed an item from the cart | Product removed successfully | Pass |
| Cart Total | Added multiple products | Total price calculated correctly | Pass |
| Empty Cart | Removed all products | Empty cart message displayed | Pass |

---

### Stripe Checkout

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| Checkout Page | Clicked Checkout from the cart | Redirected to Stripe Checkout | Pass |
| Successful Payment | Completed payment using Stripe test card | Payment successful and confirmation page displayed | Pass |
| Cancel Payment | Cancelled payment on Stripe | User returned without completing the order | Pass |



## Responsive Design Testing

Responsive testing was carried out to check that Glow Space remained readable and usable across mobile, tablet and desktop screen sizes.

The tests were completed using Chrome Developer Tools and, where available, physical devices. Each main page was checked for horizontal scrolling, overlapping content, readable text, correctly sized images and usable buttons and forms.

### Screen Sizes Tested

| Device Type | Example Width | Testing Method |
|---|---:|---|
| Mobile | 375px | Chrome Developer Tools |
| Large Mobile | 576px | Chrome Developer Tools |
| Tablet | 768px | Chrome Developer Tools |
| Laptop | 1024px | Browser and Chrome Developer Tools |
| Desktop | 1440px | Chrome responsive mode |

### Responsive Page Testing

| Page or Feature | Mobile Result | Tablet Result | Desktop Result | Outcome |
|---|---|---|---|:---:|
| Navigation | Navigation remained accessible and links could be used | Navigation displayed correctly | Full navigation displayed correctly | Pass |
| Homepage hero | Text, image and call-to-action buttons remained readable | Content adjusted to the available space | Full hero layout displayed correctly | Pass |
| Services carousel | Service cards adjusted to the smaller viewport and remained usable | Cards displayed without overlap | Three service cards displayed within the carousel | Pass |
| About section | Image and text rearranged to fit the smaller screen | Content remained readable and aligned | Image and text displayed side by side | Pass |
| Product catalogue | Product cards adjusted to the available width | Product grid remained aligned | Multiple product cards displayed in rows | Pass |
| Product detail page | Product information remained readable without horizontal overflow | Image and information adjusted correctly | Product image and details displayed clearly | Pass |
| Booking form | Form fields remained accessible and usable | Form adjusted to the tablet width | Image and booking form displayed side by side | Pass |
| My Appointments | Appointment cards fitted within the viewport | Appointment details remained readable | Appointment information displayed with consistent spacing | Pass |
| Shopping cart | Cart items, quantity controls and totals remained accessible | Cart layout adjusted correctly | Full cart layout displayed correctly | Pass |
| Login and registration forms | Form fields and buttons fitted within the screen | Forms remained centred and readable | Forms displayed correctly with suitable spacing | Pass |
| Error pages | Error message and action buttons remained visible | Error content remained centred | Full custom error layout displayed correctly | Pass |
| Footer | Footer content rearranged without overlapping | Footer sections remained readable | Footer columns displayed across the page | Pass |

### Items Checked at Each Screen Size

The following points were checked during responsive testing:

- No unexpected horizontal scrolling.
- Text remained readable without being cut off.
- Images remained within their containers.
- Buttons and links remained visible and usable.
- Forms fitted within the viewport.
- Service and product cards remained aligned.
- Navigation links remained accessible.
- The footer did not overlap the main content.
- Success and error messages remained visible.
- The booking and shopping workflows could still be completed.

### Responsive Testing Evidence

The following screenshots show the application at different viewport sizes.

#### Mobile

![Homepage displayed on a mobile screen](documentation/images/testing/responsive-home-mobile.png)

![Booking page displayed on a mobile screen](documentation/images/testing/responsive-booking-mobile.png)

#### Tablet

![Homepage displayed on a tablet screen](documentation/images/testing/responsive-home-tablet.png)

![Products page displayed on a tablet screen](documentation/images/testing/responsive-products-tablet.png)

#### Desktop

![Homepage displayed on a desktop screen](documentation/images/testing/responsive-home-desktop.png)

![Services section displayed on a desktop screen](documentation/images/testing/responsive-services-desktop.png)


## Authentication and Authorisation Testing

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| Register | Created a new user account | User account created successfully | Pass |
| Login | Logged in with valid credentials | User redirected to their account | Pass |
| Invalid Login | Entered incorrect username/password | Error message displayed | Pass |
| Logout | Clicked Logout | User logged out successfully | Pass |
| Protected Pages | Attempted to access My Appointments without logging in | Redirected to Login page | Pass |
| Booking Protection | Attempted to book an appointment without logging in | Redirected to Login page | Pass |
| Edit Booking Protection | Attempted to edit another user's booking | Access denied | Pass |
| Delete Booking Protection | Attempted to delete another user's booking | Access denied | Pass |




## User Story Testing

The user stories created during the planning stage were tested against the completed application to confirm that the main goals of the project were achieved.

### First-Time Visitor Goals

| User Story | How It Was Met | Outcome |
|---|---|:---:|
| As a first-time visitor, I want to understand what Glow Space offers so that I can decide whether the services are suitable for me. | The homepage contains a clear hero section introducing Glow Space, with links to the services, products and booking pages. | Pass |
| As a visitor, I want to browse the available beauty and wellness services. | The services section displays the service name, description, price, duration and image. Users can move through the services using the carousel controls. | Pass |
| As a visitor, I want to learn more about Glow Space. | The About section explains the purpose of the business and the experience Glow Space aims to provide. | Pass |
| As a visitor, I want to view the available beauty products. | The Products page displays all available products with their images, names, prices and short descriptions. | Pass |
| As a visitor, I want to view further information about a product before purchasing it. | Selecting View Product opens an individual product detail page with the full product information. | Pass |
| As a visitor, I want to find the salon's contact details easily. | The Contact section and footer display the email address, telephone number and social-media links. | Pass |
| As a visitor, I want to create an account so that I can make and manage appointments. | A registration form is available, and valid registration creates an account and logs the user in. | Pass |

### Registered User Goals

| User Story | How It Was Met | Outcome |
|---|---|:---:|
| As a registered user, I want to log in securely so that I can access my account features. | The login form checks the user's credentials and displays an error when invalid details are entered. | Pass |
| As a registered user, I want to book a beauty or wellness service. | The booking form allows a logged-in user to select a service, date and time. Successful bookings are saved to the user's account. | Pass |
| As a registered user, I want my account details to be connected to my booking. | The booking is linked to the authenticated user, and the user's name is automatically added to the booking form. | Pass |
| As a registered user, I want invalid appointment dates and times to be prevented. | The booking form prevents past bookings, Sunday bookings, times outside opening hours and duplicate time slots. | Pass |
| As a registered user, I want to see my appointments in one place. | The My Appointments page displays only the appointments belonging to the logged-in user. | Pass |
| As a registered user, I want to update an appointment if my plans change. | The Edit button opens the appointment form and allows valid booking information to be updated. | Pass |
| As a registered user, I want to cancel an appointment that I no longer need. | The Delete button opens a confirmation page before permanently removing the appointment. | Pass |
| As a registered user, I want my appointments protected from other users. | Appointment edit and delete queries include both the booking ID and the authenticated user. Another user cannot access or modify the booking. | Pass |
| As a registered user, I want to add products to a shopping cart. | Products can be added to a cart connected to the logged-in user. | Pass |
| As a registered user, I want to change product quantities in my cart. | The cart provides controls to increase, reduce or remove an item, and the subtotal and total update correctly. | Pass |
| As a registered user, I want to purchase a product securely. | The user can continue from the cart to the Stripe-hosted checkout page and complete a test payment. | Pass |
| As a registered user, I want confirmation that my payment was successful. | After successful payment, the user is redirected to a confirmation page and the cart is cleared. | Pass |
| As a registered user, I want to log out when I have finished using the application. | The Logout link ends the authenticated session and returns the navigation to its logged-out state. | Pass |

### Site Owner Goals

| User Story | How It Was Met | Outcome |
|---|---|:---:|
| As the site owner, I want to add and manage services without changing the source code. | Services can be created, viewed, updated and deleted through Django Admin. | Pass |
| As the site owner, I want to manage products through the administration area. | Products can be added, edited, marked as available or unavailable and deleted through Django Admin. | Pass |
| As the site owner, I want uploaded product and service images to remain available on the deployed site. | Uploaded media files are stored using the configured cloud media storage service. | Pass |
| As the site owner, I want customer bookings to be linked to user accounts. | Each booking contains a relationship to the authenticated Django user. | Pass |
| As the site owner, I want the deployed application data to remain persistent. | The deployed application uses a PostgreSQL database provided through Neon. | Pass |


## CRUD Functionality Testing

### Create

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| Create Booking | Submitted a new appointment | Booking saved successfully | Pass |
| Add Product (Admin) | Created a new product through Django Admin | Product added successfully | Pass |
| Add Service (Admin) | Created a new service through Django Admin | Service added successfully | Pass |

---

### Read

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| View Services | Opened Services page | Services displayed correctly | Pass |
| View Products | Opened Products page | Products displayed correctly | Pass |
| View Appointments | Opened My Appointments | User appointments displayed | Pass |

---

### Update

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| Edit Booking | Updated booking details | Changes saved successfully | Pass |
| Edit Product (Admin) | Updated product information | Product updated successfully | Pass |
| Edit Service (Admin) | Updated service information | Service updated successfully | Pass |

---

### Delete

| Feature | Test Performed | Expected Result | Outcome |
|---------|----------------|-----------------|---------|
| Delete Booking | Deleted an appointment | Booking removed successfully | Pass |
| Delete Product (Admin) | Deleted a product | Product removed successfully | Pass |
| Delete Service (Admin) | Deleted a service | Service removed successfully | Pass |


## Responsive Design Testing

The application was tested across multiple screen sizes to ensure that the layout remained responsive and user-friendly.

| Device | Result |
|---------|--------|
| Mobile (up to 576px) | Layout displayed correctly and navigation collapsed into a mobile menu. |
| Tablet (768px and above) | Content adjusted correctly with no layout issues. |
| Laptop (992px and above) | All pages displayed as expected with consistent spacing and alignment. |
| Desktop (1200px and above) | Full layout displayed correctly with responsive grids and navigation. |

### Responsive Features Tested

- Navigation bar
- Services Swiper carousel
- Product catalogue
- Product detail page
- Booking form
- Shopping cart
- Authentication pages

All tested features responded correctly across the supported screen sizes.


## Authentication and Authorisation Testing

Authentication and authorisation were tested to make sure users could create an account, log in and log out correctly. Protected pages were also tested to confirm that only logged-in users could access booking, appointment and shopping cart features.

### Authentication Testing

| Test | Expected Result | Actual Result | Outcome |
|---|---|---|:---:|
| Register with valid details | A new account should be created and the user should be logged in | The account was created successfully and the user was logged in | Pass |
| Register with missing information | The form should not submit and validation messages should be displayed | The required fields were highlighted and the account was not created | Pass |
| Register with an existing username | The user should be told that the username is already in use | An error message was displayed and registration was prevented | Pass |
| Log in with valid details | The user should be logged in successfully | The user was logged in and could access protected pages | Pass |
| Log in with incorrect details | Login should fail and an error message should appear | The login failed and an error message was displayed | Pass |
| Log out | The user's session should end | The user was logged out and the public navigation links were displayed | Pass |

### Authorisation Testing

| Test | Expected Result | Actual Result | Outcome |
|---|---|---|:---:|
| Open the Bookings page while logged out | The user should be redirected to the login page | The login page was displayed with the Bookings page included in the `next` URL | Pass |
| Open My Appointments while logged out | The user should be redirected to the login page | The user was redirected to login | Pass |
| Open the cart while logged out | The user should be redirected to the login page | The user was redirected to login | Pass |
| View appointments after logging in | Only appointments belonging to the logged-in user should be displayed | Only the current user's appointments were shown | Pass |
| Edit another user's appointment | Access should be prevented | Django returned a 404 response because the appointment did not belong to the logged-in user | Pass |
| Delete another user's appointment | Access should be prevented | Django returned a 404 response because the appointment did not belong to the logged-in user | Pass |
| Complete a booking while logged in | The booking should be linked to the current user | The booking was saved under the logged-in user's account | Pass |

The appointment edit and delete views use both the appointment ID and the logged-in user when retrieving a booking. This prevents one user from changing or deleting another user's appointment.

### Evidence

The following screenshots show examples of the authentication and authorisation tests.

![Invalid login message](documentation/images/testing/invalid-login.png)

![Successful account registration](documentation/images/testing/account-created.png)

![Protected booking page redirect](documentation/images/testing/login-required-booking.png)

![User appointment ownership protection](documentation/images/testing/appointment-access-protection.png)


## Stripe Checkout Testing

Stripe was tested in test mode to confirm that users could move from the shopping cart to the Stripe-hosted checkout page and complete a test payment.

No real card details or real payments were used during testing.

| Test | Expected Result | Actual Result | Outcome |
|---|---|---|:---:|
| Open checkout with an item in the cart | The user should be redirected to Stripe Checkout | The Stripe-hosted checkout page opened successfully | Pass |
| Check the payment amount | The Stripe total should match the cart total | The correct total was displayed in euros | Pass |
| Complete payment with a valid Stripe test card | The payment should be accepted | Stripe accepted the test payment and redirected to the success page | Pass |
| View payment confirmation | A clear success message should be displayed | The Payment Successful page was displayed | Pass |
| Check the cart after successful payment | The purchased items should be removed from the cart | The cart was cleared after the successful checkout | Pass |
| Cancel the Stripe payment | The user should return to the cart without completing payment | The user returned to the cart and the payment was not completed | Pass |
| Use Buy Now on a product | Checkout should contain only the selected product | Stripe opened checkout for the selected product | Pass |
| Attempt checkout while logged out | The user should be redirected to login | The login page was displayed | Pass |

For the successful payment test, Stripe's standard test card was used:

- Card number: `4242 4242 4242 4242`
- Expiry date: Any future date
- CVC: Any three digits
- Postal code: Any valid postal code

### Stripe Test Evidence

![Shopping cart before checkout](documentation/images/testing/cart-before-checkout.png)

![Stripe test checkout](documentation/images/testing/stripe-checkout.png)

![Successful Stripe payment](documentation/images/testing/payment-successful.png)

![Cart cleared after payment](documentation/images/testing/cart-after-payment.png)


## Browser Compatibility Testing

The application was tested using modern web browsers to ensure a consistent user experience.

| Browser | Result |
|---------|--------|
| Google Chrome | Pass |
| Microsoft Edge | Pass |
| Mozilla Firefox | Pass |

No significant browser-specific issues were identified during testing.


## Bugs Encountered and Fixed

The following issues were encountered during development and resolved before final deployment and testing.

| Bug or Challenge | Cause | Resolution | Status |
|---|---|---|:---:|
| Services disappeared from the homepage after converting the section to dynamic database content. | The `home` view rendered `index.html` without passing the `Service` queryset to the template. | Updated the `home` view to retrieve all services and include them in the template context. | Fixed |
| Hair Braiding image did not display in the service card. | The template attempted to reference `service.image` outside a valid service loop. | Rebuilt the services section using a `{% for service in services %}` loop and loaded images dynamically from the `Service` model. | Fixed |
| Service template produced a `TemplateSyntaxError`. | An `{% if service.image %}` statement was missing its closing `{% endif %}` tag. | Added the missing closing template tag and retested the page. | Fixed |
| Service cards became uneven and partially cut off in the original slider. | The custom JavaScript slider depended on fixed card widths and scroll distances that did not match the responsive layout. | Replaced the custom slider with a responsive Swiper carousel and removed obsolete slider CSS. | Fixed |
| Service carousel arrows and buttons displayed inconsistently. | Old slider rules and duplicate service-card styles conflicted with Swiper styling. | Cleaned the services stylesheet, removed obsolete rules and scoped Swiper styles to `.services-swiper`. | Fixed |
| Product images appeared cropped or excessively zoomed. | Product images used `object-fit: cover`, which cropped images with different proportions. | Changed the product image presentation to `object-fit: contain` and standardised the image area and card layout. | Fixed |
| Product cards and action buttons were not consistently aligned. | Product descriptions had different lengths and the cards did not use a full flex-column layout. | Used Flexbox, equal card sizing and automatic button margins to align the cards and actions. | Fixed |
| Buy Now originally included the existing cart total. | The Buy Now flow reused the cart checkout session. | Separated the Buy Now payment flow so that Stripe receives only the selected product while normal cart checkout continues to use the cart total. | Fixed |
| Customers could select invalid appointment times or dates. | The original booking workflow lacked sufficient server-side validation. | Added validation for past dates, past times, Sundays, opening hours, incomplete fields and duplicate time slots. | Fixed |
| Stripe redirected to a missing success template. | `checkout_success.html` had not yet been created. | Created the success template and connected it to the successful checkout redirect. | Fixed |

### Evidence

Screenshots of relevant testing and validation results will be added after the deployed application has been fully tested.

<!-- Example:
![Booking validation](documentation/images/testing/booking-validation.png)
-->


## Known Bugs

Known bugs will be recorded here after the final deployed application has been tested.

At the time of writing, the application is still undergoing deployment and final validation. Any remaining issues that cannot be resolved before submission will be documented, together with their impact and any planned future solution.

| Known Issue | Impact | Planned Resolution |
|---|---|---|
| To be confirmed during deployed-site testing. | To be confirmed. | To be confirmed. |




### HTML Validation

I tested the deployed site using the W3C Nu HTML Checker to make sure there were no HTML errors or warnings.

The homepage, products page and registration page all passed successfully with no errors or warnings.

The Services, About and Contact sections are all part of the homepage, so they were covered by the homepage validation rather than tested as separate pages.

The Bookings and My Appointments pages require the user to be logged in. Since the validator cannot use my logged-in session, these pages may redirect to the login page. I therefore also checked these pages manually while logged in to make sure they displayed and worked correctly.

| Page | Result |
|---|---|
| Homepage, including Services, About and Contact | Pass |
| Products page | Pass |
| Registration page | Pass |
| Bookings page | Checked manually while logged in |
| My Appointments page | Checked manually while logged in |


![HTML validation result showing no errors or warnings](documentation/images/testing/html-validation-home.png)
