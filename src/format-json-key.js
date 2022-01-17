const testJson = {
  'debug.allowBreakpointsEverywhere': true,
  'debug.inlineValues': true,
  'diffEditor.ignoreTrimWhitespace': false,
  'diffEditor.renderSideBySide': true,
  'explorer.confirmDelete': false,
  'editor.insertSpaces': true,
  'editor.rulers': [90],
  'editor.tabSize': 2,
  'editor.tabCompletion': 'on',
  'extensions.showRecommendationsOnlyOnDemand': true,
  'files.exclude': {
    '**/.git': true,
    node_modules: true,
  },
  'files.insertFinalNewline': true,
  'git.confirmSync': false,
  'git.promptToSaveFilesBeforeCommit': true,
  'window.restoreWindows': 'all',
  'typescript.updateImportsOnFileMove.enabled': 'always',
  'explorer.confirmDragAndDrop': false,
  'editor.suggest.localityBonus': true,
  'javascript.updateImportsOnFileMove.enabled': 'always',
  'terminal.integrated.enableBell': true,
  'editor.minimap.enabled': true,
  'zenMode.restore': true,
  'typescript.preferences.quoteStyle': 'single',
  'eslint.enable': true,
  'eslint.validate': ['javascript', 'javascriptreact', 'typescript', 'typescriptreact'],
  'zenMode.hideLineNumbers': false,
  'debug.toolBarLocation': 'docked',
  'search.exclude': {
    '**/.git': true,
  },
  'window.titleBarStyle': 'custom',
  'window.zoomLevel': -1,
  'breadcrumbs.enabled': true,
  'merge-conflict.codeLens.enabled': false,
  'debug.openDebug': 'openOnDebugBreak',
  'editor.fontLigatures': true,
  'editor.formatOnSave': true,
  'terminal.integrated.fontFamily': 'monospace',
  'terminal.integrated.fontSize': 15,
  '[html]': {
    'editor.formatOnSave': false,
    'editor.defaultFormatter': 'vscode.html-language-features',
  },
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[jsonc]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[typescript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[typescriptreact]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  'editor.defaultFormatter': 'esbenp.prettier-vscode',
  'scm.providers.visible': 4,
  'editor.fontFamily': 'Fira Code',
  'terminal.integrated.fontWeightBold': 'normal',
  'editor.fontWeight': 'bold',
  'emmet.showSuggestionsAsSnippets': true,
  'emmet.triggerExpansionOnTab': true,
  'terminal.integrated.rendererType': 'dom',
  'go.autocompleteUnimportedPackages': true,
  'go.formatOnSave': true,
  'go.formatTool': 'gofmt',
};
function orderJsonByKey(jsonValue) {
  const type = typeof jsonValue;
  console.log(type);
  if (jsonValue === null) return jsonValue;
  else if (type === 'number' || type === 'string' || type === 'boolean') {
    return jsonValue;
  } else if (Array.isArray(jsonValue)) {
    return jsonValue.map((x) => orderJsonByKey(x));
  } else if (type === 'object') {
    return Object.keys()
      .sort()
      .reduce((outObj, key) => {
        const tmp = { ...outObj };
        tmp[key] = jsonValue[key];
        return tmp;
      }, {});
  } else return jsonValue;
}
console.log(orderJsonByKey(testJson));
