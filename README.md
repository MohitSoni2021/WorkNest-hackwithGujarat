# 🚀 Hackathon Project: Gigs Marketplace

Welcome to our Gigs Marketplace platform! Below you’ll find all the essential links, tech stack, project features, and instructions to get started.

---

## 📂 Important Links

- 🎥 [📑 Presentation Video Link](https://your-presentation-link.com)
- 🎥 [📑 Project Overview Video Link](https://your-project-overview-link.com)

---

## 💻 Tech Stack

### Frontend:
- ⚛️ **React.js**
- 📜 **JavaScript**
- 🌐 **REST API**
- 🎨 **SASS**
- 🏷️ **HTML5**

### Backend:
- 🟢 **Node.js**
- ⚫ **Express.js**
- 🍃 **MongoDB**

---

## 🌟 Features

### 🚀 Essential Features

- Registration Form: Sign up quickly and securely.
- Login Form: Access your account with ease.
- Gig Organize Form: Simplified form to help you create and manage your gigs.
- Sliding Menu: Navigate through different sections effortlessly.
- All Categories Displayed: Browse gigs across various categories.
- Detailed View: See comprehensive details of each gig.
- Manage Your Gigs: Easily create, update, or delete your gigs.
- Detailed Gig Information: All you need to know about a gig in one place.
- Keyword-Based Search: Find gigs using keywords relevant to your needs.
- Cloudinary Integration: Manage and upload images seamlessly.


<br />

### 🚀 Advanced Features

- Create New Gigs: Easily create and publish new gigs.
- Seller-Exclusive Deletion: Only sellers can delete their gigs.
- Buyer Reviews: Buyers can leave comments and rate gigs with stars.
- Price Range Filtering: Filter gigs based on your budget.
- Sort Gigs: Organize gigs based on various criteria.
- My Orders Section: View details of all the gigs you've purchased.
- Review and Rate Gigs: Provide feedback and star ratings for gigs you've ordered.
- Stripe Integration: Order gigs securely using Stripe payment gateway.
- Payments Page: A dedicated page for handling payments smoothly.



## Getting Started

This project was built using React, Redux, Sass, HTML, JavaScript, Rest API, Node JS, Express and MongoDB with JWT and Stripe integration. It is an freelance outsourcing web application and for running on your local environment you should follow these guidelines.

## 1) Clone the repository using:
<br/>
2) Run the following in both the "client" and "server" folders:
```bash
npm install 
```
3) Start MongoDB and set up the following ENV files:

### Server
```
`JWT_SECRET`
e.g. this_is_secret_123

`MONGODB_URI`
e.g. mongodb cluster URI

`STRIPE_SECRET`
e.g. Secret key from stripe dashboard

`NODE_ENV`
e.g. 'development' for local and 'production' for production

`DEV_CORS_ORIGIN`
e.g. http://localhost:6173 (client localhost)

`PROD_CORS_ORIGIN`
e.g. client deployed link (https://yourProjectName.com) 
```
### Client
```
`VITE_API_URL`
e.g. http://localhost:3000/api or production deployed server link

`VITE_STRIPE_PUBLISHABLE_KEY`
e.g. Publishable key from stripe dashboard
```
4) Run following in both "client" and "server" folders:
```bash
npm run dev
```