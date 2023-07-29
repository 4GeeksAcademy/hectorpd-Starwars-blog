import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center" style={{background: 'rgb(13,17,23)'}}>
		<p className="text" style={{color:'white'}}>
			May the force be with you <img className= "logo" style={{width:'40px', borderRadius: '90%'}} src="https://frikipolis.com/wp-content/uploads/2021/01/2c2366c2fcf25c971eaa1fc10e38a1aafd83864e_hq.jpg"/>by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);
