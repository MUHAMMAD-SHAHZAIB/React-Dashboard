import React from "react";
import { Header } from "../components";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-2 mt-24 bg-white p-2 md:p-10 rounded-3xl">
      <Header category="Page" title="Editor" />
      <RichTextEditorComponent >
        {/* <EditorData /> */}
        <Inject services={[HtmlEditor,Toolbar,Image,Link,QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
