from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import engine, get_db

# สร้างตารางในฐานข้อมูล
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="TU-PINE Books API")

# 5. การตั้งค่า CORS ให้ Next.js (พอร์ต 3000) เข้าถึงได้
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # ในโปรดักชันควรระบุเป็น ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/borrow", response_model=schemas.BorrowedBookResponse)
def borrow_book(book: schemas.BorrowedBookCreate, db: Session = Depends(get_db)):
    return crud.create_borrowed_book(db=db, book=book)

@app.get("/api/mybooks", response_model=list[schemas.BorrowedBookResponse])
def read_my_books(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    books = crud.get_borrowed_books(db, skip=skip, limit=limit)
    return books