from sqlalchemy import Column, Integer, String
from .database import Base

class BorrowedBook(Base):
    __tablename__ = "borrowed_books"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    borrowDate = Column(String)
    pickupDate = Column(String)
    dueDate = Column(String)
    status = Column(String)