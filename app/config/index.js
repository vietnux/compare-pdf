
// console.log(path);
const domain = 'http://localhost/vietnux/';
exports.configs = {domain}

module.exports = {
	paths: {
		data: process.cwd() + '/data',
		actualPdfRootFolder: process.cwd() + '/data/actualPdfs',
		baselinePdfRootFolder: process.cwd() + '/data/baselinePdfs',
		actualPngRootFolder: process.cwd() + '/data/actualPngs',
		baselinePngRootFolder: process.cwd() + '/data/baselinePngs',
		diffPngRootFolder: process.cwd() + '/data/diffPngs'
	},
	settings: {
		imageEngine: 'graphicsMagick',
		density: 100,
		quality: 70,
		tolerance: 0,
		threshold: 0.05,
		cleanPngPaths: false,
		matchPageCount: true,
		disableFontFace: true,
		verbosity: 0
	}
};