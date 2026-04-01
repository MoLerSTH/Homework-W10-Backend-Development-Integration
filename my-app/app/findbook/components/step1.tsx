import React from 'react';
import type { BorrowBookFormData, Book } from '../page';

interface Step1Props {
  formData: BorrowBookFormData;
  onNext: () => void;
  onPrev: () => void;
  setFormData: React.Dispatch<React.SetStateAction<BorrowBookFormData>>;
}

export default function Step1({
  formData,
  onNext,
  onPrev,
  setFormData,
}: Step1Props) {

  const books: Book[] = [
    {
      title: 'Heated Rivalry',
      tagline: 'คู่แข่งบนลานน้ำแข็ง แต่เป็นคู่รักในความลับ',
      description:
        `เรื่องราวของ Shane Hollander และ Ilya Rozanov 
          สองนักฮอกกี้ดาวรุ่งที่เป็นคู่แข่งตัวฉกาจกันมาตลอดเจ็ดปี ทุกคนรู้ว่าพวกเขาเกลียดกัน
          แต่ไม่มีใครรู้ว่าเบื้องหลังการปะทะกันในสนาม 
          คือความสัมพันธ์ที่ร้อนแรงและซับซ้อนที่พวกเขาต้องเก็บเป็นความลับเพื่ออาชีพการงาน`,
      author: 'Rachel Reid',
      publisher: 'Carina Press',
      pages: 310,
      language: 'อังกฤษ',
      available: 9,
    },
    {
      title: 'Red, White, and Royal Blue',
      tagline: 'ลูกชายประธานาธิบดีสหรัฐฯ กับเจ้าชายอังกฤษ',
      description:
        `Alex Claremont-Diaz เปรียบเสมือนร็อกสตาร์ของอเมริกา 
          แต่เขามีศัตรูคู่อาฆาตคือ เจ้าชาย Henry แห่งอังกฤษ 
          เมื่อภาพการทะเลาะกันของทั้งคู่หลุดออกสื่อจนกระทบความสัมพันธ์ระหว่างประเทศ 
          พวกเขาจึงถูกบังคับให้ "แสร้งทำเป็นเพื่อนกัน" 
          แต่ความใกล้ชิดกลับเปลี่ยนความเกลียดชังให้กลายเป็นความรักที่อาจสั่นคลอนโลกทั้งใบ`,
      author: 'Casey McQuiston',
      publisher: "St. Martin's Griffin",
      pages: 418,
      language: 'อังกฤษ',
      available: 2,
    },
    {
      title: 'Atomic Habits',
      tagline: 'นิสัยเล็กๆ เปลี่ยนชีวิต',
      description:
        `หนังสือที่จะเปลี่ยนความเชื่อเรื่องการเปลี่ยนแปลงตัวเอง James Clear 
          เผยความลับว่าการบรรลุเป้าหมายใหญ่ไม่ได้เกิดจากการเปลี่ยนแปลงแบบก้าวกระโดด 
          แต่เกิดจากระบบของ "นิสัยระดับอะตอม" ที่ทำซ้ำได้ง่ายและเห็นผลจริง พร้อมวิธีเลิกนิสัยแย่ๆ 
          และสร้างนิสัยใหม่ที่จะติดตัวคุณไปตลอดชีวิต`,
      author: 'James Clear',
      publisher: 'Avery',
      pages: 320,
      language: 'อังกฤษ',
      available: 1,
    },
  ];

  const handleBookSelect = (book: Book) => {
    setFormData((prev) => ({
      ...prev,
      selectedBook: book,
    }));
    onNext();
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-3">
          หนังสือแนะนำ
        </h2>
        <p className="text-lg text-yellow-700 font-medium">
          เลือกหนังสือที่ต้องการยืม
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            onClick={() => handleBookSelect(book)}
            className="overflow-hidden rounded-2xl border-2 border-pink-100 bg-white/80 shadow-md cursor-pointer hover:scale-[1.02] transition"
          >
            <div className="p-5 bg-linear-to-r from-pink-50 to-yellow-50">
              <p className="text-xl font-bold text-pink-700">
                ชื่อหนังสือ: {book.title}
              </p>
              <p className="mt-2 text-base text-yellow-700 font-medium">
                จำนวนคงเหลือ: {book.available} เล่ม
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onPrev}
        className="w-full rounded-2xl bg-yellow-200 py-4 text-lg font-extrabold text-yellow-800 shadow-md hover:bg-yellow-300"
      >
        ย้อนกลับ
      </button>
    </div>
  );
}