import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css';


const Home = () => {
  const context = useDocusaurusContext()

  return (
    <Layout
      title={context.siteConfig.title}
      description="The payment orchestration platform">
      <div className="container m-auto mt-5">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-full mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">

              </div>

              <main className="mt-6 mx-auto max-w-7xl pr-4 sm:mt-12 sm:pr-6 md:mt-16 lg:mt-20 lg:pr-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
                    <span className="block xl:inline">Payments for developers</span> <span className="block text-green-600 xl:inline"> with a deadline</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Integrate Gr4vy into your application today with powerful APIs, SDKs, and frontend libraries.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="/guides/get-started" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 hover:text-white hover:no-underline md:py-4 md:text-lg md:px-10">
                        Learn more
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="/reference" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-gray-200 md:py-4 md:text-lg md:px-10 hover:no-underline hover:bg-gray-300">
                        API Reference
                       </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="hidden lg:block h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/img/hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;
