from datetime import datetime

from core.database import DBConnect
from core.models import Base
from sqlalchemy import JSON, Boolean, Column, DateTime, Integer, String, Text


class Schedule(Base):
    __tablename__ = DBConnect().table_prefix + "schedule"
    id = Column(Integer, primary_key=True, index=True)
    data=Column(JSON)

# 상단의 (Base) 를 상속받은 모델들을 DB 에 테이블 생성한다. 최하단에 있어야한다.
Base.metadata.create_all(bind=DBConnect().engine)
