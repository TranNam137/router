import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';

class News extends Component {

	render() {

		return (
			<div>
				<header className="masthead tintuc">
				  <div className="container h-100">
				    <div className="row h-100">
				      <div className="col-lg-12 my-auto">
				        <div className="header-content mx-auto">
				          <h1 className="mb-1">Trang danh sách tin</h1>
				        </div>
				      </div>
				    </div>
				  </div>
				</header>

				<div className="container">
					 <div className="row" id="boxnews">
						{
							dl.map((value, key) => {
								return (
									<NewsItem key={key}
									 tinId={value.id} anh={value.anh} tieude={value.tieude} trichdan={value.trichdan}>
									</NewsItem>
								)
							})
						}
					    
					  </div>
				</div>

			</div>
		);
	}
}

export default News;
