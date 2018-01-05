/*---------------------------------------------------------
 * Copyright (C) Erkan Tairi. All rights reserved.
 * Licensed under the MIT License. 
 * See LICENSE in the project root for license information.
 *--------------------------------------------------------*/

 'use strict';

// The module 'vscode' contains the VS Code extensibility API.
// Import the module and reference it with the alias vscode.
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext): void {

    console.log('Magma extesion is active.')
    
    var editor = vscode.window.activeTextEditor;
    if (editor && editor.document.languageId == 'magma') {
        // TODO: Peform some Magma specific functionality.
        console.log('Magma source file is active.');
    }
}

export function deactivate() { }
