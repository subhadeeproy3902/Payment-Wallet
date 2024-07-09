"use client";
import React from "react";
import { WalletIcon } from "lucide-react";

interface WalletBalanceProps {
  amount: number;
  locked: number;
}

const WalletBalance = ({ balance }: { balance: WalletBalanceProps }) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col justify-start">
        <div className="m-10 bg-gradient-to-br from-red-500 via-red-500 to-red-200">
          <div className="flex justify-center  ">
            <WalletIcon className="w-16 h-16" />
            <div className="p-4 text-3xl font-bold">Your Balance</div>
          </div>
          <div className="flex justify-center">
            <svg
              className="w-16 h-16"
              fill="#ffffff"
              viewBox="-96 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path>
              </g>
            </svg>
            <div className="p-2 text-5xl font-bold">
              {balance.amount / 100}.{balance.amount % 100}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-300"></div>
    </div>
  );
};

export default WalletBalance;
