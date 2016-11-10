all: dist

dist:
	cd frontend/ && npm run dist && cp -r ./dist/ ../backend/public/

publish: dist
	git subtree push --prefix backend heroku master

