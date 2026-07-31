const HomeCarousel = () => {
  return (
    <div className="w-full">
      <div className="carousel w-full h-[40vh] md:h-[65vh] lg:h-[80vh] rounded-b-3xl shadow-2xl">

        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to Our <p className="text-cyan-600">School</p>
            </h1>

            <p className="mt-5 max-w-2xl text-lg md:text-xl">
              Inspiring Excellence, Building Character and Shaping Future
              Leaders.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
            <a href="#slide4" className="btn btn-circle btn-outline text-white">
              ❮
            </a>

            <a href="#slide2" className="btn btn-circle btn-outline text-white">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/playing.png"
            className="w-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Best infrastructure in <p className="text-cyan-600">Country</p>
            </h1>

            <p className="mt-5 max-w-2xl text-lg md:text-xl"></p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
            <a href="#slide1" className="btn btn-circle btn-outline text-white">
              ❮
            </a>

            <a href="#slide3" className="btn btn-circle btn-outline text-white">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/sports.png"
            className="w-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Learn while <p className="text-cyan-600">Playing</p>
            </h1>

            <p className="mt-5 max-w-2xl text-lg md:text-xl"></p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
            <a href="#slide2" className="btn btn-circle btn-outline text-white">
              ❮
            </a>

            <a href="#slide4" className="btn btn-circle btn-outline text-white">
              ❯
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeCarousel;
