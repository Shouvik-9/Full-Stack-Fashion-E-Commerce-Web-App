# 🛍️ Glow Threads — Full Stack Fashion E-Commerce Web App

[![Typing SVG](https://readme-typing-svg.demolab.com/?lines=🛍️+Glow+Threads+is+a+full-stack+fashion+e-commerce+web+app+built+with+the+MERN+stack.;🚀+It+offers+a+smooth+shopping+experience+to+browse,+add+to+cart,+and+purchase+securely.;Includes+an+admin+dashboard+for+product+and+order+management.;Integrates+Cloudinary+for+image+storage+and+is+fully+responsive+across+devices.&center=true&color=FFFFFF&duration=7000&multiline=false&width=1000)](https://github.com/Shouvik-9)

<img width="500" height="500" alt="Image" src="https://github.com/user-attachments/assets/9a19db9c-fd21-44af-aff6-284a0bbba4e3" />


> **Glow Threads** is a modern, responsive, and secure fashion e-commerce platform built with the MERN stack.  
> Users can browse, filter, add to cart, and purchase fashion products, while admins can manage products and orders from a feature-rich dashboard.

---

## 🚀 Live Demo
👉 **[https://glowthreads-frontend.vercel.app/](https://glowthreads-frontend.vercel.app/)**

---


## 🏷️ Glow-Threads Logo
<img width="400" height="250" alt="Image" src="https://github.com/user-attachments/assets/53c74a1b-9d03-4178-96e5-a0cfd1259587" />

## 🏷️ Glow-Threads Admin Panel Logo
<img width="400" height="250" alt="Image" src="https://github.com/user-attachments/assets/29dbcaf5-b5d1-44c0-b0c9-7b08956d30a6" />

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
# <img src='https://user-images.githubusercontent.com/74038190/206662607-d9e7591e-bbf9-42f9-9386-29efc927bc16.gif' width="40"> Features 

### 👥 User Features
- 🛒 Browse and search products  
- ❤️ Add items to cart  
- 🔐 Secure user authentication using JWT  
- 💳 Checkout via **Stripe**, **Razorpay** and **Cash on Delivery** 
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
<img width="1755" height="3804" alt="Image" src="https://github.com/user-attachments/assets/af787af9-5541-4738-9590-6ae4783e39c3" />

### 🛍️ Product Details
<img width="1755" height="5139" alt="Image" src="https://github.com/user-attachments/assets/21c3541c-91bc-40b6-9870-6cdb950e4d3f" />

### 🛒 Cart
<img width="1755" height="1615" alt="Image" src="https://github.com/user-attachments/assets/1a0b3f6a-2c7a-4b4b-8500-d0205b7aa072" />

### 💳 Checkout
<img width="1755" height="1347" alt="Image" src="https://github.com/user-attachments/assets/96fb68b9-3b75-485a-8f2c-c94d52ea6241" />

### 👨‍💼 Admin Dashboard

#### Add Items 
<img width="1755" height="983" alt="Image" src="https://github.com/user-attachments/assets/5c71ba11-b51d-4119-8683-acd37c8abb7a" />

#### List Items
<img width="1755" height="3998" alt="Image" src="https://github.com/user-attachments/assets/a329099e-53ec-49a4-9ea4-229248b34aab" />

#### Orders
<img width="1755" height="1505" alt="Image" src="https://github.com/user-attachments/assets/4176f92e-3c09-4cc7-adce-fa3f193e2128" />

---

## 🧠 Learning Highlights

- Implemented JWT Authentication for secure login

- Managed Multer & Cloudinary for image uploads

- Built Admin Dashboard with React Router

- Designed fully responsive UI using Tailwind CSS

- Integrated Stripe & Razorpay payments

- Deployed via Vercel Serverless functions

---

# 💬 Author:- **Shouvik Dutta**

# <img width="27" height="25" alt="image" src="https://github.com/user-attachments/assets/b0953de5-baca-4c57-8b47-50821f26448e" /> [**GITHUB LINK**](https://github.com/Shouvik-9)

# <img width="30" height="25" alt="image" src="https://github.com/user-attachments/assets/f4d40696-5161-4447-acbb-3fc10668648d" /> [**LINKEDIN**](https://www.linkedin.com/in/shouvik-dutta-990730267/)

# 🙏 THANK YOU
---
