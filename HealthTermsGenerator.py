#THiS PROGAM ENHANCES OUR AI MODEL BY USING NON AI TECHNIQUES
#definitely DOES NOT use RAND library



#no don't pay attention to this besties
import random

thing = [] #just a thing we're using 
with open("wordlist.txt",'r') as file:
   
        # reading each line    
    for line in file:
   
            # reading each word        
        for word in line.split():
   
                # displaying the words           
            thing.append(word)
    #reads a file with words and prints each word to an array
    #learned from geeks4geeks 


word = random.choice(thing) #this is not the random library

number = random.uniform(-1,1) #neither is this 

statement = "hi" #dummy value

#incredible so smart 
print(word, "has a health value of ", number,)
