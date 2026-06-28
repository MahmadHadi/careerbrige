# Career Bridge Backend

Career Bridge is a mentorship platform backend built with the MERN stack. It connects students with industry experts by allowing students to discover mentors, book mentorship sessions, and receive career guidance. Experts can manage their professional profiles and availability, while administrators can verify experts and manage platform users.

## Features

* JWT Authentication & Authorization
* Role-Based Access Control (Student, Expert, Admin)
* Expert Profile Management
* Session Booking System
* Booking Status Management
* Admin Dashboard APIs
* Input Validation using Zod
* Password Hashing with bcrypt
* Secure REST APIs
* MongoDB Database
* TypeScript Support

---

## Tech Stack

| Technology         | Purpose              |
| ------------------ | -------------------- |
| Node.js            | Runtime Environment  |
| Express.js         | Backend Framework    |
| TypeScript         | Programming Language |
| MongoDB            | Database             |
| Mongoose           | ODM                  |
| JWT                | Authentication       |
| bcrypt             | Password Hashing     |
| Zod                | Request Validation   |
| Helmet             | Security Headers     |
| Express Rate Limit | Rate Limiting        |

---

## Project Structure

```text
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── types/
├── validators/
└── server.ts
```

---

## User Roles

### Student

* Register & Login
* Browse Experts
* Book Mentorship Sessions
* View Booking History

### Expert

* Register & Login
* Create Professional Profile
* Update Profile
* View Student Bookings
* Accept/Reject Bookings

### Admin

* View All Users
* View All Experts
* Verify Expert Profiles
* Delete Users

---

## API Modules

### Authentication

* Register User
* Login User

### Expert

* Create Expert Profile
* Get All Experts
* Update Expert Profile

### Booking

* Create Booking
* View Student Bookings
* View Expert Bookings
* Update Booking Status

### Admin

* Get All Users
* Get All Experts
* Verify Expert
* Delete User

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

### Start Development Server

```bash
npm run dev
```

---

## API Base URL

```
http://localhost:5000/api
```

---

## Authentication

Protected routes require a JWT access token.

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Resource Created      |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Resource Not Found    |
| 500  | Internal Server Error |

---

## Future Improvements

* Video Meeting Integration
* Payment Gateway
* Email Notifications
* Calendar Integration
* Expert Ratings & Reviews
* File Upload Support
* Chat System
* Automated Testing with Jest
* Docker Deployment

---

## License

This project is created for learning and educational purposes.
