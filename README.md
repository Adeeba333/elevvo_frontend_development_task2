## Responsive Contact Form

A clean and responsive contact form built with **HTML5, CSS3, and vanilla JavaScript**. The project focuses on creating a user-friendly form that works well across desktop and mobile screen sizes while providing basic client-side validation.

## Project Overview

This project was developed as part of **Task 2 of the Elevvo Pathways Frontend Development Internship**.

The goal was to build a responsive contact form with a clean layout, properly spaced input fields, and basic JavaScript validation. The form allows users to provide their contact information, select a subject, write a message, choose a preferred contact method, and provide consent before submitting.

## Project Objective

The main objective of this project is to create a responsive and accessible contact form that provides a simple way for users to submit their information and messages.

The project focuses on:

- Creating a structured form using semantic HTML5.
- Designing a clean and responsive interface with CSS3.
- Making the form usable on both mobile and desktop screens.
- Adding client-side form validation using JavaScript.
- Providing clear error messages when invalid information is entered.
- Improving usability with accessible labels, focus states, and ARIA-related attributes.

## Features

- **Responsive Design** — Works across mobile and desktop screen sizes.
- **Full Name Field** — Collects the user's name.
- **Email Validation** — Checks whether a valid email format is provided.
- **Phone Number Field** — Accepts optional phone numbers with up to 11 digits.
- **Subject Selection** — Provides predefined contact subjects.
- **Message Field** — Allows users to enter their message.
- **Preferred Contact Method** — Users can choose between email and phone.
- **Consent Checkbox** — Requires users to provide consent before submission.
- **JavaScript Validation** — Checks required fields and input formats.
- **Error Messages** — Displays specific messages when validation fails.
- **Success Message** — Displays a confirmation message after successful validation.
- **Reset Button** — Clears the form and removes validation messages.
- **Responsive Layout** — Uses CSS media queries to adjust the layout for larger screens.
- **Keyboard-Friendly Focus States** — Provides visible focus styling for form controls.

##  Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Creates the semantic structure of the contact form |
| **CSS3** | Handles styling, spacing, layout, responsiveness, and visual effects |
| **JavaScript (ES6+)** | Handles form validation, DOM manipulation, and user interactions |
| **CSS Media Queries** | Adjusts the layout for different screen sizes |
| **Regular Expressions** | Used to validate email and phone number formats |

##  Project Structure

```text
elevvo_frontend_development_task2/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the main structure of the contact form, including:

- Contact information fields
- Subject selection
- Message textarea
- Preferred contact method
- Consent checkbox
- Submit and reset buttons
- Error and success message elements

### `style.css`

Controls the visual appearance and responsive behavior of the form. It includes:

- Form and field styling
- Responsive layout
- CSS Grid/Flexbox-based button layout
- Focus effects
- Error styling
- Button hover effects
- Desktop media query
- Background and card styling

### `script.js`

Provides the form's interactive functionality. It handles:

- Form submission
- Required field validation
- Email format validation
- Phone number validation
- Message length validation
- Consent validation
- Error message display
- Success message display
- Form reset behavior

## Form Validation

The JavaScript validation checks the following:

### Full Name
The field cannot be empty.

### Email
The field is required and must follow a valid email format.

Example:

```text
example@email.com
```

### Phone Number
The phone number is optional. If provided, it must contain only digits and can contain up to 11 digits.

### Subject
Users must select one of the available subjects.

### Message
The message cannot be empty and must contain at least 10 characters.

### Consent
Users must check the consent box before the form can be successfully submitted.

##  Responsive Design

The form is designed to work on different screen sizes.

On smaller screens, the form uses a single-column layout with full-width inputs and buttons. On larger screens, additional spacing is applied and the Submit and Reset buttons are displayed side by side.

CSS media queries are used to adjust the layout when the screen width reaches **768px or more**.

## Accessibility Considerations

Accessibility was considered during the development of the form.

The project includes:

- Proper `<label>` elements connected to form controls.
- Semantic `<fieldset>` and `<legend>` elements.
- Visible focus indicators.
- `aria-label` for the contact form.
- `aria-describedby` for the phone number instructions.
- Keyboard-friendly form controls.
- Clear validation messages.
- Meaningful button labels.

## How to Run

1. Download or clone the repository.
2. Open the project folder in **Visual Studio Code**.
3. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in a web browser.
5. Fill in the form and test the validation features.

You can also use the **Live Server** extension in Visual Studio Code for easier