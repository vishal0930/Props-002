import './Card.css'
const Card = ( props ) => {

    const style = {
        backgroundImage: `linear-gradient(to right, #0D0D0C,#0D0D0C,rgba(0, 0, 0, 0)) , url(${ props.backgroundImageSrc })`,
        backgroundSize: '100% 100%',
        boxShadow: `30px 30px 70px ${props.backgroundShadow}, -30px -30px 70px ${props.backgroundShadow}`
    }

    return (
        <div style={style} className='maindiv'>
            <div className='metadiv'>
                <div className='leftdiv'>
                    <img alt='posterimg' className="img" src={props.posterSrc}></img>
                </div>
                <div className='rightdiv'>
                    <h1 className='white title'>{ props.title}</h1>
                    <h3 className='releaseyr'>{ props.releaseYear }, {props.directedBy }</h3>
                    <div className='rightdivchild'>
                        <h4 className='white duration'>{ props.duration}</h4>
                        <h4 className='gray genre'>{ props.genre}</h4>
                    </div>
                </div>
            </div>
            <div className='descdiv'>
                <h4 className='gray'>
                    {props.description}
                </h4>
            </div>
            <div className='icondiv'>
                <img alt='shareicon' src={ props.icon[ 0 ] }></img>
                <img alt='likeicon' src={ props.icon[ 1 ] }></img>
                <img alt='commenticon' src={ props.icon[ 2 ] }></img>
            </div>
        </div>
    )
};

export default Card;