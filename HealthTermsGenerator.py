#THiS PROGAM ENHANCES OUR AI MODEL BY USING NON AI TECHNIQUES
#definitely DOES NOT use RAND library



#no don't pay attention to this besties
import random

msg = "Presenting Health Among Us"
print(msg)
msg2 = "made by a couple of coding crewmates"
print(msg2)
msg3 = " ~ thank you and please enjoy!! ~"
print(msg3)

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

#look at us using flash

#slayinggggg SLADYYYYYYYYYYY
from flask import Flask
app = Flask(__name__)
  
@app.route('/<message>/') #takes in some sort of input very very very fun 
def hello_name(message):
    #returns a message 
   return message + " has a value of " + str(number)
  
if __name__ == '__main__':
   app.run()