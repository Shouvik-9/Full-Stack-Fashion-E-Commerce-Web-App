# 🛍️ Glow Threads — Full Stack Fashion E-Commerce Web App

[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=🛍️+Glow+Threads+is+a+full-stack+fashion+e-commerce+web+app+built+with+the+MERN+stack.;🚀+It+offers+a+smooth+shopping+experience+to+browse,+add+to+cart,+and+purchase+securely.;Includes+an+admin+dashboard+for+product+and+order+management.;Integrates+Cloudinary+for+image+storage+and+is+fully+responsive+across+devices.&center=true&color=FFFFFF&duration=7000&multiline=false&width=1000)](https://github.com/Shouvik-9)

<img width="500" height="500" alt="Image" src="https://github.com/user-attachments/assets/9a19db9c-fd21-44af-aff6-284a0bbba4e3" />

> **Glow Threads** is a modern, responsive, and secure fashion e-commerce platform built with the MERN stack.  
> Users can browse, filter, add to cart, and purchase fashion products, while admins can manage products and orders from a feature-rich dashboard.

---

## 🚀 Live Demo
👉 **[https://glowthreads-frontend.vercel.app/](https://glowthreads-frontend.vercel.app/)**

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, Vite, Tailwind CSS, JavaScript, HTML5, CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Authentication** | JSON Web Token (JWT) |
| **File Uploads** | Multer + Cloudinary |
| **Deployment** | Vercel |
| **Tools** | Git, npm, ESLint |

---

## ✨ Features

### 👥 User Features
- 🛒 Browse and search products  
- ❤️ Add items to cart  
- 🔐 Secure user authentication using JWT  
- 💳 Checkout via **Stripe** and **Razorpay**  
- 📱 Fully responsive for all devices  

### 🛠️ Admin Features
- 🧾 Add, List, and Delete Products  
- 📦 View and Update Order Status  
- 👨‍💻 Admin Login with Authentication  
- ☁️ Image Uploads through Cloudinary  
- 📊 Dashboard with real-time updates  

---

## 🗂️ Project Structure

```bash
Directory structure:
└── shouvik-9-full-stack-fashion-e-commerce-web-app/
    ├── admin/
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── tailwind.config.js
    │   ├── vercel.json
    │   ├── vite.config.js
    │   └── src/
    │       ├── App.jsx
    │       ├── index.css
    │       ├── main.jsx
    │       ├── assets/
    │       │   └── assets.js
    │       ├── components/
    │       │   ├── Login.jsx
    │       │   ├── Navbar.jsx
    │       │   └── Sidebar.jsx
    │       └── pages/
    │           ├── Add.jsx
    │           ├── List.jsx
    │           └── Orders.jsx
    ├── backend/
    │   ├── package.json
    │   ├── server.js
    │   ├── vercel.json
    │   ├── config/
    │   │   ├── cloudinary.js
    │   │   └── mongodb.js
    │   ├── controllers/
    │   │   ├── cartController.js
    │   │   ├── orderController.js
    │   │   ├── productController.js
    │   │   └── userController.js
    │   ├── middleware/
    │   │   ├── adminAuth.js
    │   │   ├── auth.js
    │   │   └── multer.js
    │   ├── models/
    │   │   ├── orderModel.js
    │   │   ├── productModel.js
    │   │   └── userModel.js
    │   └── routes/
    │       ├── cartRoute.js
    │       ├── orderRoute.js
    │       ├── productRoute.js
    │       └── userRoute.js
    └── frontend/
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        ├── vercel.json
        ├── vite.config.js
        └── src/
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── assets/
            │   └── assets.js
            ├── components/
            │   ├── BestSeller.jsx
            │   ├── CartTotal.jsx
            │   ├── Footer.jsx
            │   ├── Hero.jsx
            │   ├── LatestCollection.jsx
            │   ├── Navbar.jsx
            │   ├── NewsletterBox.jsx
            │   ├── OurPolicy.jsx
            │   ├── ProductItem.jsx
            │   ├── RelatedProduct.jsx
            │   ├── SearchBar.jsx
            │   └── Title.jsx
            ├── context/
            │   └── ShopContext.jsx
            └── pages/
                ├── About.jsx
                ├── Cart.jsx
                ├── Collection.jsx
                ├── Contact.jsx
                ├── Home.jsx
                ├── Login.jsx
                ├── Orders.jsx
                ├── PlaceOrder.jsx
                ├── Product.jsx
                └── Verify.jsx

```
## ⚡ How to Run Locally

### 🖥️ Backend Setup
```
cd backend
npm install
npm run server
```
### 💻 Frontend Setup
```
cd frontend
npm install
npm run dev
```
### 🧑‍💼 Admin Dashboard Setup
```
cd admin
npm install
npm run dev
```
---

## 🖼️ Screenshots
### 🏠 Home Page

