import { StlyedLightEffects, StyledLightEffect } from "./styled"

const LightEffect = ({top, right, bottom, left}) => {
    return (
        <StyledLightEffect top={top} right={right}>
        </StyledLightEffect>
    )
}

const LightEffects = () => {
    return(
        <StlyedLightEffects>
            <LightEffect top={-280} right={-100}/>
            <LightEffect top={-110} right={20} delay={2}/>
            <LightEffect top={250} right={-170}/>
            <LightEffect top={450} right={40} delay={2}/>
        </StlyedLightEffects>
    )
}

export default LightEffects