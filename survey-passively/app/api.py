from ninja import NinjaAPI


api = NinjaAPI()

@api.get("/hello")
def hello_world(request):
    return {"message": "Hello, World!"}