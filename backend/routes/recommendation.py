from fastapi import APIRouter

from services.recommender import Recommender

router = APIRouter()

recommender = Recommender(
    "data/products.csv"
)


@router.get("/")
def home():
    return {
        "message": "API Running"
    }


@router.get("/products")
def get_products():
    return recommender.get_all_products()


@router.get("/recommend/{product_id}")
def recommend(product_id: int):
    return recommender.recommend(product_id)


@router.get("/search")
def search(query: str):
    return recommender.search_products(query)