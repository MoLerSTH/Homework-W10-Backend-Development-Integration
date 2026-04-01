from sqlalchemy.orm import Session
from . import models, schemas

def create_borrowed_book(db: Session, book: schemas.BorrowedBookCreate):
    db_book = models.BorrowedBook(**book.model_dump())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

def get_borrowed_books(db: Session, skip: int = 0, limit: int = 100):
    # เรียงลำดับจากใหม่ไปเก่า
    return db.query(models.BorrowedBook).order_by(models.BorrowedBook.id.desc()).offset(skip).limit(limit).all()