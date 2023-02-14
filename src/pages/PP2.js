import { Row } from 'reactstrap';
import OIP from '../app/assets/OIP.jpg';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';


const PP2 = () => {
    return (
        <>
            <body>

                <h1 className="pp2H1">Doug Altermatt</h1>
                <a
                    role='button'
                    className='btn btn-link'
                    href='mailto:carbfixer@gmail.com'
                >
                    <i className='fa fa-envelope-o' /> Carbfixer@gmail.com
                </a> |
                <a
                    role='button'
                    className='btn btn-link'
                    href='tel:+15094815800'
                >
                    <i className='fa fa-phone' /> (509) 481-5800
                </a>|

                <a
                    role='button'
                    className='btn btn-link'
                    href='https://linkedin.com/in/d-altermatt-motivated-user'
                >
                    <i className="fa fa-linkedin-square" /> d-altermatt-motivated-user
                </a> |
                <a
                    role='button'
                    className='btn btn-link'
                    href='https://www.google.com/maps/place/Newman+Lake'
                >
                    <i className='fa fa-location-arrow' />
                    Newman Lake, WA 99025
                </a>
                <br />

                {/* image will end up being profile picture */}
                <div>
                    {/* <img src={OIP} alt="project management diagram" />
                    <img src={OIP} alt="project management diagram" /> */}
                    <ImageSlider slides={SliderData} />
                </div>



                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-primary text-light">
                                <th><h2 className='tableTitle textColorAnimation'>FRONT END DEVELOPER PROFILE</h2></th>

                            </tr>
                        </thead>
                        <tbody className="table-primary">
                            <tr>
                                <td className="tableDataCenter">Talent to develop, design, and administer user-friendly, intuitive, and visually appealing websites in collaboration with the design and development team. Well-developed aptitude to implement features and functionality using frameworks, debugging and troubleshooting issues, and ensuring website compatibility and performance across devices and platforms. Focused on staying up-to-date with the latest trends in web development technologies and best practices. Equipped with strong attention to detail, communication, problem-solving, and leadership skills.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Collaborative team player with the ability to learn and adapt quickly, while accomplishing assigned objectives with professionalism and poise.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Adept at fostering relationships with teams, clients, and management for the execution of critical tasks.
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <hr />

                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-primary text-light">
                                <th><h2 className='tableTitle textColorAnimation'>TECHNICAL PROFICIENCIES</h2></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-primary">
                            <tr>
                                <th className="tableSubtitle" >Platforms:</th>
                                <td className="tableData" >HTML, CSS, Bootstrap, JavaScript, React, React-Native, Node, Google Cloud, Firebase
                                </td>
                            </tr>
                            <tr>
                                <th className="tableSubtitle" >Tools:</th>
                                <td className="tableData" >Git/GitHub, VS Code, Expo Snacks, Android-Studio and Language associated libraries</td>
                            </tr>
                            <tr>
                                <th className="tableSubtitle" >Competencies:</th>
                                <td className="tableData" >Strategic Business Planning & Analysis, Web Designing & Development, Technical Troubleshooting, SWOT Analysis, Rapport Building, Team Coordination & Leadership, Project Management, Client Requirements Analysis, Client Engagement, Operations Management, Resources Allocation, Risk Mitigation, Vendor/Supplier Management, Effective Communication, Conflict Resolution
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-primary text-light">
                                <th><h2 className='tableTitle textColorAnimation'>EDUCATION</h2></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-primary">
                            <tr>
                                <th className="tableSubtitle" >NUCAMP</th>
                                <td className="tableData" >Full Stack Web and Mobile Development Bootcamp - Honors
                                </td>
                            </tr>
                            <tr>
                                <th className="tableSubtitle" >FreeCodeCamp</th>
                                <td className="tableData" >Certifications in Responsive Web Design | JavaScript Algorithms | Data Structures | Front End Development Libraries </td>
                            </tr>
                            <tr>
                                <th className="tableSubtitle" >Spokane Community College (SCC)</th>
                                <td className="tableData" >AAS General Business, Integrated Business & Entrepreneurship
                                </td>
                            </tr>
                            <tr>
                                <th className="tableSubtitle" >North Idaho College (NIC)</th>
                                <td className="tableData" >Technical Certificate, Outdoor Power and Recreational Vehicle Repair
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-primary text-light">
                                <th><h2 className='tableTitle textColorAnimation'>PROFESSIONAL EXPERIENCE</h2></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-primary">
                            <tr>
                                <th className="tableSubtitle" >Small Engine Rehab & Repair, Newman Lake</th>
                                <td className="tableData" >Oversaw and streamlined day-to-day operations, including project management, work flow management, and client engagement
                                </td>
                                <td className="tableData" >CEO/Operator 2010-2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
            </body>
        </>
    )
        ;
};
export default PP2;