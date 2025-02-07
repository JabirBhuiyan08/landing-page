
import website1 from "../assets/imgs/website1.png";
import website2 from "../assets/imgs/website2.png";
import website3 from "../assets/imgs/website3.png";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-10">
      {/* Portfolio Heading */}
      <h1 className="text-5xl sm:text-6xl text-center text-white uppercase font-bold tracking-wide drop-shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
        Portfolio
      </h1>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[ 
          {
            title: "Docs Wallet",
            image: website1,
            link: "https://docs-wallet-93b4b.web.app/"
          },
          {
            title: "Bistro Boss",
            image: website2,
            link: "https://symphonious-blancmange-c41b49.netlify.app/"
          },
          {
            title: "Ema-Jhon",
            image: website3,
            link: "https://wondrous-lolly-bfff3d.netlify.app/"
          }
        ].map(({ title, image, link }, index) => (
          <div key={index} className="card bg-base-100 w-full sm:w-80 lg:w-96 text-black shadow-xl mx-auto">
            <div className="card-body">
              <h2 className="card-title text-center">{title}</h2>
            </div>
            <div className="flex flex-col items-center">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src={image} alt={title} className="mb-4 w-full rounded-lg" />
                </figure>
              </a>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary mb-4 w-11/12 sm:w-auto">View Site</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Email Subscription */}
      <div className="mt-20 mb-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-content mb-6">
          Subscribe to Our Newsletter
        </h2>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-96 text-black"
          />
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto hover:scale-105 transition-transform duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Portfolio;
