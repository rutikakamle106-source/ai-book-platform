def simple_rag(query):
    data = [
        "AI book",
        "Django guide",
        "React tutorial"
    ]
    return [d for d in data if query.lower() in d.lower()]