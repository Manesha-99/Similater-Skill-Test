import logo from '../assets/similater.png'
import { Link } from 'react-router-dom'

type PaymentMethods = {
    name: string
    path: string
}

const paymentMethods: PaymentMethods[] = [
    { name: 'amex', path: '/images/footer-payment/Amex-v1.png' },
    { name: 'apple', path: '/images/footer-payment/apple-v1.png' },
    { name: 'googlePay', path: '/images/footer-payment/GooglePay-v1.png'},
    { name: 'mastercard',path: '/images/footer-payment/Mastercard-v1.png'},
    { name: 'stripe', path: '/images/footer-payment/Stripe-v1.png' },
    { name: 'visa', path: '/images/footer-payment/Visa-v1.png' },
]

const Footer = () => {
    return (
        <div className="container mt-16 flex flex-col items-start justify-between gap-8 border-t border-gray-200 py-8 sm:flex-row sm:gap-6">
            <div className="flex flex-col gap-2">
                <Link to="/">
                    <img src={logo} alt="similater logo" />
                </Link>

                <div className="text-sm">
                    &copy; 2024 Similater (Pvt) Ltd. All rights reserved.
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                    {paymentMethods.map((img, index) => (
                        <img key={index} src={img.path} alt={img.name} />
                    ))}
                </div>
                <p className="text-sm capitalize">
                    Neque porro quisquam est qui dolorem ipsum
                </p>
            </div>
        </div>
    )
}

export default Footer
