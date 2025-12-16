🚀 DevOps Git Workflow Project
📌 Project Description

This project is a hands-on DevOps learning implementation designed to demonstrate core Git version control concepts using a real-world, branch-driven workflow.

The repository showcases:

Repository initialization and remote configuration

Multi-branch development strategy

Feature development, testing, bug fixing, and experimentation

Branch merging and conflict resolution

Clean commit history and traceability

The objective is to simulate industry-standard Git operations in a controlled academic environment, reinforcing fundamentals through practical execution rather than theory alone.

🧩 Branch Strategy Overview
Branch Name	Purpose
master	Stable production-ready code
feature	New feature development
test	Testing and UI/styling validation
bugfix	Isolated bug resolution
experiment	Experimental assets and non-critical changes

This structure follows a lightweight GitFlow-inspired model, commonly used in small to mid-size engineering teams.

🛠️ Git Commands Used
1️⃣ Repository Setup
git init
git status
git add README.md
git commit -m "this is my project initiation"
git remote add origin <repository-url>
git push -u origin master

2️⃣ Branch Creation
git branch feature
git branch test
git branch bugfix
git branch experiment
git branch

3️⃣ Working with Branches
git checkout feature
git add .
git commit -m "added some features to my project"
git push -u origin feature


(Same workflow applied for test, bugfix, and experiment branches.)

4️⃣ Merging Branches
git checkout master
git merge feature
git merge test
git merge bugfix
git merge experiment

5️⃣ Merge Conflict Resolution
git status
# Manually resolve README.md
git add README.md
git commit -m "resolved merge conflict successfully"
git push -u origin master

6️⃣ Log & History Tracking
git log

📊 Git Workflow Diagram
Branch Lifecycle Diagram
                feature
                   |
                   v
master ────────▶ merge
   |
   |────────▶ test ───▶ merge
   |
   |────────▶ bugfix ─▶ merge
   |
   |────────▶ experiment ─▶ merge

Merge Conflict Flow
master      test
   |          |
   |          |
   |----X-----|   ← Conflict detected
        |
   Manual Fix
        |
   git add + commit
        |
     master ✔

⚠️ Challenges Faced & Solutions
🔴 1. Network Error During Push

Issue

Failed to connect to github.com port 443


Resolution

Retried the push command

Successfully pushed once network stabilized

Learning

Network failures are transient; retrying is a valid operational response.

🔴 2. Merge Conflict in README.md

Issue

Same file modified in master and test

Git halted automatic merge

Resolution

Identified conflict using git status

Manually resolved content

Committed and pushed resolution

Learning

Conflict resolution is a critical DevOps skill, not an error scenario.

🔴 3. Command Typo
gitt add .


Resolution

Corrected to git add .

Learning

Command-line accuracy matters; quick correction avoids workflow disruption.

✅ Key Takeaways

Git is best learned through branch isolation and controlled merges

Merge conflicts are expected in collaborative workflows

Clean commit messages and structured branches improve maintainability

Practical execution builds confidence for real-world DevOps environments

📌 Conclusion

This project demonstrates a complete Git lifecycle—from initialization to conflict resolution—using disciplined version control practices.
It serves as a strong foundation for advanced DevOps topics such as CI/CD, pull-request workflows, and automated testing pipelines.