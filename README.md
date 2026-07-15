# Glow Space

![Responsive Mockup](documentation/responsive-mockup.png)

Glow Space is a full-stack Django web application that combines an online salon booking system with a beauty product e-commerce store. Customers can browse beauty services, purchase products, book appointments, and manage their bookings through a secure account.

The application was developed as Milestone Project 4 for the Code Institute Diploma in Full Stack Software Development.


## Live Project

### Live Website

*(Render deployment link will be added after deployment.)*

### GitHub Repository

*(GitHub repository link will be added here.)*


## Table of Contents

- [Project Overview](#project-overview)
- [User Experience (UX)](#user-experience-ux)
  - [Project Goals](#project-goals)
  - [Target Audience](#target-audience)
  - [User Goals](#user-goals)
  - [Site Owner Goals](#site-owner-goals)
- [Agile Development](#agile-development)
 - [Development Approach](#development-approach)
  - [Version Control](#version-control)
  - [User Stories](#user-stories)
- [Database Design](#database-design)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)


## Project Overview

Glow Space is designed to provide customers with a modern and convenient online beauty salon experience. The application combines appointment booking with an integrated e-commerce platform, allowing users to browse salon services, purchase beauty products, and manage appointments from a single website.

The project focuses on delivering a clean, responsive and user-friendly interface while demonstrating full-stack web development using Django, PostgreSQL, HTML, CSS, JavaScript and Bootstrap.

The application was built with scalability in mind, allowing additional salon services, beauty products and future features to be incorporated with minimal changes to the existing structure.


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
- Purchase products.
- Book appointments.
- Manage appointments.
- View previous bookings.

---

### Site Owner Goals

The site owner should be able to:

- Manage products.
- Manage services.
- Manage appointments.
- Manage customer information.
- Process customer orders.
- Present a professional online presence.


## Agile Development

### Development Approach

Glow Space was developed using an iterative approach. Rather than trying to build the entire application at once, I focused on completing one feature at a time before moving on to the next.

Each feature was planned, implemented, tested and then committed to GitHub using clear commit messages. This approach made it easier to track progress, revisit earlier work when necessary, and fix issues without affecting other parts of the application.

Throughout the project, development evolved as new ideas and improvements emerged. Features such as the services carousel, product presentation and booking system were refined over time based on testing and usability considerations.

As the project progressed, I revisited and refined several features as my understanding of Django and user experience grew. This iterative approach helped me improve the overall consistency of the application while reinforcing the importance of testing, incremental development and version control.


### Version Control

Git and GitHub were used throughout the project to manage development. Regular commits were made as features were completed or improved, providing a clear record of the project's progress from the initial setup through to the final stages of development.

Regular commits also provided clear milestones throughout development, making it easier to review progress and maintain a stable codebase as new features were introduced.


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

![Database ERD](documentation/erd.png)

### Database Models

The application is built around six main database models. Each model has a specific responsibility and works together to provide the booking and e-commerce functionality of the website.

| Model | Purpose |
|-------|---------|
| **User** | Uses Django's built-in authentication system to manage user registration, login and account information. |
| **Service** | Stores the salon services offered by Glow Space, including the service name, description, price and image displayed on the website. |
| **Booking** | Stores appointment details submitted by authenticated users, including the selected service, preferred date and time, and customer contact information. |
| **Product** | Stores beauty products available for purchase, including product name, description, price, image and availability status. |
| **Cart** | Represents an individual shopping cart linked to a registered user and groups all selected products before checkout. |
| **CartItem** | Stores each product added to a shopping cart along with its quantity, creating the relationship between the cart and individual products.

