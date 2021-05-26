import React from "react";
import Button from '../../components/Button/Button'
import { DivDigid} from './styled'
const Footer = () => {
    return (
        <DivDigid>
            <div>
            <h1>Do you know what Digid is?</h1>
            <p>Suspendisse vel venenatis ante. Aliquam arcu metus, imperdiet eu tincidunt ut, lobortis sed lorem. Proin venenatis, elit non faucibus finibus, tortor justo cursus neque, a consectetur ipsum leo eu ipsum. Cras tempus ex ultrices, molestie magna sed, molestie nulla. In quis sem augue. Nullam molestie sem a justo dictum, vestibulum mattis odio feugiat. Nulla justo ante, porta ac accumsan a, sollicitudin a odio. 
                </p>
                <p>In sollicitudin purus id sapien mollis varius. Morbi tempor ultrices lectus, accumsan placerat ipsum feugiat non. Sed tempor cursus nunc, quis condimentum quam ultricies et. Donec maximus mi vel malesuada vestibulum. Sed tincidunt mollis est, et vulputate ipsum fermentum quis. Ut pretium odio ac eleifend sodales. In sit amet turpis nec magna mattis fringilla non a dolor.</p>
                <Button color="blue">Read more about it</Button>
            </div>
            <div>
            <video src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" controls autoplay></video>
            </div>
        </DivDigid>
    )
};

export default Footer;
