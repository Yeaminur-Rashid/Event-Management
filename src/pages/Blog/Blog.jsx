const Blog = () => {
  return (
    <div className="mt-20">
      <div className="relativeflex mx-auto w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="https://i.ibb.co/sbQdQr0/istockphoto-950866716-612x612.jpg"
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-avenir text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Donation US
          </h5>
          <p className="block font-avenir text-base text-green-800 font-bold leading-relaxed text-inherit antialiased">
          Your donations not only help create memorable and inclusive events but also enable us to extend a helping hand to those in need, embodying the true essence of compassion and generosity. Together, let's continue to make our Muslim festivals vibrant, welcoming, and impactful for all.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-avenir text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:bg-green-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
