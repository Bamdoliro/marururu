import type { RefObject } from 'react';

const resizeTextarea = (textareaRef: RefObject<HTMLTextAreaElement>) => {
  if (!textareaRef.current) return;
  textareaRef.current.style.height = 'auto';
  textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
};

export default resizeTextarea;
