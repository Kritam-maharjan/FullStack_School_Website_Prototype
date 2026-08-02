import Image from "next/image";
import HomeCategoryCard from "@/components/HomepageComponent/HomeCategoryCard";

export const metadata = {
  title: "About Us | EG School",
};

export default function About() {
  return (
    <>
    <div className="bg-gradient-to-blue from-slate-50 via-cyan-50 to-sky-100">

      {/* ================= About School ================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            About Our
            <span className="text-cyan-600"> School </span>
          </h1>

          <div className="w-28 h-1 bg-cyan-500 mx-auto rounded-full mt-4"></div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover our commitment to academic excellence, innovation,
            leadership, and holistic student development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* About Text */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Welcome to Our School
            </h2>

            <p className="text-gray-600 leading-8 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quas natus rem dignissimos excepturi adipisci
              perspiciatis exercitationem illum, porro pariatur laboriosam
              deserunt tempora eius repellendus. Vitae doloribus esse
              perspiciatis molestias. Asperiores iste dicta cumque a delectus
              numquam animi labore placeat, mollitia veniam quaerat iusto quasi
              reiciendis consequatur facere doloremque earum incidunt id at est
              suscipit.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition duration-300 shadow-lg hover:scale-105">
              Learn More
            </button>

          </div>

          {/* Image */}

          <div className="relative">

            <Image
              src="/images/Building.png"
              alt="School Building"
              width={800}
              height={450}
              className="rounded-3xl shadow-2xl object-cover w-full h-450px"
            />

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-8 py-5">

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

      {/* ================= Principal Message ================= */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-slate-800">
            Message from the
            <span className="text-cyan-600"> Head</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-500 mx-auto rounded-full mt-4"></div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}

          <div>

            <Image
              src="/images/playing.png"
              alt="Principal"
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>

          {/* Message */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Principal&apos;s Message
            </h3>

            <p className="text-gray-600 leading-8 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit ipsa tenetur repellendus dolore ipsam explicabo
              laboriosam sunt a sequi accusamus. Labore delectus architecto,
              nihil quos neque tenetur porro enim dolorem eum illum autem
              officia. Nostrum totam atque, repellendus molestiae animi
              ducimus officiis deleniti ex quasi libero necessitatibus ad
              ipsam optio accusamus sint cupiditate cumque aut maiores iste
              porro ab culpa labore.

              <br /><br />

              Voluptates cum dolores tempora fugiat expedita impedit eveniet
              nam. Animi ut omnis doloremque sint ipsam perferendis magni eos
              molestias fugiat. Atque esse adipisci eveniet consectetur ab
              ducimus fugit cumque quo inventore praesentium.

              <br /><br />

              Our goal is to provide every student with quality education,
              strong moral values, leadership skills, and confidence so they
              become responsible citizens and lifelong learners.
            </p>

          </div>

        </div>

      </section>
    </div>

    <HomeCategoryCard />
      
    </>
  );
}
