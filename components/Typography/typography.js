import { Text, OutroText } from './typography.style';

export const Paragraph = ({ content }) => {
  return <Text>{content}</Text>;
};

export const Outro = () => {
  return <OutroText>Thanks for reading!</OutroText>;
};
