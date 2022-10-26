import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import * as C from './styles';
import { FormActions, useForm } from "../../contexts/FormContext";
import { useEffect } from 'react';

export const FormStep4 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(()=>{
        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    return (
        <Theme>
            <C.Container>
                <h1>Cadastro concluído com sucesso!</h1>
                <h3>Nome completo:</h3>
                <p>{state.name}</p>
                <h3>Nível profissional:</h3>
                <p>
                    {state.level == 0 && 'Sou iniciante'}
                    {state.level == 1 && 'Sou programador'}    
                </p>   
                <h3>E-mail:</h3>
                <p>{state.email}</p>
                <h3>GitHub:</h3>
                <p>{state.github}</p>
            </C.Container>
        </Theme>
    );
}