import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

class Contact extends Component {

	constructor(props){
		super(props);
		this.state = {
			isRedirect: false
		}
	}

	inChange = (event) =>{
		const ten = event.target.name;
		const giatri = event.target.value;
		
		this.setState({
			[ten]:giatri
		});
	}

	sumitForm = (event) => {
	 	event.preventDefault();
	 	this.setState({
	 		isRedirect:true
	 	});
	}

	getGiatri = () =>{
		var noidung = "";
		noidung += "Ten nhan duocc la:  " + this.state.fName;
		noidung += "Email nhan duocc la: " + this.state.fMail;
		noidung += "Phone nhan duocc la: " + this.state.fPhone;
		noidung += "Message nhan duocc la: " + this.state.fMess;
		return noidung;
	}

	render() {
		if(this.state.isRedirect){
			console.log(this.getGiatri());
	 		return <Redirect to="/"/>;
	 	}
		return (
			<div>
				  <header className="masthead tintuc">
				    <div className="container h-100">
				      <div className="row h-100">
				        <div className="col-lg-12 my-auto">
				          <div className="header-content mx-auto">
				            <h1 className="mb-1">Trang Liên Hệ</h1>
				          </div>
				        </div>
				      </div>
				    </div>
				  </header>
				  {/* main */}
				  <div className="container">
				    {/* Contact Section Heading*/}
				    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên Hệ Với Chúng Tôi</h2>
				    <hr />
				    <hr />
				    {/* Contact Section Form*/}
				    <div className="row">
				      <div className="col-lg-8 mx-auto">
				        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
				        <form id="contactForm" name="sentMessage" noValidate="novalidate">
				          <div className="control-group">
				            <div className="form-group floating-label-form-group controls mb-0 pb-2">
				              <label>Name</label>
				              <input onChange={(event) => this.inChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
				              <p className="help-block text-danger" />
				            </div>
				          </div>
				          <div className="control-group">
				            <div className="form-group floating-label-form-group controls mb-0 pb-2">
				              <label>Email Address</label>
				              <input onChange={(event) => this.inChange(event)} name="fMail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." aria-invalid="false" />
				              <p className="help-block text-danger" />
				            </div>
				          </div>
				          <div className="control-group">
				            <div className="form-group floating-label-form-group controls mb-0 pb-2">
				              <label>Phone Number</label>
				              <input onChange={(event) => this.inChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
				              <p className="help-block text-danger" />
				            </div>
				          </div>
				          <div className="control-group">
				            <div className="form-group floating-label-form-group controls mb-0 pb-2">
				              <label>Message</label>
				              <textarea onChange={(event) => this.inChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
				              <p className="help-block text-danger" />
				            </div>
				          </div>
				          <br />
				          <div id="success" />
				          <div className="form-group"><button  className="btn btn-primary btn-xl" id="sendMessageButton" type="submit" onClick = {(event)=> this.sumitForm(event)}>Send</button></div>
				        </form>
				      </div>
				    </div>
				  </div>
				</div>

		);
	}
}

export default Contact;