import * as React from 'react';
import './reservation.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import './reservation.css';
// OWL
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Button from '@mui/material/Button';

export default function Cardchambre({ chambre }) {
  let navigate = useNavigate();

  const handleDetail = (e) => {
    navigate(`/reservation/${chambre.id}`, { replace: true });
  };

  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
  };

  return (
    <Card sx={{ maxWidth: { xs: '100%', sm: 250, md: 250 } }}>
      <CardActionArea>
        <OwlCarousel options={options}>
          {chambre.images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              height="200"
              image={image}
              alt={chambre.categorie}
              sx={{ borderRadius: '20px' }}
              onClick={handleDetail}
            ></CardMedia>
          ))}
        </OwlCarousel>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" color="primary">
            <b> {chambre.nom}</b>
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography gutterBottom variant="subtitle2">
                <b> {chambre.prix}</b> Franc CFA
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: '100%' }}
                onClick={handleDetail}
              >
                Reserver
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
