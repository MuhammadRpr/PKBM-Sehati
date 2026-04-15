import { Container } from '@/components/ui/Container';
import curriculum from '@/content/curriculum.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kurikulum',
  description:
    'Pelajari kurikulum pendidikan kesetaraan PKBM SEHATI yang fleksibel dan relevan dengan kebutuhan komunitas.',
};

/**
 * Curriculum Page
 */
export default function KurikulumPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Kurikulum Kami</h1>
          <p className="text-xl text-gray-600">
            Pendidikan berkualitas dengan metode pembelajaran yang fleksibel dan relevan
          </p>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-0 md:py-0 lg:py-0">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">Filosofi Kurikulum</h2>
            <p className="mb-8 text-lg text-gray-700">
              {curriculum.overview}
            </p>

            {/* Principles */}
            <div>
              <h3 className="mb-4 text-2xl font-bold">Prinsip Pembelajaran</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {curriculum.principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg bg-[#F0F9FF] p-4"
                  >
                    <p className="font-semibold text-[#093C7D]">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-[#F0F9FF] py-12 md:py-16 lg:py-20">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-center">
            Keunggulan Kurikulum Kami
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(curriculum.features).map(
              ([key, feature]: any) => (
                <div
                  key={key}
                  className="rounded-lg border border-[#E0E7FF] bg-white p-6"
                >
                  <h3 className="mb-2 text-xl font-bold text-[#1A63AB]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <h2 className="mb-8 text-3xl font-bold text-center">
            Program Pendidikan
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(curriculum.packages).map(
              ([key, pkg]: any) => (
                <div
                  key={key}
                  className="rounded-lg border-2 border-[#E0E7FF] bg-[#F0F9FF] p-6"
                >
                  <h3 className="mb-2 text-2xl font-bold text-[#093C7D]">
                    {pkg.title}
                  </h3>
                  <p className="mb-4 text-gray-700">
                    {pkg.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-blue-900">
                      Area Fokus:
                    </h4>
                    <ul className="space-y-1">
                      {pkg.focusAreas.map((area: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm text-gray-700"
                        >
                          <span className="text-[#1A63AB]">•</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-blue-900">
                      Hasil Pembelajaran:
                    </h4>
                    <ul className="space-y-1">
                      {pkg.outcomes.map((outcome: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm text-gray-700"
                        >
                          <span className="text-[#1A63AB]">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* Assessment & Resources */}
      <section className="bg-[#F0F9FF] py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Assessment */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Penilaian</h2>
              <p className="mb-4 text-gray-700">
                {curriculum.assessment.description}
              </p>
              <ul className="space-y-2">
                {curriculum.assessment.methods.map((method, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3"
                  >
                    <span className="text-[#1A63AB]">•</span>
                    <span className="text-gray-700">{method}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Fasilitas & Sumber Daya</h2>
              <p className="mb-4 text-gray-700">
                {curriculum.resources.description}
              </p>
              <ul className="space-y-2">
                {curriculum.resources.facilities.map((facility, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3"
                  >
                    <span className="text-[#1A63AB]">•</span>
                    <span className="text-gray-700">{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
