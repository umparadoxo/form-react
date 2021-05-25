import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'

//As funções que renderizam o retorno 
function FormularioCadastro() {

    return (
        <form>
            <TextField
                variant='outlined'
                id='nome'
                label='Nome'
                fullWidth
                margin='normal'
            />

            <TextField
                variant='outlined'
                id='sobrenome'
                label='Sobrenome'
                fullWidth
                margin='normal'
            />

            <TextField
                variant='outlined'
                id='cpf'
                label='CPF'
                fullWidth
                margin='normal'
            />

            <FormControlLabel
                label='Promoções'
                control={
                    <Switch
                        name='promocoes'
                        color='primary'
                        defaultChecked
                    />}
            />

            <FormControlLabel
                label='Novidades'
                control={
                    <Switch
                        name='novidades'
                        color='primary'
                        defaultChecked
                    />}
            />

            <Button variant='contained' color='primary' type='submit'>Cadastrar</Button>
        </form>
    )
};

export default FormularioCadastro;