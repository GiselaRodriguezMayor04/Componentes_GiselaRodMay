//Importaciones para el correcto funcionamiento de la aplicación.
import React, { useState } from 'react'; 
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography'; 
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material'; 
import './App.css';

function Tortuga({ tortuga }) {
    
    // useState se usa para inicializar el estado de me gusta o favorito.
    const [favorites, setFavorites] = useState(
        tortuga.map(() => false)
    );

    // Función que se llama cuando se hace clic en el icono de m egusta o favorito.
    const handleIconClick = (index) => {

        // setFavorites actualiza el estado de me gusta o favoritos. Si el tortuga en la posición `index` se marca como favorita, lo desmarca (cambia a `false`), y si no, lo marca (cambia a `true`).
        setFavorites((prevFavorites) =>
            prevFavorites.map((fav, i) => (i === index ? !fav : fav)) 
        );
    };

    return (
        // Se hace un mapeo del array `tortuga` para renderizar una tarjeta por cada objeto del array.
        tortuga.map((Pollo, index) => ( 
            <Box 
                key={Pollo.id}
                sx={{
                    margin: "20px", 
                }}>
                <Card sx={{ maxWidth: 430 }}> 
                    <CardActionArea> 
                        <CardMedia
                            component="img"
                            sx={{ height: 300 }} 
                            image={Pollo.imgSrc} 
                            alt={Pollo.alt} 
                        />

                        <CardContent> 
                            <Typography variant="h5">
                                {Pollo.nombre}
                            </Typography>
                            <Typography variant="h6"> 
                                {Pollo.especie}
                            </Typography>
                            <Typography variant="body2" color="text.secondary"> 
                                {Pollo.descripcion}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    {/* IconButton es el botón con el icono de me gusta o favorito, se muestra un icono diferente si la tortuga está marcada como favorito o no. */}
                    <IconButton
                        aria-label="add to favorites"
                        onClick={() => handleIconClick(index)} 
                    >
                        {favorites[index] ? (
                            <FavoriteRoundedIcon color="error" /> 
                        ) : (
                            <FavoriteBorderRoundedIcon />
                        )}
                    </IconButton>
                </Card>
            </Box>
        ))
    );
}

export default Tortuga; 
