<p align='center'> 
  <img src="https://github.com/Abinash4567/billops/assets/98229006/2ce25355-1154-46c7-bff9-d9d4c61c2774" alt="logo">
  <h3 align="center">billops</h3>
  <h4 align="center">Elevate your business with us</h3>
</p>


<!-- ABOUT THE PROJECT -->
## Glimpse
<p align='center'> <img src="https://github.com/Abinash4567/billops/assets/98229006/5222f340-edd5-455e-aa00-c8b7c88a1a90" alt="logo"></p>

## About the Project
# Managing Subscription and billing

billops is a subscription management platform for businesses. It helps businesses manage their subscription models, billing, and user data. Billops offers a dashboard with analytics like revenue, subscribers, and retention rate. Businesses can also manage their subscriptions, coupons, and user details. Billops provides a secure API for organizations to access their data and webhooks to capture payments.

### Built With

- [Next.js](https://nextjs.org/?ref=cal.com)
- [React.js](https://reactjs.org/?ref=cal.com)
- [Tailwind CSS](https://tailwindcss.com/?ref=cal.com)
- [Prisma.io](https://prisma.io/?ref=cal.com)
- [Shadcn](https://ui.shadcn.com)
- [Supabase](https://supabase.com/)

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Abinash4567/billops`
2. Install dependencies: `npm install`
4. Set up pgAdmin or supabase database on your need
5. Create a `.env` file like `.env.example`
6. Add database, URL and secret keys in environment variables
7. Migrate prisma model to database: `npx prisma migrate`
8. Check middleware.ts under `billops/src/` and comment line 11 for local run or line 12 for cloud deployment.
9. Start the development server: `npm run dev`

## Usage

1. After setting up the project locally, access the application at `localhost:3000`.
2. Create an account or log in.
3. Mangage Users, Subscription under dashboard.
