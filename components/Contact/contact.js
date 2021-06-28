import { Link, Card, Intro, Outro } from "./contact.style"

export const Contact = () => {
    return (
        <Card>
            <Intro>Email:<Link href="mailto: algren.pauna@gmail.com">algren.pauna@gmail.com</Link></Intro>
            <Intro>Mobile:<Outro>+447500325912</Outro></Intro>
            <Intro>LinkedIn:<Link href="https://www.linkedin.com/in/algren-pauna/" target="_blank">Algren Pauna</Link></Intro>
            <Intro>GitHub:<Link href="https://github.com/algren123" target="_blank">algren123</Link></Intro>
        </Card>
    )
}