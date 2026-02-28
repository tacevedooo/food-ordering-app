## 🍽️ StackFood - Restaurant Ordering Platform
A full-stack web application for restaurant management and food ordering — built with React, TypeScript, Vite on the frontend, and Node.js, Express, MongoDB on the backend.

## Overview
This platform allows restaurant owners to manage their restaurants, menus, and incoming orders — while customers can browse restaurants, place orders, and track them in real time. Authentication is handled via JWT, image uploads via Cloudinary, and payments via Stripe Webhooks.

## Tech Stack
#### Frontend
TechnologyPurposeReact 18UI libraryTypeScriptType safetyViteBuild tool & dev serverReact Hook FormForm managementReact QueryServer state managementTailwind CSSStyling
#### Backend
TechnologyPurposeNode.js + ExpressREST API serverTypeScriptType safetyMongoDB + MongooseDatabase & ODMCloudinaryImage storageStripePayment processingJWT (Auth0)AuthenticationMulterFile upload handling

## Features

🔐 Authentication — Secure JWT-based login and registration via Auth0
🏪 Restaurant Management — Create, update, and manage your restaurant profile
🍕 Menu Management — Add and manage menu items with images
📦 Order Management — View and update the status of incoming orders in real time
💳 Checkout & Payments — Stripe-powered checkout with webhook support
🔍 Restaurant Discovery — Search and browse available restaurants
☁️ Image Uploads — Restaurant and menu images stored on Cloudinary