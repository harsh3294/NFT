import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NFTDropPage() {
  // Authentication
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-10 lg:min-h-screen ">
          <div className="rounded-lg bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              src="/Assets/Apes.png"
              alt=""
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72 "
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of Apes who live and breadth React!!!
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}

        <header className="flex flex-row items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80 ">
            {' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              NFT
            </span>{' '}
            Market Place
          </h1>

          <button
            className="rounded-full bg-rose-400 px-5 py-2 text-sm font-bold text-white lg:px-8 lg:py-2 lg:text-base"
            onClick={() => (address ? disconnect() : connectWithMetamask())}
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>
        <hr className="my-3 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            You're logged in with wallet {address.substring(0, 5)}....
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* Content */}
        <main className=" mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            src="/Assets/MainContent.png"
            alt=""
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-2xl font-bold lg:text-4xl lg:font-extrabold">
            Apes NFT Drop
          </h1>
          <p className="pt-5 text-xl text-green-500 ">13/21 NFT's Claimed</p>
        </main>
        {/* Mint Button */}
        <div>
          <button className="mt-10 h-12 w-full rounded-full bg-red-600 font-bold text-white">
            Mint NFT (0.01 ETH)
          </button>
        </div>
      </div>
    </div>
  )
}

export default NFTDropPage
