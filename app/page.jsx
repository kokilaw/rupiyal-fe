const Home = () => (
  <div className="flex h-screen">
    <div className="m-auto">
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Compare & Calculate
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center"> lkr.exchange </span>
        </h1>
        <p className="desc text-center">
          Explore near real-time exchange rates from top banks in Sri Lanka,
          effortlessly compare their offerings, and unleash the power of our
          intuitive currency converter for seamless calculations, all on
          lkr.exchange!
        </p>
        <div class="relative rounded-full px-3 py-1 mt-5 text-lg leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Coming Soon
        </div>
      </section>
    </div>
  </div>
);

export default Home;
