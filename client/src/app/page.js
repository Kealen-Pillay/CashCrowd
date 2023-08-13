import Navbar from '@/app/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <Navbar />

      <section id="showcase">
        <div className="container mx-auto px-4">
          <div className="top flex justify-between items-center">
            <div className="left-block flex-1 p-4">
              <h1 className="text-4xl font-bold">Compare NZ</h1>
              <p>
                Helping kiwis to find the best price, speed, quality, and
                service.
              </p>
              <p className="mt-4">
                Compare the best broadband deals in your area
              </p>
            </div>
            <div className="right-block flex-1 p-4">
              <img
                src="./image/banner.png"
                alt="broadband"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="text_information flex-1 p-2 text-center">
            <p className="text-top font-bold">Most popular</p>
            <h1 className="text-2xl font-semibold">NZ Broadband</h1>
            <p className="text-bottom font-bold">this week</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start py-4">
            <div className="plan_1 flex justify-between flex-col p-2 m-2 max-w-md rounded-lg shadow h-[480px] relative">
              <div>
                <p className="plan_title font-bold">Fibre 100</p>
                <h1 className="plan_price text-2xl font-semibold">$84.99</h1>
                <h3 className="plan_features font-bold">Unlimited Data</h3>
                <ul className="mt-4">
                  <li>100/20 Mbps</li>
                  <li>12 Months</li>
                  <li>Free Modem</li>
                  <li>Free Installation</li>
                </ul>
                <div className="button mt-4">
                  <Link legacyBehavior href="./broadband">
                    <a className="px-6 py-3 text-white bg-yellow-500 rounded transition duration-300 hover:bg-gray-700 whitespace-normal">
                      Check your address
                    </a>
                  </Link>
                </div>
              </div>
              <img
                src="/image/CleanShot 2023-08-12 at 15.22.37@2x.png"
                alt="plan_1"
                className="max-w-full 
                h-auto
                mx-auto
                rounded-b-lg"
              />
            </div>

            <div className="plan_3 flex justify-between flex-col p-2 m-2 max-w-md rounded-lg shadow h-[480px] min-w-[300px] relative">
              <div>
                <p className="plan_title font-bold">Fibre 100</p>
                <h1 className="plan_price text-2xl font-semibold">$84.99</h1>
                <h3 className="plan_features font-bold">Unlimited Data</h3>
                <ul className="max-h-[100px] overflow-y-hidden mt-4">
                  <li>100/20 Mbps</li>
                  <li>12 Months</li>
                  <li>Free Modem</li>
                </ul>
                <div className="button mt-4">
                  <Link legacyBehavior href="./broadband">
                    <a className="px-6 py-3 text-white bg-yellow-500 rounded transition duration-300 hover:bg-gray-700 whitespace-normal">
                      Check your address
                    </a>
                  </Link>
                </div>
              </div>
              <img
                src="/image/CleanShot 2023-08-12 at 15.23.13@2x.png"
                alt="plan_3"
                className="
                max-w-full 
                h-auto
                mx-auto
                rounded-b-lg"
              />
            </div>

            <div className="plan_3 flex justify-between flex-col p-2 m-2 max-w-md rounded-lg shadow h-[480px] relative">
              <div>
                <p className="plan_title font-bold">Fibre 100</p>
                <h1 className="plan_price text-2xl font-semibold">$84.99</h1>
                <h3 className="plan_features font-bold">Unlimited Data</h3>
                <ul className="max-h-[100px] overflow-y-hidden mt-4">
                  <li>100/20 Mbps</li>
                  <li>12 Months</li>
                  <li>Free Modem</li>
                  <li>Free Installation</li>
                </ul>
                <div className="button mt-4">
                  <Link legacyBehavior href="./broadband">
                    <a className="px-6 py-3 text-white bg-yellow-500 rounded transition duration-300 hover:bg-gray-700 whitespace-normal">
                      Check your address
                    </a>
                  </Link>
                </div>
              </div>
              <img
                src="image/CleanShot 2023-08-12 at 15.23.27@2x.jpg"
                alt="plan_3"
                className="
                max-w-full 
                h-auto
                mx-auto
                rounded-b-lg"
              />
            </div>

            <div className="more flex-1 p-2">
              <Link legacyBehavior href="./broadband">
                <a className="px-6 py-3 text-white bg-yellow-500 rounded transition duration-300 hover:bg-gray-700">
                  More
                </a>
              </Link>
            </div>
          </div>
          <div className="bottom flex justify-between items-center">
            <div className="crowd_review mb-5">
              <h1 className="text-4xl font-bold">Crowd Reviews</h1>
            </div>
            <div className="comments_collection flex justify-between">
              <div className="comment flex-1 m-2.5 p-5 bg-white shadow-md rounded">
                <div className="user_information flex items-center mb-2.5">
                  <div className="user_image mr-auto">
                    <img src="image/avatar3.svg" alt="user" />
                  </div>
                  <div className="simple_information">
                    <p className="user_brand">kealen.p200 liked Spark:</p>
                    <p className="comment_title">Live Chat is Great!</p>
                  </div>
                </div>
                <div className="comment_content">
                  <p>
                    Spark's live chat is great! I was able to get my problem solved in a matter of minutes. I
                    didn't have to wait on hold or anything. I would recommend Spark to anyone who wants a
                    reliable internet service provider.
                  </p>
                </div>
                <div className="rating_star">
                  <img className="" src="image/4stars.png" alt="star" />
                </div>
              </div>
              <div className="comment">
                <div className="user_information">
                  <div className="user_image">
                    <img src="image/avatar2.svg" alt="user" />
                  </div>
                  <div className="simple_information">
                    <p className="user_brand">kealen.p200 liked Spark:</p>
                    <p className="comment_title">Live Chat is Great!</p>
                  </div>
                </div>
                <div className="comment_content">
                  <p>
                    Spark's live chat is great! I was able to get my problem solved in a matter of minutes. I
                    didn't have to wait on hold or anything. I would recommend Spark to anyone who wants a
                    reliable internet service provider.
                  </p>
                </div>
                <div className="rating_star">
                  <img src="image/4stars.png" alt="star" />
                </div>
              </div>
              <div className="comment">
                <div className="user_information">
                  <div className="user_image">
                    <img src="image/avatar4.svg" alt="user" />
                  </div>
                  <div className="simple_information">
                    <p className="user_brand">kealen.p200 liked Spark:</p>
                    <p className="comment_title">Live Chat is Great!</p>
                  </div>
                </div>
                <div className="comment_content">
                  <p>
                    Spark's live chat is great! I was able to get my problem solved in a matter of minutes. I
                    didn't have to wait on hold or anything. I would recommend Spark to anyone who wants a
                    reliable internet service provider.
                  </p>
                </div>
                <div className="rating_star">
                  <img src="image/5stars.png" alt="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-2 text-center">
        <p>Web Development &copy; 2018</p>
      </footer>
    </div>
  )
}
