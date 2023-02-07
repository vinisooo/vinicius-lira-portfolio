import { StyledSectionNum } from "./styled"

const SectionNumber = ({ sectionNum, sectionTitle, color, row, sticky }) => {
    const getClasses = () => {
        if (row) {
            return "row-direction"
        }if (sticky){
            return "sticky"
        }
    }

    return(
        <StyledSectionNum color={color}>
            <div className={getClasses()}>
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
