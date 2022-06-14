import requests, random

api_url = 'https://ptsv2.com/t/r74k2-1655228511/post'
usernumber = random.randint(0,150)
payload = {"userId": usernumber,
"username":'Shubham',
'userpass':'Shubham123'
}
headers = {'content-type': 'application/json'}
 
r = requests.post(api_url, auth=('Shubham','Shubham123'), data=payload, headers=headers)

get_uri='https://ptsv2.com/t/r74k2-1655228511'
g = requests.get(get_uri)
print(g.json())
