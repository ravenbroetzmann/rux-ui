import React, { useEffect, useRef } from "react";
import "./RichTextEditor.scss";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { useRuxToggle } from "../../hooks/useToggle";

export interface RichTextEditorProps {}

const defaultContent = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is a test",
        },
      ],
    },
  ],
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({}) => {
  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text],
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      // TODO UPDATE
    },
    content: defaultContent,
  });

  const bold = useRuxToggle();
  const italic = useRuxToggle();
  const normal = useRuxToggle();

  return (
    <div className="editor-wrapper">
      <div className="editor-toolbar"></div>
      <div className="text-wrapper">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

RichTextEditor.defaultProps = {};

export default RichTextEditor;
