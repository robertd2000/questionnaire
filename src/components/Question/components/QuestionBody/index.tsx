import { FC } from "react";

interface Props {
  question: string | undefined;
}

export const QuestionBody: FC<Props> = ({ question }) => {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: question as string,
      }}
    />
  );
};
