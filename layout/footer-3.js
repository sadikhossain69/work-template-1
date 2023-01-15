

function Footer3() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer style-3" id="footer" style={{"backgroundImage":"url(images/background/bg11.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
		<div className="footer-top">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-12 col-md-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" alt=""/></a> 
							</div>
							<p>Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.</p>
							<div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services style-1">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><a href="javascript:void(0);">Home</a></li>
								<li><a href="javascript:void(0);">About Us</a></li>
								<li><a href="javascript:void(0);">Services</a></li>
								<li><a href="javascript:void(0);">Team</a></li>
								<li><a href="javascript:void(0);">Blog</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services style-1">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><a href="javascript:void(0);">Strategy & Research</a></li>
								<li><a href="javascript:void(0);">Web Development</a></li>
								<li><a href="javascript:void(0);">Web Solution</a></li>
								<li><a href="javascript:void(0);">Digital Marketing</a></li>
								<li><a href="javascript:void(0);">App Design </a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services style-1">
						   <h5 className="footer-title">Other links</h5>
							<ul>
								<li><a href="javascript:void(0);">FAQ</a></li>
								<li><a href="javascript:void(0);">Portfolio</a></li>
								<li><a href="javascript:void(0);">Privacy Policy</a></li>
								<li><a href="javascript:void(0);">Terms & Conditions</a></li>
								<li><a href="javascript:void(0);">Support </a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
						<div className="widget widget_getintuch">
							<h5 className="footer-title">Contact Us</h5>
							<ul>
								<li>
									<i className="fa fa-phone gradient"></i>
									<span>+91 123-456-7890<br/>+91 987-654-3210</span> 
								</li>
								<li>
									<i className="fa fa-envelope gradient"></i> 
									<span>info@example.com <br/>info@example.com</span>
								</li>
								<li>
									<i className="fa fa-map-marker gradient"></i>
									<span>Marmora Road Chi Minh City, Vietnam</span>
								</li>
							</ul>
						</div>
					</div>
                </div>
            </div>
		</div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 text-center"> 
						<span className="copyright-text">Copyright © 2021 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer3;