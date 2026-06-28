# Career Bridge Backend API Documentation

## Base URL

```http
http://localhost:5000/api
```

---

# Authentication

Protected endpoints require a JWT access token.

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# Authentication APIs

## Register User

Create a new user account.

### Endpoint

```http
POST /auth/register
```

### Authentication

No

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

### Success Response

**201 Created**

```json
{
  "message": "User registered successfully",
  "user": {},
  "token": "<JWT_TOKEN>"
}
```

### Possible Errors

| Status | Description           |
| ------ | --------------------- |
| 400    | Validation Error      |
| 409    | Email Already Exists  |
| 500    | Internal Server Error |

---

## Login User

Authenticate a user and return a JWT token.

### Endpoint

```http
POST /auth/login
```

### Authentication

No

### Request Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Success Response

**200 OK**

```json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>",
  "user": {}
}
```

### Possible Errors

| Status | Description           |
| ------ | --------------------- |
| 400    | Invalid Request       |
| 401    | Invalid Credentials   |
| 500    | Internal Server Error |

---

# Expert APIs

## Create Expert Profile

Create a professional mentor profile.

### Endpoint

```http
POST /expert
```

### Authentication

Expert

### Headers

```http
Authorization: Bearer <JWT_TOKEN>
```

### Request Body

```json
{
  "bio": "MERN Stack mentor",
  "company": "Cosmos Classes",
  "designation": "Software Engineer",
  "education": [
    {
      "institution": "GMIU",
      "degree": "B.Tech",
      "field": "IT",
      "year": 2027
    }
  ],
  "socialLinks": {
    "linkedin": "https://linkedin.com/in/example"
  },
  "sessionTypes": [
    "call",
    "video"
  ],
  "availability": [
    {
      "day": "Monday",
      "startTime": "09:00",
      "endTime": "12:00"
    }
  ],
  "tags": [
    "Backend",
    "Node.js",
    "MongoDB"
  ],
  "studentBackground": [
    "IT",
    "Computer Science"
  ],
  "portfolioImages": []
}
```

### Success Response

**201 Created**

```json
{
  "message": "Expert profile created successfully",
  "expert": {}
}
```

---

## Get All Experts

Returns all expert profiles.

### Endpoint

```http
GET /expert
```

### Authentication

Required

### Success Response

**200 OK**

```json
[
  {
    "name": "John",
    "designation": "Software Engineer",
    "company": "Google"
  }
]
```

---

## Update Expert Profile

Update an existing expert profile.

### Endpoint

```http
PUT /expert/:id
```

### Authentication

Expert

### Request Body

```json
{
  "bio": "Updated Bio",
  "company": "Razorpay",
  "designation": "Lead Engineer"
}
```

### Success Response

**200 OK**

```json
{
  "message": "Expert profile updated successfully"
}
```

---

# Booking APIs

## Create Booking

Book a mentorship session.

### Endpoint

```http
POST /booking
```

### Authentication

Student

### Request Body

```json
{
  "expert": "EXPERT_ID",
  "session_type": "video",
  "meeting_url": "https://meet.google.com/abc",
  "date": "2026-04-01",
  "start_time": "2026-04-01T09:00:00.000Z",
  "end_time": "2026-04-01T10:00:00.000Z",
  "student_message": "Need career guidance."
}
```

### Success Response

**201 Created**

```json
{
  "message": "Booking created successfully",
  "booking": {}
}
```

---

## Get Student Bookings

Returns all bookings created by the logged-in student.

### Endpoint

```http
GET /booking/student
```

### Authentication

Student

### Success Response

**200 OK**

```json
[
  {
    "status": "pending"
  }
]
```

---

## Get Expert Bookings

Returns bookings assigned to the logged-in expert.

### Endpoint

```http
GET /booking/expert
```

### Authentication

Expert

### Success Response

**200 OK**

```json
[
  {
    "status": "confirmed"
  }
]
```

---

## Update Booking Status

Update booking status.

### Endpoint

```http
PUT /booking/:id
```

### Authentication

Expert

### Request Body

```json
{
  "status": "confirmed"
}
```

### Success Response

**200 OK**

```json
{
  "message": "Booking status updated successfully"
}
```

---

# Admin APIs

## Get All Users

Returns all registered users.

### Endpoint

```http
GET /admin
```

### Authentication

Admin

### Success Response

**200 OK**

```json
[
  {
    "name": "John",
    "role": "student"
  }
]
```

---

## Get All Experts

Returns all expert profiles.

### Endpoint

```http
GET /admin/all-expert
```

### Authentication

Admin

### Success Response

**200 OK**

```json
[
  {
    "name": "John",
    "isVerified": false
  }
]
```

---

## Verify Expert

Approve or reject an expert profile.

### Endpoint

```http
PUT /admin/verify-expert/:id
```

### Authentication

Admin

### Request Body

```json
{
  "isVerified": true
}
```

### Success Response

**200 OK**

```json
{
  "message": "Expert verification updated successfully"
}
```

---

## Delete User

Delete a user account.

### Endpoint

```http
DELETE /admin/user/:id
```

### Authentication

Admin

### Success Response

**200 OK**

```json
{
  "message": "User deleted successfully"
}
```

---

# Common HTTP Status Codes

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Success               |
| 201         | Created               |
| 400         | Bad Request           |
| 401         | Unauthorized          |
| 403         | Forbidden             |
| 404         | Not Found             |
| 409         | Conflict              |
| 500         | Internal Server Error |

---

# Authentication Flow

```text
Register
    │
    ▼
Login
    │
    ▼
Receive JWT Token
    │
    ▼
Send Token in Authorization Header
    │
    ▼
Access Protected APIs
```

---

# Roles & Permissions

| Endpoint              | Student | Expert | Admin |
| --------------------- | :-----: | :----: | :---: |
| Register              |    ✅    |    ✅   |   ✅   |
| Login                 |    ✅    |    ✅   |   ✅   |
| Create Expert Profile |    ❌    |    ✅   |   ❌   |
| Get Experts           |    ✅    |    ✅   |   ✅   |
| Update Expert         |    ❌    |    ✅   |   ❌   |
| Create Booking        |    ✅    |    ❌   |   ❌   |
| Student Bookings      |    ✅    |    ❌   |   ❌   |
| Expert Bookings       |    ❌    |    ✅   |   ❌   |
| Update Booking Status |    ❌    |    ✅   |   ❌   |
| Get All Users         |    ❌    |    ❌   |   ✅   |
| Get All Experts       |    ❌    |    ❌   |   ✅   |
| Verify Expert         |    ❌    |    ❌   |   ✅   |
| Delete User           |    ❌    |    ❌   |   ✅   |
