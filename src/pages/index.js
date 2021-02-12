import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import "./index.css"


const Home = () => {
  const context = useDocusaurusContext()

  return (
    <Layout
      title={context.siteConfig.title}
      description="The payment orchestration platform">
      <div className="container m-auto mt-5">
        <div className="relative overflow-hidden bg-white">
          <div className="max-w-full mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="absolute inset-y-0 right-0 hidden w-48 h-full text-white lg:block transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">

              </div>

              <main className="pr-4 mx-auto mt-6 max-w-7xl sm:mt-12 sm:pr-6 md:mt-16 lg:mt-20 lg:pr-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Payments for developers</span> <span className="block text-green-600 xl:inline"> with a deadline</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Integrate Gr4vy into your application today with powerful APIs, SDKs, and frontend libraries.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="shadow rounded-md">
                      <a href="/guides" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-700 border border-transparent rounded-md hover:bg-green-800 hover:text-white hover:no-underline md:py-4 md:text-lg md:px-10">
                                                Learn more
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="/reference" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-700 bg-gray-200 border border-transparent rounded-md md:py-4 md:text-lg md:px-10 hover:no-underline hover:bg-gray-300">
                                                API Reference
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="hidden object-cover w-full h-56 lg:block sm:h-72 md:h-96 lg:w-full lg:h-full" src="/img/hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
