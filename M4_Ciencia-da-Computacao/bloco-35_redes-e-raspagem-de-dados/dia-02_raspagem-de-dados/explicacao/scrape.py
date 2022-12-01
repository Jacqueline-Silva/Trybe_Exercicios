from parsel import Selector
import requests

# site próprio para o treinamento de raspagem de dados
URL = "http://books.toscrape.com/"

response = requests.get(URL)
selector = Selector(text=response.text)

text_warning = selector.css("div.alert-warning::text").get()
thumb_url = selector.css("div.image_container a::attr(href)").get()

response_thumb = requests.get(URL + thumb_url)
selector_thumb = Selector(text=response_thumb.text)

book_title = selector_thumb.css("div.product_main h1::text").get()
description = selector_thumb.css("#product_description ~ p::text").get()
print(description)

titles = selector.css(".product_pod h3 a::attr(title)").getall()
prices = selector.css(".product_price .price_color::text").getall()
# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)


# URL_BASE = "http://books.toscrape.com/catalogue/"
# next_page_url = 'page-1.html'
# while next_page_url:
#     response = requests.get(URL_BASE + next_page_url)
#     selector = Selector(text=response.text)
#     for product in selector.css(".product_pod"):
#         title = product.css("h3 a::attr(title)").get()
#         price = product.css(".price_color::text").get()
#         print(title, price)
#     next_page_url = selector.css(".next a::attr(href)").get()
