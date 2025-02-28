# MVC model -是一种设计思想或方案
1. M -> Model 模型层->数据模型
2. V -> View 视图层 -拼接html字符串
3. C -> Controller 控制器层-给视图层提供数据/调用模型层方法/提供数据api

**MVC Components**
	1.	Model (Data & Business Logic)
	•	Manages the data and business logic.
	•	Interacts with the database (e.g., fetching or storing data).
	•	Notifies the View of any changes.
	•	Example: A User model that retrieves user data from a database.
	2.	View (UI/Presentation)
	•	Represents how data is presented to the user (UI).
	•	Only responsible for displaying data (without modifying it).
	•	Example: An HTML page or React component that displays a user’s profile.
	3.	Controller (Handles User Input & Updates Model/View)
	•	Acts as an intermediary between the Model and View.
	•	Handles user input (like form submissions, button clicks).
	•	Updates the Model based on user actions.
	•	Example: A Flask or Express.js route that updates a user’s profile when they submit a form.

# js class