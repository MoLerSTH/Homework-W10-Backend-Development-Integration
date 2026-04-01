import Link from 'next/link';

export default function HomeSemanticWithTailwind() {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-100 via-yellow-50 to-pink-50 font-sans text-slate-900 flex flex-col">
      <header className="bg-white/70 border-b border-pink-200 sticky top-0 z-10 backdrop-blur-sm">
        <nav
          aria-label="เมนูหลัก"
          className="w-full max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-pink-600 tracking-wide">
            TU-PINE BOOKS
          </h1>
          <p className="text-yellow-700 text-sm md:text-lg text-center md:text-right font-medium">
            ยินดีต้อนรับสู่แอปพลิเคชันอำนวยความสะดวกในการยืมหนังสือ
          </p>
        </nav>
      </header>

      <main className="w-full max-w-6xl mx-auto px-6 py-12 grow">
        <section aria-labelledby="hero-heading" className="text-center mb-16">
          <h2
            id="hero-heading"
            className="text-4xl md:text-5xl font-extrabold mb-4 text-pink-700 leading-tight"
          >
            ยืม/จองหนังสือได้ง่าย ๆ
            <br />
            จากปลายนิ้ว
          </h2>
          <p className="text-lg md:text-xl text-yellow-700 font-medium">
            เลือกบริการที่ต้องการด้านล่าง
          </p>
        </section>

        <nav aria-label="บริการของเรา">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <li>
              <article className="h-full">
                <Link href="/findbook" className="group block h-full">
                  <div className="bg-white/80 p-10 md:p-12 rounded-3xl shadow-md border-2 border-pink-100 hover:border-pink-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
                    <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                      <span className="text-pink-600 text-4xl" aria-hidden="true">
                        🔍
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-pink-700">
                      หนังสือแนะนำ
                    </h3>
                    <p className="text-lg md:text-xl text-yellow-700 font-medium">
                      เลือกหนังสือที่คุณสนใจ
                    </p>
                  </div>
                </Link>
              </article>
            </li>

            <li>
              <article className="h-full">
                <Link href="/mybook" className="group block h-full">
                  <div className="bg-white/80 p-10 md:p-12 rounded-3xl shadow-md border-2 border-yellow-100 hover:border-yellow-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
                    <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                      <span className="text-yellow-600 text-4xl" aria-hidden="true">
                        📚
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-pink-700">
                      หนังสือของฉัน
                    </h3>
                    <p className="text-lg md:text-xl text-yellow-700 font-medium">
                      ดูรายละเอียดหนังสือที่คุณยืมไว้
                    </p>
                  </div>
                </Link>
              </article>
            </li>
          </ul>
        </nav>
      </main>

      <footer className="py-8 text-center text-pink-500 bg-white/70 border-t border-pink-200 mt-auto px-6">
        <p className="text-sm md:text-base">
          จัดทำโดย จิดาภา และ ธนโชติ และ ปรัตถกร และ อมรเทพ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์
        </p>
      </footer>
    </div>
  );
}