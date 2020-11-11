newfile = open('allwords.json','w')

f = open('words.txt','r')
word = f.readline()
word = word.strip()
word = '"' + word + '"'
print(word + ',')
newfile.write(word + '\n')

while(word != '"",'):
  word = f.readline()
  word = word.strip()
  word = '"' + word + '"' + ","
  print(word)
  newfile.write(word + '\n')


newfile.close()