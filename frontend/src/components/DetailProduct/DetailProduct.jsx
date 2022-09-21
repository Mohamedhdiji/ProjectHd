import { Card, Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../../redux/actions/actionProduct';
import "./DetailProduct.css"

const DetailProduct = () => {
    const { products } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const { _id } = useParams();

    useEffect(() => {
        dispatch(getOneProduct(_id));
    }, [_id])

    return (
        <div className='detail'>
            <Card >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: '20rem' }}
                    image={products.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {products.nameProd}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {products.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/"><Button size="small">Back</Button></Link>
                </CardActions>
            </Card>
        </div>
    )
}
export default DetailProduct