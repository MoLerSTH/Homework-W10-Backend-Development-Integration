'use client';

import { useState } from 'react';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';

export type Book = {
  title: string;
  tagline: string;
  description: string;
  author: string;
  publisher: string;
  pages: number;
  language: string;
  available: number;
};

export interface BorrowBookFormData {
  selectedBook: Book | null;
}

export default function FindBookPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<BorrowBookFormData>({
    selectedBook: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);

  const prevStep = () => {
    if (step === 1) {
      window.location.href = '/';
      return;
    }
    setStep((prev) => prev - 1);
  };

  const submitFormData = async () => {
    try {
      if (!formData.selectedBook) return false;

      const today = new Date();

      const borrowedBook = {
        title: formData.selectedBook.title,
        borrowDate: today.toLocaleDateString('th-TH'), // ปรับฟอร์แมตวันที่ให้อ่านง่าย
        pickupDate: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('th-TH'),
        dueDate: new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('th-TH'),
        status: 'รอรับหนังสือ',
      };

      // ยิง API ไปที่ FastAPI (พอร์ต 3340) แทนการใช้ Mock Server หรือ LocalStorage
      const response = await fetch('http://localhost:3340/api/borrow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(borrowedBook),
      });

      if (!response.ok) {
        throw new Error('Failed to borrow book');
      }

      return true;
    } catch (error) {
      console.error('Error:', error);
      alert('เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล');
      return false;
    }
  };

  return (
    <main className="w-full min-h-screen bg-linear-to-b from-pink-100 via-yellow-50 to-pink-50 px-6 py-10">
      <div className="w-full max-w-3xl mx-auto">

        {step === 1 && (
          <Step1
            formData={formData}
            onNext={nextStep}
            onPrev={prevStep}
            setFormData={setFormData}
          />
        )}

        {step === 2 && formData.selectedBook && (
          <Step2
            selectedBook={formData.selectedBook}
            onNext={nextStep}
            onPrev={prevStep}
            onSubmit={submitFormData}
          />
        )}

        {step === 3 && formData.selectedBook && (
          <Step3 selectedBook={formData.selectedBook} />
        )}

      </div>
    </main>
  );
}