build:
	npm run gulp

install:
	npm install
	npm run bower-install

deploy-setup:
	git checkout --orphan gh-pages
	git rm -rf .
	touch README.md
	git add README.md
	git commit -m "Init gh-pages"
	git push --set-upstream origin gh-pages
	git checkout master