import ValueProp from './value-prop';
import { ReactComponent as UsersSvg } from './assets/Users.svg';
import { ReactComponent as UserSwitchSvg } from './assets/UserSwitch.svg';
import { ReactComponent as HandWavingSvg } from './assets/HandWaving.svg';


function Home() {
    return <div> 
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
    </div>;
}

export default Home;