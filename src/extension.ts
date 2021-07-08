'use strict';
import * as vscode from 'vscode';
import Formatter from './formatter';

export function activate(context: vscode.ExtensionContext) {
  // 插件激活
  var formatter = new Formatter();

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand( "wwm.aligncode", (editor)=>{
      formatter.process( editor );
    } )
  );
}

// 插件路口
// this method is called when your extension is deactivated
export function deactivate() {}
