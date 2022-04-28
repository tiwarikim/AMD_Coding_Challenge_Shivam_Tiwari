# Find the maximum of a list
def max(l_int):
    #length of input
    length = len(l_int)

    #Using Conditional Statement for Comparison and Removing Unwanted Element
    if length == 1:
        return l_int
    elif l_int[length-1]>=l_int[length-2]:
        del l_int[length-2]
    elif l_int[length-1]<=l_int[length-2]:
        del l_int[length-1]

    return max(l_int)

def main():
    input = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    print(max(input))

if __name__ == "__main__":
    main()

