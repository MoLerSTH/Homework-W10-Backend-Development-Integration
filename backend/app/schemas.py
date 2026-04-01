from pydantic import BaseModel

class BorrowedBookBase(BaseModel):
    title: str
    borrowDate: str
    pickupDate: str
    dueDate: str
    status: str

class BorrowedBookCreate(BorrowedBookBase):
    pass

class BorrowedBookResponse(BorrowedBookBase):
    id: int

    class Config:
        from_attributes = True