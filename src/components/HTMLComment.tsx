import { useRef, useEffect } from 'react';

export interface HTMLCommentProps {
  comment: string;
}

export const HTMLComment = (props: HTMLCommentProps) => {
  const { comment } = props;
  const commentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (commentRef.current) commentRef.current.outerHTML = `<!-- ${comment} -->`;
  }, [comment]);

  return (
    <div ref={commentRef} />
  );
};
