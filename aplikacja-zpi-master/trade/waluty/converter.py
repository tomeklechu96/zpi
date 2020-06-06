import requests
import json
import csv
from datetime import date

def converter(code):

	d0 = date(2020, 1, 2)
	d1 = date.today()
	su = (d0 - d1)*-1
	count = str(su.days)
	print(count)
	di = str(date.today())
	print(di)

	p = ["2015-01-01", "2015-06-01", "2016-01-01", "2016-06-01", "2017-01-01", "2017-06-01", "2018-01-01", "2018-06-01", "2019-01-01", "2019-06-01", "2020-01-01", di]


	for i in range(11):
		dp = p[i]
		dk = p[i+1]

		url = 'https://api.nbp.pl/api/exchangerates/rates/a/'+code+'/'+dp+'/'+dk+'/?format=json' # w /last/LICZBA mozesz dac taka liczbe danych co chcesz
		response = requests.get(url)
		data = response.json()
		# print(json.dumps(data,indent=2))	#ladnie printuje json

		with open(code+'.csv', 'a', newline='') as file:
			csv_file = csv.writer(file)
			if i == 0:
				csv_file.writerow(["effectiveDate", "mid"])

			for item in data["rates"]:
				csv_file.writerow([item['effectiveDate'],item['mid']])


country_code = {
	"AUD": "australian_dollar",
	"EUR": "euro",
	"MXN": "mexican_peso",
	"RUB": "russian_rubel",
	"CNY": "chinese_yuan",
	"GBP": "british_pound",
	"USD": "american_dollar",
	"CZK": "czech_koruna",
	"CHF": "swiss_franc",
	"SEK": "swedish_krone",
	"NOK": "norwegian_krone",
	"DKK": "danish_krone",
	"HRK": "croatian_kuna",
	"HUF": "hungarian_forint",
	"ISK": "icelandic_krona",
	"BGN": "bulgarian_lev",
	"RON": "romanian_leu",
	"NZD": "new_zealand_dollar",
	"CAD": "canadian_dollar",
	"JPY": "japanese_yen",
	"SGD": "singapore_dollar",
	"HKD": "hong_kong_dollar",
	"KRW": "south_korean_won",
	"TRY": "turkish_lira",
	"INR": "indian_rupee",
	"BRL": "brazilian_real",
	"ZAR": "south_african_rand",
	"PHP": "philippine_peso",
	"IDR": "indonesian_rupiah",
	"MYR": "malysian_ringgit",
	"THB": "thai_baht",
	"ILS": "israeli_shekel"
}

for code in country_code:
	converter(code)