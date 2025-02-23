from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

#para usar FastAPI, primero se debe instalar con pip install fastapi
#para usar pydantic, primero se debe instalar con pip install pydantic (ya viene con FastAPI) 

app = FastAPI()

@app.get("/check/")
def check():   
    return 200   

@app.get("/info/")
def showinfo():   
    return {  "Instancia": "Maquian 1 - API 1", 
            "Curso": "Seminario de Sistemas 1",
            "Grupo": "Grupo 12",
         }   

