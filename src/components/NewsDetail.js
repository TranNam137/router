import React, { Component } from 'react';
import dl from './dulieu.json';
import NewRelated from './NewRelated';

class NewsDetail extends Component {
	render() {
		var dem=1;
		return (
			<div>
					<header className="masthead tintuc">
					  <div className="container h-100">
					    <div className="row h-100">
					      <div className="col-lg-12 my-auto">
					        <div className="header-content mx-auto">
					          <h1 className="mb-1">Trang chi tiết tin tin</h1>
					        </div>
					      </div>
					    </div>
					  </div>
					</header>
			{
				dl.map((value,key) => {
				if( value.id === this.props.match.params.id){
						return(
							<div className="jumbotron jumbotron-fluid" key={key}>
							    <div className="container">
							      ​<img src={value.anh} className="img-fluid w100" alt="image" />
							      <hr />
							      <h3 className="lead  text-center">{value.tieude}</h3>
							      <hr className="my-2" />
							      {
							      	value.trichdan
							      }
							    </div>
							</div>
						)
					}
				})	
			}

				  
				  <div className="container">
				    <div className="card border-primary">
				      <div className="card-body">
				        <h4 className="card-title text-center">Tin Liên Quan</h4>
				        <div className="row">
				          <div className="col-lg-12">
				            <div className="card-deck">

				            {
				            	dl.map((value,key) => {
									if(value.id !== this.props.match.params.id)
									{
										if(dem<=4){
											dem++;
											return (
												<NewRelated key={key}
													tinId={value.id}
													anh={value.anh}
													tieude={value.tieude}
													trichdan={value.trichdan}>
												</NewRelated>
											)
										}
									}	

				            	})
				            }
				            	
				            </div>
				            <hr />
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

		);
	}
}

export default NewsDetail;
