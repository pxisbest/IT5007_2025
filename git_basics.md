# some useful tips on using git

git textbook for reference:https://git-scm.com/book/en/v2

## important instructions
### 1.Initializ empty Git repository:
```bash
$ git init
```

after typing the terminal shows:

```bash
(base) tian@tians-MacBook-Air-2 IT5007 % git init
Initialized empty Git repository in /Users/tian/Desktop/IT5007/.git/
```

*/The instruction cretaed a file but you can not see it cuz the file is actually hidden. File with . will not show in the frontend./*

#### 2. you can access the git folder using:

```bash
$ cd .git
```

#### 3. check the status of the file
```bash
git status -s
```
#### 4. to commit:
```bash
git commit -m "First commit of notes on git"
```
#### 5. show all the log of your file
 the yellowgreen number is the version of the file comitted. 
```bash
git log
```

![alt text](image.png)

#### 6. to check all previous version 
```bash
git checkout
```

#### 7. To back to the latest version
```bash
git checkout main
```

______________________________________________________
All the previous actions are on our local laptop. We should save our projects to Github to make it secure.

#### 8. save to github

push an existing repository from the command line
```bash
git remote add origin https://github.com/pxisbest/IT5007_2025.git
git push -u origin main
```
start to change this file