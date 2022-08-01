import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "../../../styles/output.css";
export interface RichInputProps {
  onChange?: (html: string) => void;
  defValue?: string;
}

const RichInput: React.FC<RichInputProps> = ({ onChange, defValue }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange && onChange(html);
    },
    content: defValue ? defValue : "<p></p>",
  });
  return (
    <div className="mb-4 bg-default-light-darker dark:bg-default-dark-lighter border-none rounded-md text-neutral-light dark:text-neutral-dark font-roboto   w-full min-h-[10rem] flex flex-col">
      <div className="flex flex-row gap-3  w-full dark:bg-gray-500 bg-gray-400 rounded-t-md items-center justify-start p-3 mb-3">
        <button
          className="bg-default-light dark:bg-default-dark text-dark px-3 py-1 rounded-sm font-bold"
          onClick={(e) => {
            editor?.chain().focus().toggleBold().run();
          }}
        >
          {editor?.isActive("bold") ? "Normal" : "Fett"}
        </button>
      </div>
      <div className="px-3">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

RichInput.defaultProps = {};

export default RichInput;
