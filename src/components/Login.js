import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt='logos'/>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};
  const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
  `;

  const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    height: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
  `;

  const BgImage = styled.div `
    background-image: url('/images/login-background.jpg');
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
  `

  const CTA = styled.div``;

  const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
  `

export default Login;
