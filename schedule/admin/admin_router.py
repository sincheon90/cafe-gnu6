from typing import Optional

from core.database import db_session
from core.template import AdminTemplates
from fastapi import APIRouter, Depends, Form, Path
from lib.dependencies import validate_token
from sqlalchemy import delete, insert, select, update
from starlette.requests import Request
from starlette.responses import RedirectResponse

from .. import plugin_config
from ..models import Schedule
from ..plugin_config import admin_router_prefix, module_name

templates = AdminTemplates()
admin_router = APIRouter(prefix=admin_router_prefix, tags=['demo_admin'])


@admin_router.get("/test_demo_admin")
def show(request: Request):
    request.session["menu_key"] = module_name
    request.session["plugin_submenu_key"] = module_name + "1"

    return {
        "message": "Hello Admin Demo Plugin!",
        "pacakge": __package__,
        "__file__": __file__,
        "__name__": __name__,
    }
