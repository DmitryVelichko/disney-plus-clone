import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
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
    border: 1px solid blue;
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
    border: 1px solid red;
  `;

  const BgImage = styled.div `
    background-image: url('/images/login-background.jpg')
  `

export default Login;
