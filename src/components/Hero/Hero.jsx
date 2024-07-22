import './Hero.scss';
const Hero = ({selectedVideo}) => {

    return (
        <div className='hero__video-container'>
            <video controls className='hero__video' poster={selectedVideo?.image}>
                <source src={`${selectedVideo?.video}?api_key=eb0a0738-fbb2-4a75-a000-e9a8cd7e2827`} type=""/>
            </video>
        </div>
    );
}

export default Hero