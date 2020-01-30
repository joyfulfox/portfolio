import React from 'react';

export const AboutMe = () => {
    return (
        <div className='about_me'>
            <p>
                Hi! My name is Dmitry Boltivets. Sex: male. I'm living in Kiev, I am 26 y.o., that's my website and below is a bit of information about me.
            </p>
            <p>
                I have a university degree in laser technology.
                I graduated from the Kiev Polytechnic Institute as a specialist mechanical engineer from 2011 to 2017.
                I worked at the "Tantiema" forging company. as a design engineer from August 2018 to February 2019.
            </p>
            <p>
                At the begining I studied HTML and CSS by myself, but sometimes after work, there was no good motivation to study,
                so I decided to enroll in courses. I chose CyberBionic
                Systematics in direction "frontend developer". There is a certificate on testprovider TP09664236.
                The courses contained home works and tests after each lesson, as well as practice (all this is available).
                After completing the courses, I continued to delve into the study of JavaScript, I also solve tasks on codewars (my favourite pastime).
                Today I am studying ReactJS and in parallel Angular 2+ (I received the base knowledge about Angular 2+ in courses,
                including the typescript).
            </p>
            <p>
                I am interested in improving my skills. Of course, I prefer logic tasks over single/simple markup, but any experience - is an experience.
                I consider both remote cooperation and/or in the office/apartment/garage,
                the place does not matter, people are much more important! <span>&#9787;</span>
            </p>
            <div className='skills'>
                <ul>
                    Skills:
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>ES5+</li>
                    <li>JQuery</li>
                    <li>JSON</li>
                    <li>SASS/SCSS</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>AdobePhotoshop</li>
                    <li>crossbrowser/adaptive/felxbox/grid</li>
                    <li>TypeScript</li>
                    <li>AJAX</li>
                    <li>OOP</li>
                    <li>ReactJS(in progress)</li>
                    <li>Intermediate english</li>
                    <li>Russian/Ukrainian - native</li>
                </ul>
                <div className='certificate' />
            </div>
        </div>
    )
}