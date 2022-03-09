import { Link, Card, Intro } from './contact.style';

export const Contact = () => {
  return (
    <Card>
      <Intro>
        Email:
        <Link href="mailto: algren.pauna@gmail.com">
          algren.pauna@gmail.com
        </Link>
      </Intro>
      <Intro>
        LinkedIn:
        <Link
          href="https://www.linkedin.com/in/algren-pauna/"
          target="_blank"
          rel="noreferrer"
        >
          Algren Pauna
        </Link>
      </Intro>
      <Intro>
        GitHub:
        <Link
          href="https://github.com/algren123"
          target="_blank"
          rel="noreferrer"
        >
          algren123
        </Link>
      </Intro>
    </Card>
  );
};
