import { StlyedLightEffects, StyledLightEffect } from "./styled"

const LightEffect = ({top, right, bottom, left}) => {
    return (
        <StyledLightEffect top={top} right={right}>
            teste
        </StyledLightEffect>
    )
}

const LightEffects = () => {
    return(
        <StlyedLightEffects>
            <LightEffect top={-290} right={-150}/>
            <LightEffect top={-110} right={20} delay={2}/>
            <LightEffect top={250} right={-170}/>
            <LightEffect top={550} right={40} delay={2}/>
        </StlyedLightEffects>
    )
}

export default LightEffects