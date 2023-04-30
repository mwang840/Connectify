import ValueProp from './value-prop';
import { ReactComponent as UsersSvg } from './assets/Users.svg';
import { ReactComponent as UserSwitchSvg } from './assets/UserSwitch.svg';
import { ReactComponent as HandWavingSvg } from './assets/HandWaving.svg';


function Home() {
    return <div> 
        <div className='left-value-props'>
            <ul>
                <HandWavingSvg />
                <ValueProp title="Your place to share your passions." 
                text="One profile. Your passions." />
            </ul>
            <ul>
                <UsersSvg />
                <ValueProp title="Better connect with acquaintances, classmates & co-workers. " 
                text="Learn about their interests. Find something to talk about." />
            </ul>
            <ul>
                <UserSwitchSvg />
                <ValueProp title="Just met? Exchange profiles. Learn each other's interests." 
                text="Meet new people with shared interests." />
            </ul>
        </div>
    </div>;
}

export default Home;