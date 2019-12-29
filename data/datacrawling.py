from urllib.request import urlopen
from bs4 import BeautifulSoup

kind = ["이름 : ", "태그 : ", "위치 : ", "영업 시간 : ", "전화 : "]
f = open("./data/sofo-info2.txt", 'w', encoding='utf8')

for i in range(1, 380):
    resNum = str(i).zfill(4)
    html = urlopen(
        "https://www.koreapas.com/m/sofo.php?back=1&Num=a_nam_" + resNum)
    htmlCode = BeautifulSoup(html, "html.parser")

    for nameData in htmlCode.find_all("div", "background-img"):
        if not '폐업' in nameData.text and not htmlCode.find("img", src="https://www.koreapas.com/bbs/diskn/sticker/124.png"):
            introLine = '#' + resNum + '\\n' + kind[0] + nameData.text.strip() + '\\n' + kind[1]
            for tagData in htmlCode.find_all("span", style="display:inline-block;padding:2px 5px;color:#2b52e3;font-weight:bold;cursor:pointer"):
                introLine += tagData.text.strip() + ' '
            introLine += '\\n'
            for i, data in zip([2, 3, 4], htmlCode.find_all("span", style="color:#111;font-size:14px;")):
                introLine += kind[i]+data.text.strip() + '\\n'
            introLine += '\n'
            f.write(introLine)
f.close()