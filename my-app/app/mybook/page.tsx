'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BorrowedBook {
  id?: number;
  title: string;
  borrowDate: string;
  pickupDate: string;
  dueDate: string;
  status: string;
}

export default function MyBookPage() {
  const [books, setBooks] = useState<BorrowedBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ดึงข้อมูลจาก FastAPI
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3340/api/mybooks');
        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-100 via-yellow-50 to-pink-50 px-6 py-10">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700">
              หนังสือของฉัน
            </h1>
            <p className="mt-2 text-lg text-yellow-700 font-medium">
              รายการหนังสือที่คุณยืมไว้
            </p>
          </div>

          <Link
            href="/"
            className="inline-block bg-pink-200 hover:bg-pink-300 transition rounded-2xl px-6 py-3 text-lg font-bold text-pink-800 shadow-md text-center"
          >
            กลับหน้าหลัก
          </Link>
        </div>

        {loading ? (
          <div className="text-center text-pink-700 font-bold text-xl">กำลังโหลดข้อมูล...</div>
        ) : books.length === 0 ? (
          <div className="bg-white/80 rounded-3xl shadow-md border-2 border-pink-100 p-8 text-center">
            <p className="text-xl font-bold text-pink-700">
              ยังไม่มีหนังสือที่ยืม
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <div key={book.id || index} className="bg-white/80 rounded-3xl shadow-md border-2 border-pink-100 p-6 hover:shadow-lg transition">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl mb-4">
                  📖
                </div>

                <h2 className="text-2xl font-extrabold text-pink-700 mb-3 line-clamp-1">
                  {book.title}
                </h2>

                <div className="space-y-2 text-base">
                  <p className="text-slate-700">
                    <span className="font-bold text-yellow-700">วันที่ยืม:</span> {book.borrowDate}
                  </p>
                  <p className="text-slate-700">
                    <span className="font-bold text-yellow-700">มารับภายใน:</span> {book.pickupDate}
                  </p>
                  <p className="text-slate-700">
                    <span className="font-bold text-yellow-700">กำหนดคืน:</span> {book.dueDate}
                  </p>
                  <p className="text-slate-700">
                    <span className="font-bold text-yellow-700">สถานะ:</span>{' '}
                    <span className="text-pink-700 font-bold bg-pink-100 px-2 py-1 rounded-lg">{book.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}