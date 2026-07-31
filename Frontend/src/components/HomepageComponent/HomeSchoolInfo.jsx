import Image from "next/image";

const HomeSchoolInfo = () => {
  return (
    <section className="bg-gradient-to-red from-cyan-50 via-sky-50 to-cyan-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}

        <div>
          <span className="text-cyan-600 font-semibold uppercase tracking-widest">
            About Our School
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Empowering Students for a Better Tomorrow
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            Our school provides a nurturing environment where students develop
            academically, socially, and morally. With experienced teachers,
            modern facilities, and innovative learning approaches, we strive to
            inspire every learner to achieve excellence.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            We believe education goes beyond classrooms by encouraging
            creativity, leadership, discipline, and lifelong learning.
          </p>

          <button className="mt-8 px-8 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300 shadow-lg hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Right */}

        <div className="relative">

          <Image
            src="/images/Building.png"
            alt="School"
            width={800}
            height={450}
            className="rounded-3xl shadow-2xl object-cover w-full h-[450px]"
          />

          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-8 py-5">

            <h3 className="text-3xl font-bold text-cyan-600">
              25+
            </h3>

            <p className="text-gray-600">
              Years of Excellence
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeSchoolInfo;
