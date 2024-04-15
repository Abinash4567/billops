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

# API Endpoints
### POST        /api/v1/subdetail

**Parameters**

|          Name         |      Required      |      Type     |     Description    |
|  :----------------:   |:------------------:|:-------------:| :-----------------------------------: |
|     `orgId`    | required | Int  | Organization Key acts like unique key to identify your organization which is to be passed inside body. To see your organization key, head over to setting under dashboard.                                                                   |
|  `APIKey` | required | string  | API key is high security string which protects endpoint from misuse. Every organization registered under billops has unique one and can be regenerated according to your requirement. It is fired under header section. |

**Response**
status Code: 200
```
{
    "subscriptionDetail": [
        {
            "id": 1,
            "type": "Premium",
            "intendedAudience": "Freelancer, Education",
            "price": "13",
            "features": {
                "Updates": "No",
                "Revisions": "No",
                "Team Size": "2",
                "Web hooks": "No",
                "Video Client": "No",
                "24 Hour Update": "Yes",
                "Customer Support": "No"
            },
            "couponCodes": {
                "hello": "23",
                "selllo": "12"
            },
            "validity": 6
        }
    ]
}
```


or
Status Code: 404

```
{
    "message": "We are unable to find your organization."
}
```
___
