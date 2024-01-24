import React from 'react'
import './css/Sluzby.css'

export default function Sluzby() {
    return (
        <div>
            <h1>Sluzby</h1>
            <table>
                <caption>Ceník</caption>
                <thead>
                    <tr>
                        <th>1. sluzba</th>
                        <th>2. urceni</th>
                        <th>3. cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Celodenní focení</td>
                        <td>Portréty</td>
                        <td>Reklamní focení</td>
                    </tr>
                    <tr>
                        <td>Svatby, párty, narozeniny</td>
                        <td>Jednotlivci, páry</td>
                        <td>Produkty</td>
                    </tr>
                    <tr>
                        <td>od 25 000,-</td>
                        <td>200,-/ks nebo 500,-/album</td>
                        <td>350,-/ks</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
