import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


class Recommender:

    def __init__(self, path):

        self.df = pd.read_csv(path)

        self.df['combined'] = (
            self.df['name'] + " " +
            self.df['category'] + " " +
            self.df['description']
        )

        self.vectorizer = TfidfVectorizer(
            stop_words='english'
        )

        self.vectors = self.vectorizer.fit_transform(
            self.df['combined']
        )

        self.similarity = cosine_similarity(
            self.vectors
        )

    def get_all_products(self):
        return self.df.to_dict(orient="records")

    def recommend(self, product_id, top_n=5):

        if product_id not in self.df['id'].values:
            return {"error": "Product not found"}

        idx = self.df[
            self.df['id'] == product_id
        ].index[0]

        scores = list(
            enumerate(self.similarity[idx])
        )

        scores = sorted(
            scores,
            key=lambda x: x[1],
            reverse=True
        )

        recommendations = []

        for i in scores[1:top_n + 1]:

            product = self.df.iloc[i[0]].to_dict()

            product["similarity_score"] = round(
                float(i[1]),
                2
            )

            recommendations.append(product)

        return recommendations

    def search_products(self, query):

        results = self.df[
            self.df['name'].str.contains(
                query,
                case=False
            )
        ]

        return results.to_dict(orient="records")