#find maximum
#function to return maximum element using recursion
def findMaxRec(A, n):
    #if n == 0 means whole array has been traversed
    if (n == 1):
        return A[0]
    return max(A[n - 1], findMaxRec(A, n - 1))

if __name__ == "__main__":
    A = [1,2,3,4,5,6,7,8,9]
    n = len(A)
    print(findMaxRec(A, n))