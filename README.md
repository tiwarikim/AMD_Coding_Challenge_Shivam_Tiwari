# AMD_Coding_Challenge_Shivam_Tiwari
Python

Question -1

I did question 1 by two different recursive methods 
1) In 1st recursive method I used conditional statement for comparison and deleted the element except max element from list
2) In 2nd method i used max inbuit function and called function recurcively in it to sort the max element of the provided input list  

Question-2

Aim was to transform the jason object 
I used json.loads() method to parse a valid JSON string and convert it into a Python Dictionary, then i created a for loop to add all avaliable city in the data, inside the for loop i check if the hero name is present in "superherobycity" and skip. Or esle I appended superherobycity, I created another for loop to add the names of super hero to the corresponding city names Inside the for lopp I cheched if the city name is avaliable in superherobycity and added the city name to it. I used the data.pop() to remove the redundenncy in data 

Qyestion-3

Aim was to implement a python recursive function, which accept string and yelds the output as below 
Input="123R456"
output = output=[(1,6),(2,5),(3,4),(R,)]
I first checked if the input list has single element if yes then it will return a single element pair, in second condition I checked if there is two elements in list and return those two element as a pair else if put first and last element  of current input list to list_p using recursion.I then appended result pair to list_p and return the result 


React/ Vanilla JS: 

1. Build a user interface in react / vanilla JS as below: 

Requirements: 

1. Create an application that accepts words from a user and sorts the words alphabetically into four columns, vertically, then horizontally. 
2. The last row should be the only row that contains any empty cells if the number of words is not evenly divisible by 4. 
3. Click "Arrange" / Enter to sort and arrange 
4. Click a word to remove it and resort and re-arrange 
5. Click "Reset" to start over 

Solution:

I have created a React application using “npx create-react-app”. Inside the src directory, I have created an App.js file which has the program logic and the main UI is implemented. This file has the following functions
:-
•	arrangeSortedList() -Arranges the sorted list in order.
•	arrange()- this function splits the input string and sorts the word in ascending order alphabetically.
•	handleReset() - This function runs everytime the 'Reset' button is pressed. It resets the application.
•	remove() - This function runs when a word button is pressed.
•	handleEnter() - When a user presses the "Enter/return" key, this function is triggered which then simply calls the arrange() function.
For the word container, I have used Flexbox of 4 columns which maps through the  array and returns the sorted list of word. Each word is a button which displays the individual words of the sentence in sorted order.
 




JavaScript: 

If you are not familiar with JS, you can implement the same with Python/Scala. 
1. Given a JSON as below, write a function that returns top 2 rank products 

const productRankings=[ 
{"name":"AMD_Product-A","rank":1}, 
{"name":"AMD_Product-B","rank":10}, 
{"name":"AMD_Product-C","rank":2}, 
{"name":"AMD_Product-X","rank":4}] 
Output: 
{"top2":["AMD_Product-A","AMD_Product-C"]}

Solution: 
First sort the product by ranking using the sort() 
Create key-value pair for first two products of the sorted list
Return the key-value pair

2) Given a 2D array, implement the “transform” function to produce the desired output
Input:
const d1 = [1, 2, 3];
const d2 = [4, 5, 6];
const d3 = [7, 8, 9, 11, 12, 13, 15];
const data = [d1, d2, d3];
Implement:
function transform(data) {
  ...
  ...
}

transform(data)

Solution:
Run the map for the last element as we know the largest array is the last array. T
hen we loop through the first row and at each element to see if the element is undefined, if no, then we add undefined to it. 
This way we are able to fill the array with undefined to make the size equal to the largest array.
Then we run a foreach loop through the 0th row of the data array and then return an array by looping column wise. 


MySql

Question-1 

I first created a database for the table. I then create the table named product_price and put all required elements into the table. 
I selected the necessary columns(Brand, Name, Price) with an additional column called 'Rank' to show respectful rankings of prices according to the company. For this rank() function is used. Alongwith rank() function over() is used and inside it we need to divide the groups of rankings according to brand and arrange the price so that it would give proper output. 

Question-2

I created the required schema and table and I used a subquery to compute the ranking, and then, in the main query, I filter the results so that only the top ranking. To write such a query on our own, I put the ranking query inside a subquery, and write filtering around it are shown. In our question, where Ranking = 2 is used.

