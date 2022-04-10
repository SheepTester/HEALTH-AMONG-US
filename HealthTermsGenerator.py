import random

thing = []
with open("wordlist.txt",'r') as file:
   
        # reading each line    
    for line in file:
   
            # reading each word        
        for word in line.split():
   
                # displaying the words           
            thing.append(word)
    #reads a file with words and prints each word to an array
    #learned from geeks4geeks 


word = random.choice(thing)

number = random.uniform(-1,1)

statement = "hi" #dummy value

if(number > 0):
    statement = "which means it is good for you."
if(number < 0):
    statement = "which means it is bad for you."
else:
    statement = "which is neutral for your health."

print(word, "has a health value of ", number,statement)