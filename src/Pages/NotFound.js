import { Link } from 'react-router-dom';
import "./css/NotFound.css"

export default function NotFound() {

    return (
        <div className='err'>
            <h1>Error 404!</h1>
            <p>Tato stránka neexistuje..</p>
            <p>Zkuste jít na <Link to={"/"}>domovskou stránku</Link> a zkuste to znovu.</p>
        </div>
    )}