'use client';

import React from 'react';
import Link from 'next/link';
import type { Book } from '../page';

interface Step3Props {
  selectedBook: Book;
}

interface Step3Props {
  selectedBook: Book;
}

export default function Step3({ selectedBook }: Step3Props) {
  return (
    <div className="w-full flex flex-col gap-8 items-center text-center">
      <div className="w-24 h-24 rounded-full bg-pink-200 flex items-center justify-center text-5xl shadow-md">
        💖
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700">
        การยืมเสร็จสิ้น
      </h1>

      <div className="bg-white/80 rounded-3xl px-8 py-8 shadow-lg w-full border-2 border-pink-100">
        <p className="text-xl md:text-2xl font-bold text-pink-700 mb-4">
          หนังสือ: {selectedBook.title}
        </p>

        <div className="space-y-2 text-left">
          <p>
            <span className="font-bold text-pink-700">ผู้แต่ง:</span>{' '}
            <span className="text-slate-800">{selectedBook.author}</span>
          </p>
          <p>
            <span className="font-bold text-pink-700">สำนักพิมพ์:</span>{' '}
            <span className="text-slate-800">{selectedBook.publisher}</span>
          </p>
          <p>
            <span className="font-bold text-pink-700">จำนวนหน้า:</span>{' '}
            <span className="text-slate-800">{selectedBook.pages}</span>
          </p>
          <p>
            <span className="font-bold text-pink-700">ภาษา:</span>{' '}
            <span className="text-slate-800">{selectedBook.language}</span>
          </p>
          <p>
            <span className="font-bold text-pink-700">คงเหลือ:</span>{' '}
            <span className="text-slate-800">
              {selectedBook.available} เล่ม
            </span>
          </p>
        </div>


        <div className="mt-4 text-left">
          <p className="font-bold text-pink-700 mb-1">รายละเอียด:</p>
          <p className="text-slate-700 whitespace-pre-line">
            {selectedBook.description}
          </p>
        </div>
      </div>


      <div className="bg-white/70 rounded-3xl px-8 py-6 shadow-md w-full border border-yellow-100">
        <p className="text-xl md:text-2xl font-bold text-pink-700">
          กรุณามารับหนังสือภายใน 7 วัน
          <br />
          และกำหนดคืนภายใน 30 วัน
        </p>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="flex-1 bg-pink-200 hover:bg-pink-300 rounded-2xl py-4 text-xl font-extrabold text-pink-800"
        >
          หน้าหลัก
        </Link>

        <Link
          href="/mybook"
          className="flex-1 bg-yellow-200 hover:bg-yellow-300 rounded-2xl py-4 text-xl font-extrabold text-yellow-800"
        >
          หนังสือของฉัน
        </Link>
      </div>
    </div>
  );
}