import React, { useState, useEffect } from 'react';

import './cardapio.css';
import api from '../../services/api';

export default function Cardapio(){

    const [produtos, setProdutos ] = useState([]);

    useEffect(() => {
        api.get('/',{}).then(response =>{
            setProdutos(response.data);
        })
    }, [])

    return(
    <div className="cardapio">
        <h1>Cardapio</h1>
        <ul class="list-group">
            {produtos.map(produto => (
                <div class="container" id="cardapio">
                    <div class="row">
                        <div class="col-sm">
                            <li>{produto.name}</li>
                        </div>
                        <div class="col-sm">
                            <li>{produto.value}</li>
                        </div>
                        <div class="col-sm">
                            <li>
                                <button type="button" class="btn btn-outline-primary">Pedir</button>
                            </li>
                        </div>
                    </div>
                </div> 
            ))}
        </ul>
    </div>
    );
}