 import React from 'react'
 import Link from "next/link"

 const HeadSection = () => {
        return (
          <div className="relative max-w-7xl mx-auto px-4">
           <section>
               <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    </div>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-yellow-500 sm:text-5xl md:text-6xl">
                        <span className="block lg:py-3 xl:inline">Upload Your NFTs </span>
                        <span className="block text-gray-800 xl:inline">Discover, collect, and sell extraordinary NFTs</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" >
                        on the world's first & largest NFT marketplace,this Arabic Dapps Course that is will learn more about nfts and solidity programming language   
                        </p>
                     
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link href="/create-nfts">
                            <a  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
        
                            Get started With Create Your NFT
                            </a>
                            </Link>
                        </div>
                    
                        </div>
                    </div>
                    </main>
                </div>
                </div>
                <div className="lg:absolute lg:inset-y-3 lg:right-0 lg:w-1/2">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://ardapps.com/wp-content/uploads/2021/11/head-1.png" alt="headerSection Image" />
                </div>
                </div>


                            </section>
                            
                        </div>
                    )
                }

export default HeadSection;

