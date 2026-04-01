'use client';

import React from "react";
import type { Book } from "../page";

interface Step2Props {
  selectedBook: Book;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => Promise<boolean>;
}

export default function Step2({ selectedBook, onNext, onPrev, onSubmit }: Step2Props) {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-4xl font-extrabold text-pink-700 text-center">
        รายละเอียดหนังสือ
      </h2>

      <div className="bg-white/80 rounded-3xl p-6 shadow-lg border-2 border-pink-100 space-y-3">
        <p className="text-2xl font-bold text-pink-700">{selectedBook.title}</p>

        <p className="text-yellow-700 font-semibold">
          "{selectedBook.tagline}"
        </p>

        <p className="text-slate-700">{selectedBook.description}</p>

        <hr />

        <p>
          <span className="font-bold text-pink-700">ผู้แต่ง:</span>{" "}
          <span className="text-slate-800">{selectedBook.author}</span>
        </p>

        <p>
          <span className="font-bold text-pink-700">สำนักพิมพ์:</span>{" "}
          <span className="text-slate-800">{selectedBook.publisher}</span>
        </p>

        <p>
          <span className="font-bold text-pink-700">จำนวนหน้า:</span>{" "}
          <span className="text-slate-800">{selectedBook.pages}</span>
        </p>

        <p>
          <span className="font-bold text-pink-700">ภาษา:</span>{" "}
          <span className="text-slate-800">{selectedBook.language}</span>
        </p>

        <p>
          <span className="font-bold text-pink-700">คงเหลือ:</span>{" "}
          <span className="text-slate-800">{selectedBook.available} เล่ม</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">

        <button
          onClick={async () => {
            const success = await onSubmit();
            if (success) {
              onNext(); 
            }
          }}
          className="w-full rounded-2xl bg-pink-200 py-4 text-lg font-extrabold text-pink-800 hover:bg-pink-300"
        >
          ยืมหนังสือ
        </button>

        <button
          onClick={onPrev}
          className="w-full rounded-2xl bg-yellow-200 py-4 text-lg font-extrabold text-yellow-800 hover:bg-yellow-300"
        >
          ย้อนกลับ
        </button>
      </div>
    </div>
  );
}