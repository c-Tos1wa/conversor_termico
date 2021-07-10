import { Button, ButtonGroup, Container, Grid, Typography, TextField } from '@material-ui/core'
import { useState } from 'react'
import styles from '../styles/conversor.module.scss'


export default function Conversor(){
  const [ degree, setDegree ] = useState(0);
  const [ result, setResult ] = useState(0);
  const [ answer, setAnswer ] = useState(0);

  function celsiusToF() {
    const calc = degree*1.8 + 32
    setResult(Number(calc.toFixed(2)));
  }

  function celsiusToK(){
    const conv = degree + 273
    setAnswer(Number(conv.toFixed(2)));
  }

  return(
    <div className={styles.block}>
      <Container maxWidth="xs">
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <TextField
              label='Temperatura em °C'
              variant='filled'
              type='number'
              fullWidth
              onChange={ ({target}) => setDegree(Number(target.value)) }
            />
          </Grid>

          <Grid item>
            <ButtonGroup
              aria-label='outlined'>
                <Button variant='contained' color='primary' onClick={ () => celsiusToK() }> Kelvin (K)</Button>
                <Button variant='contained' color='secondary' onClick={ () => celsiusToF() }> Fahrenheit (°F)</Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <div className={styles.result}>
          
          <>
              <Typography><strong>Resultado:</strong> { result } °F</Typography>  
              
              <Typography><strong>Resultado:</strong> { answer } K</Typography>
            
          </> 
      
        </div>
      </Container>
    </div>
  )
}