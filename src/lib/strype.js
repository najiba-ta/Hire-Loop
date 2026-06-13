import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1Th1C017KfH9DgY0D428U04M',
    'seeker_premium': 'price_1Th1Tr17KfH9DgY0RcwtYFQp',
    'recruiter_growth': 'price_1Th1VP17KfH9DgY0WGh7w0xi',
    'recruiter_enterprise': 'price_1Th1VP17KfH9DgY0WGh7w0xi'
}