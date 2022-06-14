import requests, random

api_url = 'https://ptsv2.com/t/userId/post'
usernumber = random.randint(0,150)
payload = {"userId": usernumber,
"username":'kevin',
'userpass':'testing',
'favcolour':'yellow',
'favnumber':41,
}
headers = {'content-type': 'application/json'}
 
r = requests.post(api_url, auth=('kevin','testing'), data=payload, headers=headers)

get_uri='https://ptsv2.com/t/userId/d/latest/json'
g = requests.get(get_uri)
print(g.json())

