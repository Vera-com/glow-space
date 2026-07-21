# Glow Space

![Responsive Mockup](documentation/responsive-mockup.png)

Glow Space is a full-stack Django web application that combines an online salon booking system with a beauty product e-commerce store. Customers can browse salon services, purchase products, book appointments, and manage their bookings through a secure account.

The application was developed as Milestone Project 4 for the Code Institute Diploma in Full Stack Software Development.



## Live Project

### Live Website

The deployed application can be viewed here:

[Glow Space Live Website](https://glow-space.onrender.com/)

### GitHub Repository

The project source code is available here:

[Glow Space GitHub Repository](https://github.com/Vera-com/glow-space)




## Table of Contents

- [Project Overview](#project-overview)
- [User Experience](#user-experience-ux)
  - [Project Goals](#project-goals)
  - [Target Audience](#target-audience)
  - [User Goals](#user-goals)
  - [Site Owner Goals](#site-owner-goals)
- [Agile Development](#agile-development)
  - [Development Approach](#development-approach)
  - [Version Control](#version-control)
  - [User Stories](#user-stories)
- [Database Design](#database-design)
  - [Entity Relationship Diagram](#entity-relationship-diagram)
  - [Database Models](#database-models)
  - [Model Relationships](#model-relationships)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Security](#security)
- [Testing](#testing)
- [Bugs](#bugs)
  - [Known Limitations](#known-limitations)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)



## Project Overview

Glow Space is designed to provide customers with a modern and convenient online beauty salon experience. The application combines appointment booking with an integrated e-commerce platform, allowing users to browse salon services, purchase beauty products, and manage appointments from a single website.

The project focuses on delivering a clean, responsive and user-friendly interface while demonstrating full-stack web development using Django, PostgreSQL, HTML, CSS, JavaScript.

The application was built with scalability in mind, allowing additional salon services, beauty products and future features to be added as the business develops.


## User Experience (UX)

### Project Goals

The primary goal of Glow Space is to provide customers with an easy-to-use platform where they can:
- Browse salon services.
- Book appointments online.
- Purchase beauty products.
- Manage appointments securely.

The application also provides the salon owner with an administration area where services, products, bookings and customer information can be managed efficiently through Django Admin.

---

### Target Audience

Glow Space is designed for:

- Existing salon customers.
- New customers looking for beauty services.
- Customers interested in purchasing beauty products.
- Users who prefer online appointment booking.
- Mobile, tablet and desktop users.

---

### User Goals

Users should be able to:

- Register for an account.
- Log in securely.
- Browse salon services.
- View product information.
- Purchase beauty products securely.
- Book appointments.
- View their own appointments.
- Edit or cancel their appointments.

---

### Site Owner Goals

The site owner should be able to:

- Manage products.
- Manage services.
- Manage appointments.
- Manage registered users.
- View shopping carts and cart items through Django Admin.
- Maintain a professional online presence for the salon.


## Agile Development

### Development Approach

Glow Space was developed using an iterative approach. Rather than trying to build the entire application at once, I focused on completing one feature at a time before moving on to the next.

Each feature was planned, implemented, tested and then committed to GitHub using clear commit messages. This approach made it easier to track progress, revisit earlier work when necessary, and fix issues without affecting other parts of the application.

Throughout the project, development evolved as new ideas and improvements emerged. Features such as the services carousel, product presentation and booking system were refined over time based on testing and usability considerations.

As the project progressed, I revisited and refined several features as my understanding of Django and user experience grew. This iterative approach helped me improve the overall consistency of the application while reinforcing the importance of testing, incremental development and version control.

---

### Version Control

Git and GitHub were used throughout the project to manage development. Regular commits were made as features were completed or improved, providing a clear record of the project's progress from the initial setup through to the final stages of development.

Regular commits also provided clear milestones throughout development, making it easier to review progress and maintain a stable codebase as new features were introduced.

---

### User Stories

| User Story | Status |
|------------|:------:|
| As a visitor, I can browse salon services so that I can decide what I need. | ✅ |
| As a customer, I can register an account. | ✅ |
| As a customer, I can log in securely. | ✅ |
| As a customer, I can book an appointment. | ✅ |
| As a customer, I can edit my appointment. | ✅ |
| As a customer, I can cancel my appointment. | ✅ |
| As a customer, I can browse products. | ✅ |
| As a customer, I can view product details. | ✅ |
| As a customer, I can add products to my cart. | ✅ |
| As a customer, I can complete a purchase. | ✅ |
| As an administrator, I can manage products. | ✅ |
| As an administrator, I can manage services. | ✅ |
| As an administrator, I can manage bookings. | ✅ |


## Database Design

Glow Space uses a relational PostgreSQL database managed through Django's ORM. The database has been designed to separate responsibilities across individual models while maintaining clear relationships between users, bookings, services, products and shopping carts.

The design allows authenticated users to book salon appointments, browse products, manage shopping carts and complete purchases, while administrators can manage services, products and appointments through the Django administration panel.

### Entity Relationship Diagram

![Database ERD](documentation/images/glow-space-erd.png)

---

### Database Models

The application is built around six main database models. Each model has a specific responsibility and works together to provide the booking and e-commerce functionality of the website.

| Model | Purpose |
|---|---|
| **User** | Uses Django's built-in authentication system to manage user registration, login and account information. |
| **Service** | Stores the salon services offered by Glow Space, including the service name, description, duration, price and optional image displayed on the website. |
| **Booking** | Stores appointment details submitted by authenticated users, including the selected service, preferred date and time, customer name, email address and creation date. |
| **Product** | Stores beauty products available for purchase, including the product name, description, price, optional image, availability status and creation date. |
| **Cart** | Represents one shopping cart linked to one registered user and groups the products selected before checkout. |
| **CartItem** | Connects a product to a shopping cart and stores the quantity selected. It also calculates the subtotal for that item. |

---

### Model Relationships

- One user can have multiple bookings.
- One user can have one shopping cart.
- One cart can contain multiple cart items.
- One product can appear in multiple cart items.
- Each cart item belongs to one cart and references one product.
- The selected service in the Booking model is stored as a predefined text choice rather than as a foreign key to the Service model.


## Features

Glow Space includes a range of features that support both salon appointment booking and online product purchasing.

### User Registration and Authentication

Users can create an account, log in and log out securely using Django's built-in authentication system.

Authentication is required for:

- Booking appointments.
- Viewing personal appointments.
- Editing appointments.
- Cancelling appointments.

Authentication is not required for:

- Browsing products.
- Accessing the shopping cart.
- Completing a purchase.

---

### Responsive Navigation

The navigation bar provides access to the main sections of the website, including:

- Home.
- Services.
- Products.
- Bookings.
- Contact.
- My Appointments.

The navigation menu adapts for smaller screen sizes to improve usability on mobile and tablet devices.

---

### Salon Services Carousel

Salon services are loaded dynamically from the database and displayed in a responsive Swiper carousel.

Each service card includes:

- Service name.
- Description.
- Duration, where provided.
- Price.
- Service image, where available.
- A booking button.

The carousel displays a different number of service cards depending on the screen size.

---

### Appointment Booking

Authenticated users can submit appointment requests by entering:

- Their name.
- Email address.
- Selected service.
- Preferred date.
- Preferred time.

The booking system validates the submitted details and prevents:

- Incomplete submissions.
- Dates in the past.
- Times outside opening hours.
- Sunday bookings.
- Duplicate bookings for the same date and time.

Successful bookings are saved to the database and displayed in the user's appointment area.

---

### Appointment Management

Users can view their own appointments after logging in.

They can also:

- Edit an existing appointment.
- Update the service, date or time.
- Cancel an appointment.
- Receive success or error messages after an action.

---

### Product Catalogue

Available beauty products are loaded from the database and displayed in a responsive product grid.

Each product card includes:

- Product image.
- Product name.
- Description.
- Price.
- A link to the product detail page.

---

### Product Detail Page

Each product has a dedicated detail page where users can view more information before making a purchase.

The page includes:

- A larger product image.
- Full product description.
- Price.
- Add to Cart button.
- Buy Now button.

---

### Shopping Cart

Authenticated users can add products to their personal shopping cart.

The cart allows users to:

- Increase item quantities.
- Reduce item quantities.
- Remove products.
- View item subtotals.
- View the total cart value.

Each registered user has one shopping cart linked to their account.

---

### Stripe Checkout

Glow Space uses Stripe Checkout to process test payments securely.

Users can proceed from the cart to the Stripe-hosted checkout page. After a successful payment, the cart is cleared and a confirmation message is displayed.

---

### Django Administration

The Django administration panel allows the site owner to manage:

- Users.
- Services.
- Products.
- Bookings.
- Shopping carts.
- Cart items.

This gives the administrator control over the main content and data used by the application.

---

### User Feedback Messages

Django messages are used throughout the application to provide clear feedback after actions such as:

- Successful registration.
- Successful appointment booking.
- Appointment updates.
- Appointment cancellation.
- Adding products to the cart.
- Successful payment.
- Validation errors.

---

### Responsive Design

The application is designed to work across:

- Mobile phones.
- Tablets.
- Laptops.
- Desktop screens.

Responsive layouts are used for the navigation bar, service carousel, product grid, booking page, product details and authentication pages.


## Technologies Used

### Languages

The following programming languages were used throughout the development of this project:

- HTML5
- CSS3
- JavaScript
- Python

### Frameworks and Libraries

The following frameworks and libraries were used:

- Django
- Bootstrap 5
- Swiper.js
- Gunicorn
- Stripe

### Database

- PostgreSQL (Production)
- SQLite (Development)

### Version Control

- Git
- GitHub

### Deployment

- Render
- Gunicorn
- WhiteNoise

### Development Tools

- Visual Studio Code
- GitHub Desktop
- Chrome Developer Tools
- Draw.io (ER Diagram)
- Favicon.io
- Google Fonts

### Django Packages

The following Python packages were used to support the development, deployment and functionality of the application:

- **asgiref** – Supports Django's asynchronous features.
- **dj-database-url** – Parses the database URL for PostgreSQL deployment.
- **Pillow** – Handles image uploads for products and services.
- **psycopg2-binary** – PostgreSQL database adapter used in production.
- **python-decouple** – Stores sensitive information such as secret keys and API credentials in environment variables.
- **requests** – Handles HTTP requests to external services where required.
- **WhiteNoise** – Serves static files efficiently in the deployed application.

---

### Payment Processing

- **Stripe Checkout** – Processes secure online payments for customer purchases.


## Security

Security was considered throughout development and deployment.

The following measures are used:

- Django's authentication system manages user passwords securely.
- Passwords are not stored as plain text.
- Booking, appointment, cart and checkout pages are protected with `@login_required`.
- Appointment ownership is checked before editing or deleting a booking.
- Stripe handles payment-card information on its hosted checkout page.
- The Django secret key, database URL and Stripe keys are stored in environment variables.
- The local `.env` file is included in `.gitignore`.
- Sensitive credentials are not committed to GitHub.
- Production `DEBUG` is controlled through an environment variable and is disabled on the deployed application.
- CSRF protection is included on forms that submit data.



## Testing

Testing was carried out throughout the development of Glow Space rather than being left until the end of the project. Features were tested after implementation and were retested after later changes to ensure that existing functionality continued to work.

Testing covered:

- Manual feature testing.
- User story testing.
- CRUD functionality.
- Authentication and authorisation.
- Appointment ownership protection.
- Form and server-side validation.
- Stripe test payments.
- Responsive design.
- Browser compatibility.
- HTML validation.
- CSS validation.
- Python code style using Flake8.
- Django system and migration checks.
- Lighthouse auditing.
- Bug identification, correction and retesting.

A full record of the testing process, results, screenshots and resolved issues is available in the [TESTING.md](TESTING.md) file.


## Bugs

Several issues were found and corrected during development. These included:

- Services disappearing when the database queryset was not passed to the homepage template.
- A service image failing to display because it was referenced outside the service loop.
- A missing Django template closing tag causing a `TemplateSyntaxError`.
- Uneven service cards and unreliable carousel movement caused by the original custom slider.
- Conflicting CSS rules affecting the Swiper navigation controls.
- Product images appearing cropped because of `object-fit: cover`.
- Product cards becoming uneven because of different description lengths.
- Buy Now initially including products that were already in the shopping cart.
- Appointment dates and times initially accepting invalid selections.
- A missing Stripe success template.
- The default Django 404 page appearing instead of the custom error page while `DEBUG` was enabled locally.
- Users initially being able to enter a different name when creating a booking.
- Edit and delete appointment views initially requiring additional ownership protection.

These issues were corrected and retested. Full details are recorded in [TESTING.md](TESTING.md).

### Known Limitations

- Glow Space currently uses one main custom Django app for the closely related salon, booking, product and cart functionality. A future version could separate these features into individual reusable applications.
- The selected booking service is stored as a predefined text choice rather than as a foreign key to the `Service` model.
- The project currently records successful payments but does not store completed purchases in a dedicated Order model.
- Cancelling Stripe Checkout returns the user to the cart but does not currently display a dedicated payment-cancellation message.
- Service and product images can affect loading performance because several uploaded images are relatively large.
- Lighthouse results may vary between runs because of network conditions, Render response times, browser activity and external resources.



## Deployment

Glow Space is deployed on Render. The production application uses PostgreSQL for database storage and AWS S3 for uploaded media files.

- **Render** hosts the Django application.
- **PostgreSQL** stores users, bookings, services, products, carts and cart items.
- **AWS S3** stores uploaded product and service images.
- **WhiteNoise** serves static files such as CSS, JavaScript and fixed website images.
- **Gunicorn** runs the Django application in production.

### Clone and Run the Project Locally

1. Clone the GitHub repository:

```bash
git clone YOUR-GITHUB-REPOSITORY-URL
```

2. Open the project folder:

```bash
cd glow-space
```

3. Create a virtual environment:

```bash
python -m venv venv
```

4. Activate the virtual environment.

On macOS or Linux:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\Scripts\activate
```

5. Install the required packages:

```bash
pip install -r requirements.txt
```

6. Create a `.env` file in the project root and add the required environment variables:

```text
SECRET_KEY=your-secret-key
DEBUG=True
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

When using PostgreSQL and AWS S3, also add:

```text
DATABASE_URL=your-postgresql-database-url
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
AWS_STORAGE_BUCKET_NAME=your-s3-bucket-name
AWS_S3_REGION_NAME=your-aws-region
```

The `.env` file is included in `.gitignore` and must not be committed to GitHub.

7. Apply the database migrations:

```bash
python manage.py migrate
```

8. Create an administrator account:

```bash
python manage.py createsuperuser
```

9. Run the local server:

```bash
python manage.py runserver
```

10. Open the application at:

```text
http://127.0.0.1:8000/
```

### AWS S3 Media Storage

AWS S3 is used to store product and service images uploaded through Django Admin.

PostgreSQL stores the image reference, while the actual image file is stored in the S3 bucket. This allows uploaded images to remain available after Render restarts or redeploys the application.

The AWS credentials are stored securely as environment variables and are not committed to GitHub.

### Render Deployment

1. The completed project was pushed to GitHub.
2. A new Web Service was created on Render.
3. The GitHub repository was connected to the Render service.
4. The following build command was used:

```bash
./build.sh
```

5. The following start command was used:

```bash
gunicorn config.wsgi
```

6. The required environment variables were added to Render:

```text
SECRET_KEY
DEBUG
DATABASE_URL
STRIPE_PUBLIC_KEY
STRIPE_SECRET_KEY
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_STORAGE_BUCKET_NAME
AWS_S3_REGION_NAME
ALLOWED_HOSTS
CSRF_TRUSTED_ORIGINS
```

7. Production debugging was disabled:

```text
DEBUG=False
```

8. The deployed domain was added to the allowed hosts and trusted origins:

```text
ALLOWED_HOSTS=glow-space.onrender.com
CSRF_TRUSTED_ORIGINS=(https://glow-space.onrender.com)
```

9. After deployment, the live application was tested to confirm that:

- Static files loaded correctly.
- Uploaded images loaded from AWS S3.
- PostgreSQL data remained available.
- Registration and login worked.
- Appointment management worked.
- Shopping cart and Stripe test checkout worked.
- Custom error pages displayed correctly.


## Credits

### Content

All salon descriptions, product descriptions and written website content were created specifically for Glow Space.

### Images

Images used for services, products and page presentation were created, edited or sourced from royalty-free image platforms where applicable.

The salon image in the booking session and some images in the services section were sourced from unsplash.

### Libraries and Documentation

The following documentation and libraries supported the development of the project:

- Django documentation for models, views, templates, authentication, messages and deployment configuration.
- Stripe documentation for Checkout integration and test payments.
- Swiper.js documentation for the responsive services carousel.
- Font Awesome for navigation and social-media icons.
- Render documentation for web-service and PostgreSQL deployment.
- WhiteNoise documentation for serving static files.

### Code

All custom project code was written and adapted specifically for Glow Space. External libraries are loaded separately and are identified in the project documentation and source files.


## Acknowledgements

I would like to express my sincere appreciation to:

- The Code Institute team and mentors for delivering useful webinars and guidance throughout the MS4 project.
- The Code Institute tutors and support team for their assistance during development.
- The Code Institute learning materials for providing the foundation for this project.
- My family for their patience, encouragement and support throughout my studies.
- Everyone who tested the application and provided valuable feedback that helped improve the user experience.








