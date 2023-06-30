def Add(x,y):
    return x+y

def Subtract(x,y):
    return x-y

def Multiply(x,y):
    return x*y

def Divide(x,y):
    if y!=0:
        return x/y
    else:
        return "Error:Division by zero"
   
print("Caluculator Menu:")
print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. DIvison")

Choice = input("Enter your choice 1-4:")

if int(Choice) < 1 or int(Choice) > 4:
        print("Calculator Error")
        exit()
    

num1 = float(input("Enter the first number:"))
num2 = float(input("Enter the second number:"))

if Choice=='1':
    result = Add(num1,num2)
    operation = '+'
elif Choice=='2':
    result = Subtract(num1,num2)
    operation = '-'
    
elif Choice =='3':
    result = Multiply(num1,num2)
    operation = '*'
    
elif Choice =='4':
    result = Divide(num1,num2)
    operation = '/'
else:
    exit()
    
 print(f"{num1} {operation} {num2} = {result}")