from fastapi import FastAPI, Response

app = FastAPI()

@app.get("/check/")
def check(response: Response):   
    response.status_code = 200
    return {"status": "OK"}

@app.get("/info/")
def showinfo():   
    return {
        "Instancia": "Maquina 1 - API 1",
        "Curso": "Seminario de Sistemas 1",
        "Grupo": "Grupo 12",
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3000)
