JavaScript Toy Problems - Week 1
Overview
This repository contains solutions to a series of JavaScript toy problems designed to strengthen problem-solving skills and reinforce core programming concepts. The challenges cover key JavaScript fundamentals, including functions, loops, conditionals, arrays, and object-oriented programming.

Project Structure
Each challenge is implemented in a separate file within the repository. The following table provides an overview of the challenges and their respective functionalities:

Challenge	Description
student-grade-generator.js	Assigns a grade based on student marks.
speed-detector.js	Determines whether a vehicle exceeds the speed limit and calculates demerit points.
net-salary-calculator.js	Computes net salary after applying tax, NHIF, and NSSF deductions.
bubble-sort.js	Implements the Bubble Sort algorithm to sort an array.
staircase.js	Generates a staircase pattern using # symbols.
cylinder-volume.js	Uses object-oriented programming to calculate the volume of a cylinder.
Installation & Usage
Prerequisites
Ensure that Node.js is installed on your system.
Clone the repository to your local machine:
sh
Copy
Edit
git clone https://github.com/jacksonmativo/javascript-toy-problems.git
Navigate to the project directory:
sh
Copy
Edit
cd javascript-toy-problems
Running a JavaScript File
To execute a specific challenge, use the following command:

sh
Copy
Edit
node filename.js
Example:

sh
Copy
Edit
node student-grade-generator.js
Challenge Descriptions
1. Student Grade Generator
Accepts student marks (0-100) as input and assigns a grade based on the following criteria:
A: Above 79
B: 60 - 79
C: 50 - 59
D: 40 - 49
E: Below 40
2. Speed Detector
Evaluates vehicle speed and applies penalties based on the following conditions:
If speed is ≤ 70 km/h, output "Ok".
For every 5 km/h above 70, issue 1 demerit point.
If points exceed 12, output "License suspended".
3. Net Salary Calculator
Computes net salary by factoring in:
Gross Salary = Basic Salary + Benefits
Deductions (PAYE, NHIF, NSSF) based on Kenya Revenue Authority (KRA) tax guidelines.
4. Bubble Sort Algorithm
Implements the Bubble Sort algorithm to sort an array of numbers in ascending order.
5. Staircase Pattern
Generates a staircase structure of # symbols based on a given integer input.
6. Cylinder Volume Calculation
Utilizes Object-Oriented Programming (OOP) principles to calculate the volume of a cylinder using the formula:
𝑉
=
𝜋
𝑟
2
ℎ
V=πr 
2
 h
Where:
𝑟
r = Radius
ℎ
h = Height
Author
[Your Name]
GitHub: Your GitHub Profile
License
This project is free to use, modify, and distribute.

Future Enhancements
 Implement unit tests for each function.
 Optimize solutions for efficiency.
 Expand the repository with additional coding challenges.
