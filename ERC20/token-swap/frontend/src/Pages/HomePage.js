import React, {useState} from 'react';
import styled from 'styled-components';

const HomePage = () => {

    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        console.log("->", e.target.value, e.target.name);
        if (e.target.name == 'address') {
            setAddress(e.target.value);
        } else if (e.target.name = 'password') {
            setPassword(e.target.value);
        }
    }

    return(
        <Container>
            <Content>
                <Connection>
                    <ConnectBtn>Connect</ConnectBtn>
                    <Label>SLDKFJW98434IJLSKDF</Label>
                </Connection>
                
                <FormGroup>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" name="address" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" onChange={handleChange} />
                </FormGroup>
                <FormSubmit>
                    <Button>Submit</Button>
                    <Button>Cancel</Button>
                </FormSubmit>
            </Content>
        </Container>
    );
}

export default HomePage;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 20px;
    border: 1px solid #F0F0F0;
    box-shadow: 2px 2px 3px #A3A0A0;
`
const Connection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const ConnectBtn = styled.button`
    width: 60px;
    height: 25px;
    border: none;
    margin: 0 5px;
    box-shadow: 2px 2px 3px #A3A0A0;
`
const FormGroup = styled.div`
    margin: 10px;
    padding: 10px;
`
const FormSubmit = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    padding: 10px;
`
const FormLabel = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin: 5px 0;
`
const Input = styled.input`
    width: 100%;
    height: 30px;
    font-size: 14px;
`
const Button = styled.button`
    width: 70px;
    height: 30px;
    border: none;
    background-color: #1AAB25;
    color: #FFF;
    border-radius: 4px;
`
const Label = styled.div`
    font-size: 14px;
    font-weight: 400;
`