import json

from core.database import db_session
from core.template import UserTemplates, theme_asset
from fastapi import APIRouter
from sqlalchemy import delete, insert, select, update
from starlette.requests import Request

from .. import plugin_config
from ..models import Schedule
from ..plugin_config import module_name

router = APIRouter()

templates = UserTemplates()
templates.env.globals["theme_asset"] = theme_asset

@router.get("/info")
def info(request: Request, db:db_session):
    return templates.TemplateResponse(
        f"{plugin_config.TEMPLATE_PATH}/info.html",
        {
            "request": request,
            "title": f"일정",
            "content": f"일정",
        })

@router.get("/get")
def show(request: Request, db:db_session):
    schedule=db.get(Schedule, 1)
    return schedule.data

@router.post("/set")
async def setting(request: Request, db:db_session):
    request_body = await request.json()
    db.execute(
        update(Schedule).values(
            data=request_body,
        ).where(Schedule.id==1)
    )
    db.commit()
    return {"message": "Received JSON data successfully"}
