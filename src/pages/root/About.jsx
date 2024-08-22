import React from 'react'

function About() {
  return (
    <section className="min-h-screen">
      <div className="pb-20">
        <div className="h-min pt-16 lg:pt-28 lg:w-[80%] lg:mx-auto flex gap-8 items-center">
          <div className="flex flex-col gap-5 w-1/2">
            <h2 className="font-bold text-3xl mb-5">About us</h2>
            <h3 className="font-bold text-2xl">
              Innovation at it's peak
            </h3>
            <p className="text-[100%] text-[#aaa] about_quote h-auto w-auto">
              At First Ally Trade, we believe that everyone should have the opportunity to invest in the stock market and achieve financial freedom. Founded by a team of passionate traders, we set out with the mission to democratize stock trading and make it accessible to individuals from all walks of life. With years of experience in the financial industry, our experts are dedicated to empowering traders with the knowledge and tools needed to navigate the complex world of stocks.
            </p>
          </div>
          
          <img 
            className="max-h-[300px]" 
            src="/assets/images/brokerage_PlatformsPicks.png" 
            alt="" 
          />
        </div>

        <div className="lg:w-[95%] mx-auto border-y border-y-gray-900 flex pt-20 pb-16" dir="auto">
          <div className="w-1/2">
            <img 
              width={350} 
              className="hidden lg:block"
              src="/assets/images/Stock-Exchange_1.png" 
              alt="" 
            />
          </div>

          <div className="flex flex-col gap-10">
            <h3 className="font-bold text-4xl">
              We want everyone to be able to fulfill their desires and opportunities.
            </h3>

            Our team has created not just another project for traders. First of all, we developed a platform for the widest possible audience. For people who want to learn how to use advanced financial instruments and develop their financial skills.

            Speaking of tools. First Ally Trade provides over 400 free tools to each client so that you can trade and earn money the way you like. Choose any assets: currency quotes, stocks, majors, metals, oil or gas, as well as the main trend of recent years - cryptocurrencies.
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="lg:w-[80%] mx-auto">
          <h3 className="font-bold text-4xl pt-24 pb-16 text-center">What Sets Us Apart</h3>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#1D263B] px-8 py-11 text-[0.1rem] text-[#aaa] rounded-xl h-lg">
              Expertise: Our team comprises seasoned traders and financial experts who possess a deep understanding of the market. We leverage our expertise to deliver accurate and up-to-date information, enabling our users to make well-informed investment choices. With our comprehensive market analysis and research, you can stay ahead of the curve and make confident trading decisions.
            </div>
            <div className="bg-[#1D263B] px-8 py-11 text-lg text-[#aaa] rounded-xl">
              Cutting-Edge Technology: We pride ourselves on our state-of-the-art trading platform. Built with the latest technology, our platform offers a seamless and intuitive trading experience. From real-time market data to advanced charting tools, we provide the tools you need to execute trades efficiently and effectively.
            </div>
            <div className="bg-[#1D263B] px-8 py-11 text-lg text-[#aaa] rounded-xl">
              Educational Resources: We believe that education is the foundation of successful trading. That's why we offer a wide range of educational resources to cater to traders of all levels. Whether you are a beginner looking to learn the basics or an experienced trader seeking advanced strategies, our educational materials, tutorials, and webinars have got you covered.
            </div>
            <div className="bg-[#1D263B] px-8 py-11 text-lg text-[#aaa] rounded-xl">
              Customer Support: Your satisfaction is our top priority. Our dedicated customer support team is available 24/7 to address any questions or concerns you may have. We are committed to providing prompt and personalized assistance to ensure that your trading experience is smooth and hassle-free.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About