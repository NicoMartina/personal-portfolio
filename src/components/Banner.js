import { useState, useEffect } from 'react'
import { Container, Row, Col } from'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer",  "Software Engineer", ".NET developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);  
        
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Nico. `}<br/><span className='wrap'>{text}</span></h1>
                        <p>Hey there! 👋
                        I'm a beginner frontend developer on a journey of constant learning and growth. I have a solid foundation in HTML, CSS, JavaScript, and React and .NET.
                        Though I'm at the beginning of my developer journey, I bring a strong willingness to learn and improve every day. I'm passionate about creating engaging and user-friendly web experiences, and I'm excited to dive deeper into frontend development.
                        When I'm not coding, you can find me exploring new technologies, working on personal projects, or enjoying a good cup of coffee. I'm eager to contribute, collaborate, and expand my skills in the ever-evolving world of web development! 🚀</p>
                        <button onClick={() => console.log('connect')}>Let's Connect!<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='HeaderImg' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}