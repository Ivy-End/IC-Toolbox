const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "ic-toolbox" is now active!');

	let disposable = vscode.commands.registerCommand('ic-toolbox.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from IC-Toolbox!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {
	console.log('Your extension "ic-toolbox" is now deactivated!');
}

module.exports = {
	activate,
	deactivate
}
