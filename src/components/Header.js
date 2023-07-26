
import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <h2>Start Bootstrap</h2>
            <div onClick={() => props.handleShow(false)} ><a class="nav-link active" aria-current="page" href="#">Home</a></div>
            <span>About</span>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
