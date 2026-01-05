const QUIZ_DATA = {
  java: [{
             q: "Which keyword is used to inherit a class in Java?",
             options: ["this", "super", "extends", "implements"],
             answer: 2
           },
           {
             q: "Which collection does NOT allow duplicate values?",
             options: ["List", "Set", "Map", "ArrayList"],
             answer: 1
           },
           {
             q: "Which method is the entry point of a Java program?",
             options: ["start()", "main()", "run()", "init()"],
             answer: 1
           },
           {
             q: "Which interface is used to achieve abstraction?",
             options: ["class", "abstract class", "interface", "object"],
             answer: 2
           },
           {
             q: "Which JVM memory area stores class metadata?",
             options: ["Heap", "Stack", "Metaspace", "PC Register"],
             answer: 2
           },
           {
             q: "Which keyword prevents method overriding?",
             options: ["static", "final", "private", "protected"],
             answer: 1
           },
           {
             q: "Which exception is unchecked?",
             options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"],
             answer: 2
           },
           {
             q: "Which collection maintains insertion order?",
             options: ["HashSet", "TreeSet", "LinkedHashSet", "Set"],
             answer: 2
           },
           {
             q: "Which keyword is used to create an object?",
             options: ["class", "object", "new", "create"],
             answer: 2
           },
           {
             q: "Which Java feature supports runtime polymorphism?",
             options: ["Overloading", "Overriding", "Encapsulation", "Abstraction"],
             answer: 1
           },
           {
             q: "Which access modifier allows visibility within package only?",
             options: ["private", "protected", "default", "public"],
             answer: 2
           },
           {
             q: "Which keyword is used to handle exceptions?",
             options: ["catch", "throw", "throws", "All of the above"],
             answer: 3
           },
           {
             q: "Which class is the parent of all classes in Java?",
             options: ["Main", "System", "Object", "Class"],
             answer: 2
           },
           {
             q: "Which loop is guaranteed to execute at least once?",
             options: ["for", "while", "do-while", "foreach"],
             answer: 2
           },
           {
             q: "Which package contains Scanner class?",
             options: ["java.util", "java.io", "java.lang", "java.net"],
             answer: 0
           },
           {
             q: "Which collection allows key-value pairs?",
             options: ["List", "Set", "Map", "Queue"],
             answer: 2
           },
           {
             q: "Which keyword refers to the current object?",
             options: ["this", "super", "self", "object"],
             answer: 0
           },
           {
             q: "Which method compares string values?",
             options: ["==", "equals()", "compare()", "match()"],
             answer: 1
           },
           {
             q: "Which stream is used to read data?",
             options: ["OutputStream", "InputStream", "PrintStream", "Writer"],
             answer: 1
           },
           {
             q: "Which keyword is used for multiple inheritance in Java?",
             options: ["extends", "implements", "inherit", "interface"],
             answer: 1
           },
           {
             q: "Which Java version introduced lambda expressions?",
             options: ["Java 5", "Java 6", "Java 7", "Java 8"],
             answer: 3
           },
           {
             q: "Which collection is synchronized?",
             options: ["ArrayList", "HashMap", "Vector", "HashSet"],
             answer: 2
           },
           {
             q: "Which operator is used for logical AND?",
             options: ["&", "&&", "|", "||"],
             answer: 1
           },
           {
             q: "Which keyword is used to define a constant?",
             options: ["static", "final", "const", "define"],
             answer: 1
           },
           {
             q: "Which block always executes whether exception occurs or not?",
             options: ["try", "catch", "throw", "finally"],
             answer: 3
           }],
  sql: [  {
            q: "What does SQL stand for?",
            options: [
              "Structured Query Language",
              "Simple Query Language",
              "Sequential Query Language",
              "Standard Query Logic"
            ],
            answer: 0
          },
          {
            q: "Which SQL statement is used to retrieve data?",
            options: ["GET", "SELECT", "FETCH", "READ"],
            answer: 1
          },
          {
            q: "Which clause is used to filter records?",
            options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
            answer: 2
          },
          {
            q: "Which SQL keyword is used to sort the result set?",
            options: ["SORT BY", "ORDER BY", "GROUP BY", "FILTER"],
            answer: 1
          },
          {
            q: "Which command is used to remove all records from a table?",
            options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
            answer: 2
          },
          {
            q: "Which SQL function returns the number of rows?",
            options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
            answer: 1
          },
          {
            q: "Which keyword is used to eliminate duplicate rows?",
            options: ["UNIQUE", "DISTINCT", "REMOVE", "FILTER"],
            answer: 1
          },
          {
            q: "Which JOIN returns only matching records from both tables?",
            options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
            answer: 3
          },
          {
            q: "Which JOIN returns all records from the left table?",
            options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN"],
            answer: 0
          },
          {
            q: "Which SQL statement is used to insert new data?",
            options: ["ADD", "INSERT INTO", "UPDATE", "CREATE"],
            answer: 1
          },
          {
            q: "Which statement is used to modify existing records?",
            options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
            answer: 2
          },
          {
            q: "Which statement is used to delete records?",
            options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
            answer: 1
          },
          {
            q: "Which constraint ensures unique values in a column?",
            options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "NOT NULL"],
            answer: 2
          },
          {
            q: "Which constraint uniquely identifies each row?",
            options: ["UNIQUE", "NOT NULL", "FOREIGN KEY", "PRIMARY KEY"],
            answer: 3
          },
          {
            q: "Which clause is used with aggregate functions?",
            options: ["WHERE", "GROUP BY", "ORDER BY", "LIMIT"],
            answer: 1
          },
          {
            q: "Which clause filters grouped data?",
            options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
            answer: 2
          },
          {
            q: "Which function returns the highest value?",
            options: ["MAX()", "TOP()", "HIGH()", "UPPER()"],
            answer: 0
          },
          {
            q: "Which function returns the lowest value?",
            options: ["MIN()", "LOW()", "SMALL()", "BOTTOM()"],
            answer: 0
          },
          {
            q: "Which keyword is used to rename a column?",
            options: ["AS", "RENAME", "ALIAS", "CHANGE"],
            answer: 0
          },
          {
            q: "Which SQL statement creates a table?",
            options: ["NEW TABLE", "ADD TABLE", "CREATE TABLE", "MAKE TABLE"],
            answer: 2
          },
          {
            q: "Which statement deletes a table structure?",
            options: ["DELETE", "REMOVE", "TRUNCATE", "DROP"],
            answer: 3
          },
          {
            q: "Which operator is used to check a range?",
            options: ["IN", "LIKE", "BETWEEN", "ANY"],
            answer: 2
          },
          {
            q: "Which operator is used for pattern matching?",
            options: ["LIKE", "IN", "BETWEEN", "MATCH"],
            answer: 0
          },
          {
            q: "Which SQL clause limits the number of rows returned?",
            options: ["TOP", "LIMIT", "ROWNUM", "All of the above"],
            answer: 3
          },
          {
            q: "Which normal form removes partial dependency?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            answer: 1
          }],
  web: [{
            q: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "High Text Machine Language",
              "Hyperlinks and Text Markup Language",
              "Home Tool Markup Language"
            ],
            answer: 0
          },
          {
            q: "Which HTML tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: 1
          },
          {
            q: "Which HTML tag is used to insert an image?",
            options: ["<image>", "<img>", "<src>", "<picture>"],
            answer: 1
          },
          {
            q: "Which attribute is required for the <img> tag?",
            options: ["title", "alt", "src", "href"],
            answer: 2
          },
          {
            q: "Which tag is used for the largest heading?",
            options: ["<h6>", "<h4>", "<heading>", "<h1>"],
            answer: 3
          },
          {
            q: "What does CSS stand for?",
            options: [
              "Colorful Style Sheets",
              "Creative Style System",
              "Cascading Style Sheets",
              "Computer Style Sheets"
            ],
            answer: 2
          },
          {
            q: "Which CSS property is used to change text color?",
            options: ["font-color", "text-color", "color", "background-color"],
            answer: 2
          },
          {
            q: "Which CSS property controls the text size?",
            options: ["font-style", "text-size", "font-size", "size"],
            answer: 2
          },
          {
            q: "Which symbol is used for ID selector in CSS?",
            options: [".", "#", "*", "&"],
            answer: 1
          },
          {
            q: "Which symbol is used for class selector in CSS?",
            options: ["#", ".", "*", "%"],
            answer: 1
          },
          {
            q: "Which CSS layout model arranges items in rows or columns?",
            options: ["Grid", "Block", "Inline", "Float"],
            answer: 0
          },
          {
            q: "Which CSS property is used to create space inside an element?",
            options: ["margin", "border", "padding", "spacing"],
            answer: 2
          },
          {
            q: "Which JavaScript keyword is used to declare a variable?",
            options: ["int", "var", "define", "letvar"],
            answer: 1
          },
          {
            q: "Which JavaScript keyword is block-scoped?",
            options: ["var", "let", "function", "static"],
            answer: 1
          },
          {
            q: "Which symbol is used for single-line comments in JavaScript?",
            options: ["<!-- -->", "/* */", "//", "#"],
            answer: 2
          },
          {
            q: "Which function is used to print output in console?",
            options: ["console.print()", "log()", "console.log()", "print()"],
            answer: 2
          },
          {
            q: "Which event occurs when a button is clicked?",
            options: ["onchange", "onmouseover", "onclick", "onload"],
            answer: 2
          },
          {
            q: "Which method is used to select an element by ID?",
            options: [
              "getElementByClass()",
              "getElementByName()",
              "getElementById()",
              "queryElement()"
            ],
            answer: 2
          },
          {
            q: "Which keyword is used to define a function in JavaScript?",
            options: ["method", "function", "define", "func"],
            answer: 1
          },
          {
            q: "Which operator is used for strict equality?",
            options: ["==", "=", "===", "!="],
            answer: 2
          },
          {
            q: "Which JavaScript data type stores true or false?",
            options: ["String", "Boolean", "Number", "Object"],
            answer: 1
          },
          {
            q: "Which method converts JSON string into JavaScript object?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
            answer: 0
          },
          {
            q: "Which method converts JavaScript object into JSON string?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.encode()", "JSON.toText()"],
            answer: 1
          },
          {
            q: "Which HTTP method is used to send data to server?",
            options: ["GET", "POST", "FETCH", "SEND"],
            answer: 1
          },
          {
            q: "Which status code means 'Success'?",
            options: ["404", "500", "200", "301"],
            answer: 2
          } ]
};