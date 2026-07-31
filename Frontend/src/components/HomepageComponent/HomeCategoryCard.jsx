import Link from "next/link";

const CARDS = [
  {
    href: "/faculty",
    title: "Our Faculty",
    desc: "Meet our experienced and dedicated teaching staff.",
    label: "Faculty",
  },
  {
    href: "/facilities",
    title: "Facilities",
    desc: "Explore our modern classrooms, labs and sports facilities.",
    label: "Facilities",
  },
  {
    href: "/news",
    title: "News & Events",
    desc: "Stay informed with our latest news and upcoming events.",
    label: "News & Events",
  },
  {
    href: "/notice",
    title: "Notice Board",
    desc: "Read important notices and announcements from the school.",
    label: "Notice Board",
  },
  {
    href: "/about",
    title: "About School",
    desc: "Learn about our history, vision and educational excellence.",
    label: "About School",
  },
  {
    href: "/gallery",
    title: "Gallery",
    desc: "Discover memorable moments and activities from our campus.",
    label: "Gallery",
  },
];

const HomeCategoryCard = () => {
  return (
    <section className="bg-gradient-to-b from-cyan-50 via-sky-50 to-cyan-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CARDS.map((card) => (
          <div
            key={card.href}
            className="group card image-full w-full h-80 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-300/50 cursor-pointer"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </figure>

            <div className="card-body justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <h2 className="card-title text-2xl font-bold text-white group-hover:text-cyan-300 transition duration-300">
                {card.title}
              </h2>

              <p className="text-gray-200 text-sm">{card.desc}</p>

              <div className="card-actions justify-end">
                <Link href={card.href}>
                  <button className="rounded-full bg-cyan-500 px-6 py-2 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-cyan-600 hover:scale-105 hover:shadow-lg">
                    {card.label}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCategoryCard;
