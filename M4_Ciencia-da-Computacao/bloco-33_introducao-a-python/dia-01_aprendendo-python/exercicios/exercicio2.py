def average(list_numbers):
    list_size = len(list_numbers)
    total = 0
    for number in list_numbers:
        total += number
    return total / list_size


print(average([5, 3, 8, 9, 10]))
