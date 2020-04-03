import json
from urllib.request import urlopen
from bs4 import BeautifulSoup

kind = ["name", "tag", "location", "opening_hour", "call"]

json_file = open("store_info.json", "w")
json_array = {}
json_cnt = 0

for j in range(1, 10):
    parsedData = {}
    parsedData["number"] = str(j).zfill(4)

    fp = urlopen(
        'https://www.koreapas.com/m/sofo.php?back=1&Num=a_nam_' + str(j).zfill(4))
    html = fp.read().decode('cp949')
    soup = BeautifulSoup(html, "html.parser")

    if soup.find("img", src="https://www.koreapas.com/bbs/diskn/sticker/124.png"):
        continue

    # 이름
    name = soup.find(
        "span", style="font-size:7.5vw;font-weight:bold;color:#fff;text-shadow: 1px 1px 1px black;").text
    if name[0:4] == "(폐업)":
        continue
    parsedData[kind[0]] = name

    # 태그
    tag = soup.find_all(
        "span", style="display:inline-block;padding:2px 5px;color:#2b52e3;font-weight:bold;cursor:pointer")
    parsedData[kind[1]] = []
    for i in range(len(tag)):
        parsedData[kind[1]].append(tag[i].text)

    # 위치, 영업시간, 전화번호
    location = soup.find_all("span", style="color:#111;font-size:14px;")
    for i, data in zip([2, 3, 4], location):
        parsedData[kind[i]] = data.text

    # 저장
    json_array[str(json_cnt)] = dict(parsedData)
    json_cnt += 1
    print(str(j).zfill(4), "save Completed!")

json.dump(json_array, json_file, ensure_ascii=False)
json_file.close()
