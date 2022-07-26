import heroImage from '@assets/hero.png'

const Home = () => {
  // Adapted from https://app.tailwinduikit.com/listing/marketing/page_section/hero/left_aligned_with_cta_and_placeholder
  return (
    <div className="lg:px-6 xl:px-0">
      <div className="mx-auto container relative z-0 px-4 xl:px-0">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
              All of your beloved collection. All in one spot.
            </h1>
            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-xl lg:text-2xl">
              It may seem comically absurd, but it's true.
            </h2>
            <div className="w-full flex justify-evenly items-start gap-6 flex-col">
              <button className="w-full hover:opacity-90 bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p transition-opacity">Get started</button>
              <button className="w-1/2 hover:opacity-90 bg-hero-blue border-2 border-hero-blue py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p">Log in</button>
            </div>
          </div>
          <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-end">
            <img
              className="md:absolute md:w-1/2 md:-ml-28"
              src={heroImage}
              alt="Comic book POW! bubble"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
