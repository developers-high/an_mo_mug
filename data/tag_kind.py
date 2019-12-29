fr=open("./data/sofo-info.txt",'r',encoding='utf8')
fw=open("./data/tag.txt",'w',encoding='utf8')
for line in fr.readlines():
    if '#' in line and not '0' in line:
        fw.write(line)

fr.close()
fw.close()