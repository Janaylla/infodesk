import React from "react";
import Button from '../Button/Button'
import { DivSection, Comments} from './styled'
import CardHome from './CardHome'
const FindHome = () => {
    return (
        <DivSection>
           <h6>Do you have place to anouce</h6>
           <Button color="orange">Post It</Button>
            <Comments>
                <CardHome
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia sem vel lectus dictum, in fermentum orci congue. Integer volutpat venenatis nulla ut convallis. Sed ut massa eget nibh mattis lacinia eget vitae eros. Morbi sollicitudin turpis nec sapien placerat vehicula. Praesent tincidunt et tellus quis rhoncus" 
                price="500" 
                name="Felipq" 
                contact="felipe@student.ni"
                />
                <CardHome
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia sem vel lectus dictum, in fermentum orci congue. Integer volutpat venenatis nulla ut convallis. Sed ut massa eget nibh mattis lacinia eget vitae eros. Morbi sollicitudin turpis nec sapien placerat vehicula. Praesent tincidunt et tellus quis rhoncus" 
                price="500" 
                name="Felipq" 
                contact="felipe@student.ni"
                />
            </Comments>
        </DivSection>
    )
};

export default FindHome;
