# Merge branch main to branch develop
# Usage: ./scripts/merge-main-to-develop.sh
git checkout develop
git merge main
git push origin develop 
# git push origin develop -m "ci: merge branch main to develop [skip ci]"
git checkout main

