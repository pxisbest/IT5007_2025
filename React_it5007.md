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
# 父组件传递数据给子组件：props
# 子组件如何传递数据给父组件？-〉callback function
重要：callback function is **written by parent**, parent 决定function，这个function is also called by the child 

#### preventdefault的作用
```js
handleSubmit(e)
  {
    e.preventDefault(); //e.preventDefault(); 的作用是 阻止默认的表单提交行为。
    const form = document.forms.issueAdd;// 获取表单
    const newIssueFromForm = form.issuename.value;// 获取输入框的值
    this.props.createIssue(newIssueFromForm);// 调用父组件的函数，将数据传递给父组件
    form.issuename.value = ""; // 清空输入框
  }
```
📌 为什么要阻止默认行为？

在 HTML 中，如果你在 <form> 里有一个 <button type="submit">，当用户点击按钮时，默认行为是：
	•	刷新页面
	•	向服务器提交表单数据

但在 React 中，我们通常希望用 JavaScript 处理表单数据，而不是让浏览器执行默认的提交动作。因此，我们使用 e.preventDefault(); 来 阻止页面刷新，然后用 JavaScript 手动处理数据。

# bind
🚀 Why is bind(this) needed?

In JavaScript, when passing a class method to an event handler or another function, the default behavior is that this becomes undefined in strict mode.
	•	In the IssueList component, createIssue is a method defined inside the class.
	•	Without bind(this), calling this.createIssue inside IssueAdd (a child component) would cause this to be undefined, leading to an error like:
```js
TypeError: Cannot read properties of undefined (reading 'state')
```

📌 How does bind(this) fix this issue?
```js
this.createIssue = this.createIssue.bind(this);
```
This ensures that this inside createIssue always refers to the IssueList instance, even when the method is passed as a callback to another component.