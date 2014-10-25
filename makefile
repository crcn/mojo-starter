ALL_TESTS = $(shell find  ./examples ./app -name "*-test.js")
REPORTER = dot
ONLY = "."
TIMEOUT=60000

test:
	./node_modules/.bin/_mocha $(ALL_TESTS) --timeout $(TIMEOUT) --ignore-leaks --bail --reporter $(REPORTER) -g $(ONLY)

test-watch:
	./node_modules/.bin/_mocha $(ALL_TESTS) --timeout $(TIMEOUT) --ignore-leaks --bail --reporter $(REPORTER) -g $(ONLY) --watch ./app ./examples
