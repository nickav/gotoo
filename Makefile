all: dist

dist:
	cd frontend/ && gulp build:optimized && cp -r ./dist/ ../backend/public/
