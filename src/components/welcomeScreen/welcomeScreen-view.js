import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeScreen({ setWelcome }) {
    return (
    <>
        <div className="mt-20 md:mt-32">
            <h2 className="font-brand font-bold text-drywhite border inline-block rounded-50 py-2 px-6 lg:text-lg">Authentic Marketplace</h2>
        </div>
        <div className="flex flex-col mt-10 md:flex-row md:justify-center" 
            onClick={() => setWelcome(false)}>
            <div className="cursor-pointer mb-6 mx-14 md:mx-4 pt-6 pb-10 md:px-16 text-white font-abrand font-bold uppercase border border rounded-xl border-drywhite text-drywhite">
                <h2>&gt;&gt;</h2>
                <h1 className="text-sm">Browse</h1>
            </div>
            <Link to='/discovery'>
                <div className="mb-6 mx-14 md:mx-4 pt-6 pb-10 md:px-16 text-white font-abrand font-bold uppercase border border rounded-xl border-drywhite text-drywhite">
                    <h2 className="text-xl">*</h2>
                    <h1 className="text-sm">Discover</h1>
                </div>
            </Link>
            <div className="mb-6 mx-14 md:mx-4 pt-6 pb-10 md:px-16 text-white font-abrand font-bold uppercase border border rounded-xl border-drywhite text-drywhite">
                <h2>+</h2>
                <h1 className="text-sm">Start Order</h1>
            </div>
        </div>
        <div className="mt-4">
            <h4 className="text-drywhite font-bold text-sm py-1 block rounded-full">Sign In</h4>
            <h4 className="text-drywhite font-bold text-sm py-1 block rounded-full">Create Account</h4>
        </div>
    </>
    )
}