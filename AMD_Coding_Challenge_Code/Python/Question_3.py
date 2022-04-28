# function to output pairs of string from first and last elements
def pairs(input):
    # check for single
    if len(input) == 1:
        return [(input[0],)]

    #check for single pair
    if len(input) == 2:
        return [(input[0], input[1])]

    else:
        # put first and last of current input list to list_p using recursion
        list_p = pairs(input[1:-1])
        #append result pair to list_p
        list_p = [(input[0], input[-1])] + list_p

        return list_p


def main():
    s = "123R456"

    print(pairs(s))


if __name__ == "__main__":
    main()