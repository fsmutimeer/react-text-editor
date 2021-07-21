import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
    constructor(props){
        super(props);

        this.state = {
            editorState:EditorState.createEmpty(),
        }
    }
    onEditorStateChange = (editorState)=>{
        this.setState({
            editorState,
        });
    };
    render() {
        const {editorState} = this.state;
        return (
            <div>
                <h1>Text Editor</h1>
                <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="demo-wrapper"
  editorClassName="demo-editor"
  onEditorStateChange={this.onEditorStateChange}
/>
            </div>
        )
    }
}
