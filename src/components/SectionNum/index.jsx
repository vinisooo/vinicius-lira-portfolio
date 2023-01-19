import { StyledSectionNum } from "./styled"

const SectionNumber = ({ sectionNum, sectionTitle, color, row, sticky }) => {

    return(
        <StyledSectionNum color={color}>
            <div className={ row && "row-direction"}>
                <h3>{sectionNum}</h3>
                <span></span>
                <p>
                    {sectionTitle}
                </p>
            </div>
        </StyledSectionNum>
    )

}

export default SectionNumber