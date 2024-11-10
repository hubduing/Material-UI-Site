import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled';

const CardList = ({ cards, classes, urlImage }) => (
    <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia} image={urlImage} title="image title" />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>
                                Another post
                            </Typography>
                            <Typography>Description post. Lorem ipsum dolor sit amet.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                            <PlayCircleFilled />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default CardList;