# Checking into git
# Create a repository in github

# Create the local git repository that can automatically run in VScode
git init .

# Add files in current directory (that are not in gitignore) to local repository
git add .

# Commit changes to local repository
# This command goes to VI - remember to use i to write the comment, esc, and :wq! to get out
git commit -a

# Push local commited changes 
# Use "main" if branch name "master" was changed to main
git push -u origin main