import requests
from bs4 import BeautifulSoup


def scrap():
    
    URL = 'https://www.money.pl/pieniadze/nbp/srednie/'
    page = requests.get(URL)

    soup = BeautifulSoup(page.content, 'lxml')
    content = soup.find('div', {'class' :'rt-table'})
    
    for i in content:
        names = i.find
    

    
scrap()

