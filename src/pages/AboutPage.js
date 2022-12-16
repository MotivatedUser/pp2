const AboutPage = () => {
    return (
      <>
        <div  className="row row-content mx-auto">
            <div className="col">
                <h3 className='subTitleFontStyle' >Our Mission</h3>
                <p>Our mission is to positivily impact our community by offering our services in a way that provides true value, postivitly impacting everything it touches. By offering things like used parts we are doing our part to make the world a cleaner and more sustainable place.</p>
            </div>
            <hr/>
            <div className="col">
                <div className="card">
                    <h3 className="card-header bg-primary text-white">Facts At a Glance</h3>
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-6">Founded</dt>
                            <dd className="col-6">Jan 1, 2020</dd>
                            <dt className="col-6">No. of Clients in 2021</dt>
                            <dd className="col-6">584</dd>
                            <dt className="col-6">Employees in 2021</dt>
                            <dd className="col-6">4</dd>
                            <dt className="col-6">Happy Customers 2021</dt>
                            <dd className="col-6">583</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card bg-light">
                    <blockquote className="blockquote card-body">
                        <p className="mb-0">"Do it once and do it right and do it quickly"</p>
                        <br />
                        <footer className="blockquote-footer subTitleFontStyle">Lee Child,
                            <cite title="Source Title">Killing Floor</cite>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>

        <div className="row row-content">
            <div className="col col-12">
                <h3 className='subTitleFontStyle' ><strong>Meet our Employee's</strong></h3>
                <h4 className='subTitleFontStyle'>Rocky React - <small>4 Stroke and Electrical Specialists</small></h4>
                <p className="d-none d-sm-block">Rocky boasts certifications from Briggs & Stratton along with Kohler and Honda. He has been fixing 4 strokes for 10 years.</p>
                <h4 className='subTitleFontStyle'>Larry Larrie - <small>Carburetor and 2 Stroke Specialist</small></h4>
                <p className="d-none d-sm-block">Larry enjoys a good challenge and this is why he is the resident expert on carburetors. He can rebuild anything from a simple carb up to a four barrel carb that forms an air plenum as seen in Goldwings.</p>
                <h4 className='subTitleFontStyle'>Jesse James - <small>Our own Customer Service Expert and parts Manager</small></h4>
                <p className="d-none d-sm-block">Need to call or have someone help you track down a part or even make a special order?... Jesse is your gal! She plays a major role in our day to day operations.</p>
                <h3 className='subTitleFontStyle'><strong>Meet the Owner</strong></h3>
                
                <h4 className='subTitleFontStyle'>John Cena - <small> Owner & Operator</small></h4>
                <p className="d-none d-sm-block">John went to get mower serviced one day and was told it would take a month. John decided to open a Small Engine Repair shop becuase he knew he could get jobs completed more effeciently. John now boasts an average of 3 day turn around time thanks to a good parts inventory system and using technoligy to his advantage.</p>
            </div>
        </div>

        <div className="row row-content mx-auto">
            <div className="col">
                <h2 className='subTitleFontStyle'>Average Repair Costs</h2>
                
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr className="bg-primary text-light">
                                <th></th>
                                <th>2020</th>
                                <th>2021</th>
                                <th>2022</th>
                            </tr>
                        </thead>
                        <tbody className="table-primary">
                            <tr>
                                <th>Riding Mower</th>
                                <td>$180</td>
                                <td>$200</td>
                                <td>$240</td>
                            </tr>
                            <tr>
                                <th>Self Propelled Mower</th>
                                <td>$55</td>
                                <td>$70</td>
                                <td>$90</td>
                            </tr>
                            <tr>
                                <th>Snow Blower</th>
                                <td>$60</td>
                                <td>$70</td>
                                <td>$90</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
      
      </>
    )
  };
  
  export default AboutPage;