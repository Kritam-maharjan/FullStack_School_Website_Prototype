export const metadata = {
  title: "Academics | EG School",
};

export default function Academics() {
  return (
    <div className="bg-gradient-to-b from-cyan-700 via-cyan-900 to-blue-900 min-h-screen">

      {/* Header */}
      <section className="bg-gradient-to-b from-cyan-300 to-cyan-00 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Academics
          </h1>
          <p className="mt-4 text-lg text-cyan-200">
            Providing quality education through excellence in teaching and learning.
          </p>
        </div>
      </section>

      {/* Academic Information */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Curriculum */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">
              Curriculum
            </h2>

            <p className="text-gray-700 leading-7">
              Our curriculum follows the national education framework and is
              designed to encourage creativity, critical thinking, and
              practical learning.
            </p>
          </div>

          {/* Levels */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">
              Academic Levels
            </h2>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Pre-Primary Level</li>
              <li>Primary Level (Grades 1–5)</li>
              <li>Lower Secondary (Grades 6–8)</li>
              <li>Secondary Level (Grades 9–10)</li>
            </ul>
          </div>

          {/* Teaching */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">
              Teaching Methodology
            </h2>

            <p className="text-gray-700 leading-7">
              We promote interactive classrooms, project-based learning,
              digital resources, and extracurricular participation to ensure
              holistic development.
            </p>
          </div>

          {/* Assessment */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4">
              Assessment
            </h2>

            <p className="text-gray-700 leading-7">
              Students are evaluated through regular class tests, assignments,
              practical activities, projects, and term examinations.
            </p>
          </div>

        </div>

      </section>

      {/* Motto */}
      <section className="bg-gradient-to-b from-blue-00 via-blue-900 to-base-200 text-white py-12 mt-8">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">
            Our Academic Mission
          </h2>

          <p className="mt-4 text-cyan-100 leading-7">
            To provide a supportive learning environment that nurtures
            knowledge, values, creativity, leadership, and lifelong learning.
          </p>
        </div>
      </section>

    </div>
  );
}
