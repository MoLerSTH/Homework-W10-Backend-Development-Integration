from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# สร้างโฟลเดอร์ data ถ้ายังไม่มี (สำหรับเก็บไฟล์ db)
os.makedirs("/code/data", exist_ok=True)

SQLALCHEMY_DATABASE_URL = "sqlite:////code/data/books.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()