
def calc_area(radius):
    pi = 3.142
    area = pi * (radius * radius)
    return area

radius_new = input('Type in a radius of a circle:  ')

result = calc_area(int(radius_new))
print(f'The area is {result}')



    
