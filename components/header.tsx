import { Container, Grid, Typography } from '@material-ui/core'
import styles from '../styles/header.module.scss'

export default function Header(){

    return (
      <div className={styles.header}>
        <Container fixed>
          <Grid container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography className={styles.title}variant='h3'>
                Conversor de Temperatura
              </Typography>
              <Typography className={styles.subtitle}>
                Converta a temperatura de °C para °F ou para K.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img className={styles.image} 
                src='./images/hot-cold.jpg' alt='Termometros de calor e frio'/>
            </Grid>
          </Grid>
        </Container>
      </div>
  )
}
