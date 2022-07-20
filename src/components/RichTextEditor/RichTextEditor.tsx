import React, { useEffect, useRef } from "react";
import "./RichTextEditor.scss";
import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { useRuxToggle } from "../../hooks/useToggle";
import IconButton from "../IconButton/IconButton";
import { useRuxOptions } from "../../hooks/useRuxOption";

export interface RichTextEditorProps {
  onChange: (editorDataAsHtml: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text],
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    content: "<p></p>",
  });

  const bold = useRuxToggle(false);
  const italic = useRuxToggle(false);

  const toggleBold = () => {
    bold.toggle();
    editor?.chain().focus().toggleBold().run();
  };
  const toggleItalic = () => {
    italic.toggle();
    editor?.chain().focus().toggleItalic().run();
  };

  return (
    <div className="editor-wrapper">
      <div className="editor-toolbar">
        <IconButton
          variant={bold.current() ? "primary" : "default"}
          size="small"
          featherIconName="bold"
          onClick={toggleBold}
        />
        <IconButton
          variant={italic.current() ? "primary" : "default"}
          size="small"
          featherIconName="italic"
          onClick={toggleItalic}
        />
      </div>
      <div className="text-wrapper">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

RichTextEditor.defaultProps = {};

export default RichTextEditor;
