import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative px-4">
      {/* Background design placeholders */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[url('/path-to-top-right-bg.png')] bg-no-repeat bg-contain z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[url('/path-to-bottom-left-bg.png')] bg-no-repeat bg-contain z-0" />

      {/* Top bar banner */}
      <div className="absolute top-0 w-full bg-[#3b463e] text-white text-center text-sm py-1">
        Use first 10 to get up to 10% off on your first order
      </div>

      <div className="w-full max-w-md bg-transparent z-10 pt-12">
        <h1 className="text-4xl text-center font-serif mb-6">elore</h1>
        <h2 className="text-center font-semibold mb-8">LOGIN</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-xs mb-1" htmlFor="email">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs mb-1" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none"
            />
          </div>

          <div className="flex justify-end text-xs text-gray-600">
            <a href="#" className="hover:underline">
              FORGOT PASSWORD ?
            </a>
          </div>

          <button type="submit" className="w-full py-2 bg-[#3b463e] text-white rounded-md">
            LOGIN
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-700">
          DO YOU HAVE AN ACCOUNT?{' '}
          <a href="#" className="underline">
            CREATE ACCOUNT
          </a>
        </div>

        <div className="text-center mt-2 text-sm text-gray-600">OR CONTINUE WITH</div>

        <div className="flex justify-center space-x-8 mt-2 text-sm text-gray-700">
          <a href="#">FACEBOOK</a>
          <a href="#">GOOGLE</a>
        </div>
      </div>
    </div>
  );
}
