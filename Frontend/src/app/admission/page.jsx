import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";

export const metadata = {
  title: "Admission | EG School",
};

export default function Admission() {
  return (
    <>
      {/* Admission Details */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-sky-700 shadow-2xl overflow-hidden">

          <div className="text-center py-8">

            <h2 className="text-4xl font-bold text-white">
              Admission Details
            </h2>

            <div className="w-28 h-1 bg-white mx-auto rounded-full mt-3"></div>

          </div>

          <div className="px-8 pb-10">

            <p className="text-white text-justify leading-8 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ad
              dolor neque repellendus aliquam debitis ullam, corporis libero.
              Fuga adipisci temporibus est vero inventore magni tempore, eum
              assumenda ex quisquam molestias, aut cum iusto dolores nulla
              aliquam neque porro suscipit. Quidem tempora sunt adipisci rem
              fugiat officiis, aspernatur iure esse eaque eligendi maiores illo
              officia obcaecati, doloremque sapiente quos ducimus at ab, dolor
              necessitatibus? Voluptates!
            </p>

            <img
              className="mt-10 mx-auto w-full max-w-lg rounded-2xl shadow-xl object-cover"
              src="/images/sports.png"
              alt="Sports"
            />

          </div>

        </div>

      </section>

      {/* Contact + Visit */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Us */}

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-cyan-100 flex flex-col justify-between">

            <div>

              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Contact
                <span className="text-cyan-600"> Us</span>
              </h2>

              <div className="space-y-6 text-gray-700">

                <div className="flex items-center gap-4">

                  <div className="bg-cyan-100 p-3 rounded-full">
                    <PiPhone className="text-cyan-700 text-xl" />
                  </div>

                  <span className="text-lg">
                    +977-01-427555, 01-5277777
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <div className="bg-cyan-100 p-3 rounded-full">
                    <MdEmail className="text-cyan-700 text-xl" />
                  </div>

                  <span className="text-lg">
                    EgSchool@org.npp
                  </span>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-cyan-100 p-3 rounded-full">
                    <BiLocationPlus className="text-cyan-700 text-xl" />
                  </div>

                  <span className="text-lg">
                    Bhandarkhal, Syanobharyang, Kathmandu
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Visit Us */}

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-cyan-100 flex flex-col">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Visit Our
              <span className="text-cyan-600"> School</span>
            </h2>

            {/* Google Maps */}

            <iframe
              title="Google Map"
              className="w-full h-[350px] rounded-2xl border border-gray-300 shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5626.243702123442!2d85.28608704610694!3d27.724393519417042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1895c6f55237%3A0x2e8bf5bcb0e76d88!2sNepalese%20Army%20Institute%20of%20Health%20Sciences%20(NAIHS)!5e1!3m2!1sen!2snp!4v1783659724257!5m2!1sen!2snp"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

          </div>

        </div>

      </section>
    </>
  );
}
