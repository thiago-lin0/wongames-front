import Link from 'next/link'
import * as S from './styles'
import Logo from '../Logo'
import Heading from '../Heading'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      {/* contatos */}
      <S.Column>
        <Heading color="black" $size="small" $lineBottom $lineColor="secondary">
          Contact
        </Heading>
        <nav aria-labelledby="contact">
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
          <a href="tel: +55 21 33283719">+55 21 33283719</a>
        </nav>
      </S.Column>
      {/* rede sociais */}
      <S.Column>
        <Heading color="black" $size="small" $lineBottom $lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social-media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noonpenner, noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.x.com/won-games"
            target="_blank"
            rel="noonpenner, noreferrer"
          >
            X
          </a>

          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noonpenner, noreferrer"
          >
            You Tube
          </a>

          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noonpenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      {/* Links */}
      <S.Column>
        <Heading color="black" $size="small" $lineBottom $lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>
          <Link href="/games">Store</Link>
          <Link href="/search">Buscar</Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" $size="small" $lineBottom $lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.CopyRight>Won games 2023 ALL rights reserved.</S.CopyRight>
  </S.Wrapper>
)

export default Footer
