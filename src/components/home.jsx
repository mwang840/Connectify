import ValueProp from './value-prop';
import { ReactComponent as UsersSvg } from './assets/Users.svg';
import { ReactComponent as UserSwitchSvg } from './assets/UserSwitch.svg';
import { ReactComponent as HandWavingSvg } from './assets/HandWaving.svg';
import logo from './assets/logo.png';
import bg_image from './assets/bg_image.jpg';

function Home() {
    return <div> 
        <img className='bg_image' src={bg_image} alt="bg_image"
            style={{
                width: '100vw',
                // height: '100%',
                backgroundSize: 'cover',
                opacity: 0.1,
            }}/>
        <div className='left-value-props'>
            <ul>
                <HandWavingSvg />
                <ValueProp className="text_container" title="Your place to share your passions." 
                text="One profile. Your passions." />
            </ul>
            <br></br>
            <ul>
                <UsersSvg />
                <ValueProp className="text_container" title="Better connect with acquaintances, classmates & co-workers. " 
                text="Learn about their interests. Find something to talk about." />
            </ul>
            <br></br>
            <ul>
                <UserSwitchSvg />
                <ValueProp className="text_container" title="Just met? Exchange profiles. Learn each other's interests." 
                text="Meet new people with shared interests." />
            </ul>
        </div>
        <div className='right-heading'>
            <img className='logo' src={logo} alt="logo" 
            style={{
                align: 'middle',
                borderColor: 'white',
                borderwidth: 5,
                width: 100,
                height: 100,
                borderRadius: 150 / 2
            }}/>
            <h1 className="home_header"> Your passions. Better connection.</h1> 
            <p className="home_header_body"> Express yourself, meet new people and have better conversations.</p>
        </div>
    </div>;
}

export default Home;