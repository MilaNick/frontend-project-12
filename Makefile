install:
    install-deps

300:
	npm run serve

5000:
	npm start

install-deps:
    npm ci

lint:
	npx eslint . --fix

.PHONY: test
