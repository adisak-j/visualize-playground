# Merge branch main to branch develop
# Usage: ./scripts/merge-main-to-develop.sh
git checkout develop
git pull origin develop
git merge main -m "ci: merge branch main to develop [skip ci]"
git push origin develop
git checkout main 