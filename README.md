### Setup

	npm install

### Run

	"./node_modules/.bin/ngc"

Error:

	$ "./node_modules/.bin/ngc"
	Error: Internal state: StaticSymbols in summaries can't have members! {"filePath":"C:/Main/Work/ngc-import-bug/app/app-imports.ts","name":"Test","members":["TestModule"]}
		at AotSummaryResolver._assertNoMembers (C:\Main\Work\ngc-import-bug\node_modules\@angular\compiler\bundles\compiler.umd.js:26300:23)
		at AotSummaryResolver.resolveSummary (C:\Main\Work\ngc-import-bug\node_modules\@angular\compiler\bundles\compiler.umd.js:26308:18)
		at CompileMetadataResolver._loadSummary (C:\Main\Work\ngc-import-bug\node_modules\@angular\compiler\bundles\compiler.umd.js:18032:70)
		at CompileMetadataResolver.getNgModuleSummary (C:\Main\Work\ngc-import-bug\node_modules\@angular\compiler\bundles\compiler.umd.js:18226:56)
		at C:\Main\Work\ngc-import-bug\node_modules\@angular\compiler\bundles\compiler.umd.js:18299:76
		at Array.forEach (native)
		at CompileMetadataResolver.getNgModuleMetadata (C:\Main\Work\ngc-import-bug\node_modules\@angular\compiler\bundles\compiler.umd.js:18286:53)
		at addNgModule (C:\Main\Work\ngc-import-bug\node_modules\@angular\compiler\bundles\compiler.umd.js:25053:62)
		at C:\Main\Work\ngc-import-bug\node_modules\@angular\compiler\bundles\compiler.umd.js:25064:18
		at Array.forEach (native)
	Compilation failed

