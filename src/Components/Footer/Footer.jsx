import React from "react";
import '../Footer/Footer.css'

export default function Footer() {
  return (
    <div className="footer">
	<div className="container">		
		<div className="row text-center">						
			<div className="col-lg-12 col-sm-12 col-xs-12">
				<div className="footer_menu">
					<ul>
						<li className="gap-3"><a className="gap-3" href="#">Home</a></li>
						<li className="gap-3"><a href="#">About</a></li>
						<li className="gap-3"><a href="#">Service</a></li>
						<li><a href="#">Works</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>						
				<div className="footer_profile">
					<ul>
						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li><a href="#"><i className="fa fa-instagram"></i></a></li>
						<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
					</ul>
				</div>						
				<div className="footer_copyright">
					<p>© 2021 Sai. All Rights Reserved.</p>
				</div>	
			</div> 							
		</div> 				
	</div> 
</div>  );
}
