import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Posts from './Posts';
export default function Firstpage(){
    return(
    <BrowserRouter>
    <div>
        <ul>
            <li><Link to="/"><h2>Home</h2></Link></li>
            <li><Link to="/about"><h2>About</h2></Link></li>
            <li><Link to="/contact"><h2>Contact</h2></Link></li>
            <li><Link to="/posts"><h2>All Posts</h2></Link></li>
            <li><Link to="/posts/1"><h2>item1</h2></Link></li>
            <li><Link to="/posts/2"><h2>item2</h2></Link></li>
            <li><Link to="/posts?name=Noppol&surname=Somsri"><h2>Greeting</h2></Link></li>
        </ul>
    </div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<Posts/>}/>
    </Routes>
    </BrowserRouter>
    );
}