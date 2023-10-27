<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>
	<div class="df-spl-row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-demo-section">
			<?php
			$opt = get_option( 'spllk_opt' );
			if ( empty( $opt ) ) {
				echo '<p class="free_version">You are using the <span class="highlighted">free (demo)</span> version of the plugin. Click <span class="highlighted"><a href="https://stylishpricelist.com?utm_source=inside-plugin&utm_medium=buy-premium-cta-banner">here</a></span> to buy the pro version.</p>';
			}
			?>
		</div>
	</div>
					<div class="price_wrapper ">

								<!--- MODAL POPUP ----->
								<div class="modal df-spl-modal fade" id="sell1" data-target="with_tab">
									<div class="modal-dialog">
										<div class="scc-modal-content">
											<div class="modal-header orange df-spl-p-0">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
												</button>
												<div class="df-spl-row">
													<div class="col-md-3 df-modal-left-side">
														<h1 style="color: #fff">YOU ARE SWITCHING TO</h1>
														<br>
														<div class="style-title-wrapper">
															<h2>Style 1</h2>
														</div>
														<br>
														<ul>
															<li>Category Tabs ✔</li>
															<li>Buy Now Button ✔</li>
															<li>Images ❌</li>
															<li>Single Column ✔</li>
															<li>Two Columns ✔</li>
														</ul>
													</div>
													<div class="col-md-9 df-spl-show-style-mockups">
														<img class="w-690" src="<?php echo SPL_URL . '/assets/images/Style1.png'; ?>" alt="some image" />
														<div class="text-center df-spl-switch-btn-actns">
															<button class="btn btn-hover-blue" data-btnType='keep-current'>Switch & Keep My Font Setting</button>
															<button class="btn btn-hover-blue btn-recommended " data-btnType='use-demo'>Switch & Use Demo Fonts</button>
															<button class="btn cancel-btn">Cancel</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="modal df-spl-modal fade" id="sell2" data-target="without_tab">
									<div class="modal-dialog">
										<div class="scc-modal-content">
											<div class="modal-header orange df-spl-p-0">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
												</button>
												<div class="df-spl-row">
													<div class="col-md-3 df-modal-left-side">
														<h1 style="color: #fff">YOU ARE SWITCHING TO</h1>
														<br>
														<div class="style-title-wrapper">
															<h2>Style 2</h2>
														</div>
														<br>
														<ul>
															<li>Category Tabs ❌</li>
															<li>Buy Now Button ✔</li>
															<li>Images ❌</li>
															<li>Single Column ✔</li>
															<li>Two Columns ✔</li>
														</ul>
													</div>
													<div class="col-md-9 df-spl-show-style-mockups">
														<img class="w-690" src="<?php echo SPL_URL . '/assets/images/Style2.png'; ?>" alt="some image" />
														<div class="text-center df-spl-switch-btn-actns">
															<button class="btn btn-hover-blue" data-btnType='keep-current'>Switch & Keep My Font Setting</button>
															<button class="btn btn-hover-blue btn-recommended " data-btnType='use-demo'>Switch & Use Demo Fonts</button>
															<button class="btn cancel-btn">Cancel</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="modal df-spl-modal fade" id="sell3" data-target="style_3">
									<div class="modal-dialog">
										<div class="scc-modal-content">
											<div class="modal-header orange df-spl-p-0">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
												</button>
												<div class="df-spl-row">
													<div class="col-md-3 df-modal-left-side">
														<h1 style="color: #fff">YOU ARE SWITCHING TO</h1>
														<br>
														<div class="style-title-wrapper">
															<h2>Style 3</h2>
														</div>
														<br>
														<ul>
															<li>Category Tabs ❌</li>
															<li>Buy Now Button ✔</li>
															<li>Images ❌</li>
															<li>Single Column ✔</li>
															<li>Two Columns ✔</li>
														</ul>
													</div>
													<div class="col-md-9 df-spl-show-style-mockups">
														<img class="w-690" src="<?php echo SPL_URL . '/assets/images/Style3.png'; ?>" alt="some image" />
														<div class="text-center df-spl-switch-btn-actns">
															<button class="btn btn-hover-blue" data-btnType='keep-current'>Switch & Keep My Font Setting</button>
															<button class="btn btn-hover-blue btn-recommended " data-btnType='use-demo'>Switch & Use Demo Fonts</button>
															<button class="btn cancel-btn">Cancel</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="modal df-spl-modal fade" id="sell4" data-target="style_4">
									<div class="modal-dialog">
										<div class="scc-modal-content">
											<div class="modal-header orange df-spl-p-0">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
												</button>
												<div class="df-spl-row">
													<div class="col-md-3 df-modal-left-side">
														<h1 style="color: #fff">YOU ARE SWITCHING TO</h1>
														<br>
														<div class="style-title-wrapper">
															<h2>Style 4</h2>
														</div>
														<br>
														<ul>
															<li>Category Tabs ❌</li>
															<li>Buy Now Button ✔</li>
															<li>Images ❌</li>
															<li>Single Column ✔</li>
															<li>Two Columns ✔</li>
														</ul>
													</div>
													<div class="col-md-9 df-spl-show-style-mockups">
														<img class="w-690" src="<?php echo SPL_URL . '/assets/images/Style4.png'; ?>" alt="some image" />
														<div class="text-center df-spl-switch-btn-actns">
															<button class="btn btn-hover-blue" data-btnType='keep-current'>Switch & Keep My Font Setting</button>
															<button class="btn btn-hover-blue btn-recommended " data-btnType='use-demo'>Switch & Use Demo Fonts</button>
															<button class="btn cancel-btn">Cancel</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="modal df-spl-modal fade" id="sell5" data-target="style_5">
									<div class="modal-dialog">
										<div class="scc-modal-content">
											<div class="modal-header orange df-spl-p-0">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
												</button>
												<div class="df-spl-row">
													<div class="col-md-3 df-modal-left-side">
														<h1 style="color: #fff">YOU ARE SWITCHING TO</h1>
														<br>
														<div class="style-title-wrapper">
															<h2>Style 5</h2>
														</div>
														<br>
														<ul>
															<li>Category Tabs ✔</li>
															<li>Buy Now Button ✔</li>
															<li>Images ❌</li>
															<li>Single Column ✔</li>
															<li>Two Columns ✔</li>
														</ul>
													</div>
													<div class="col-md-9 df-spl-show-style-mockups">
														<img class="w-690" src="<?php echo SPL_URL . '/assets/images/Style5.png'; ?>" alt="some image" />
														<div class="text-center df-spl-switch-btn-actns">
															<button class="btn btn-hover-blue" data-btnType='keep-current'>Switch & Keep My Font Setting</button>
															<button class="btn btn-hover-blue btn-recommended " data-btnType='use-demo'>Switch & Use Demo Fonts</button>
															<button class="btn cancel-btn">Cancel</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="modal df-spl-modal fade" id="sell6" data-target="style_6">
									<div class="modal-dialog">
										<div class="scc-modal-content">
											<div class="modal-header orange df-spl-p-0">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
												</button>
												<div class="df-spl-row">
													<div class="col-md-3 df-modal-left-side">
														<h1 style="color: #fff">YOU ARE SWITCHING TO</h1>
														<br>
														<div class="style-title-wrapper">
															<h2>Style 6</h2>
														</div>
														<br>
														<ul>
															<li>Category Tabs ✔</li>
															<li>Buy Now Button ✔</li>
															<li>Images ✔</li>
															<li>Single Column ✔</li>
															<li>Two Columns ✔</li>
														</ul>
													</div>
													<div class="col-md-9 df-spl-show-style-mockups">
														<img class="w-690" src="<?php echo SPL_URL . '/assets/images/Style6.png'; ?>" alt="some image" />
														<div class="text-center df-spl-switch-btn-actns">
															<button class="btn btn-hover-blue" data-btnType='keep-current'>Switch & Keep My Font Setting</button>
															<button class="btn btn-hover-blue btn-recommended " data-btnType='use-demo'>Switch & Use Demo Fonts</button>
															<button class="btn cancel-btn">Cancel</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="modal df-spl-modal fade" id="sell7" data-target="style_7">
									<div class="modal-dialog">
										<div class="scc-modal-content">
											<div class="modal-header orange df-spl-p-0">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
												</button>
												<div class="df-spl-row">
													<div class="col-md-3 df-modal-left-side">
														<h1 style="color: #fff">YOU ARE SWITCHING TO</h1>
														<br>
														<div class="style-title-wrapper">
															<h2>Style 7</h2>
														</div>
														<br>
														<ul>
															<li>Category Tabs ✔</li>
															<li>Buy Now Button ✔</li>
															<li>Images ❌</li>
															<li>Single Column ❌</li>
															<li>Two Columns ✔</li>
														</ul>
													</div>
													<div class="col-md-9 df-spl-show-style-mockups">
														<img class="w-690" src="<?php echo SPL_URL . '/assets/images/Style7.png'; ?>" alt="some image" />
														<div class="text-center df-spl-switch-btn-actns">
															<button class="btn btn-hover-blue" data-btnType='keep-current'>Switch & Keep My Font Setting</button>
															<button class="btn btn-hover-blue btn-recommended " data-btnType='use-demo'>Switch & Use Demo Fonts</button>
															<button class="btn cancel-btn">Cancel</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!--- END MODAL POPUP ---->
								<!-- Start of settings preview modal -->
								<div class="modal df-spl-modal fade" id="settings-preview" style="overflow: initial;">
									<div class="modal-dialog">
										<div class="scc-modal-content">
											<div class="modal-header orange">
												<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												<div class="df-spl-row">
													
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- End of preview modal -->
								<!-- The Modal Videos Tutorials-->
								<div id="myModalVideos" class="modalvideos" style="display:none;">
									<div class="scc-modal-content-videos">
										<span class="closevideo">&times;</span>
										<p>
											<div style="padding-top:15px;text-align:center;font-size:40px;font-weight:bold;color:#5bb3a7!important;">Video Tutorial</div>
											<div style="padding-top:20px;text-align:center;font-size:20px;color:#484848;">How to use Stylish Price List</div>
										</p>
										<!--<br><hr><br>-->
										<p>
											<div class="spl_video_tutorial" style="text-align: center;">
												<iframe loading="lazy" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" max-width="1120" height="630" type="text/html" src="https://www.youtube.com/embed/tq8SE1HC7g0?autoplay=0&fs=1&iv_load_policy=3&show@=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd1080&origin=https://youtubeembedcode.com"></iframe>
											</div>
										</p>
									</div>
								</div>
								<!-- End of Modal Video Tutorials -->
								<!-- The Modal Videos Tutorials-->
								<div id="dropdown_tips" class="dropdown_tips modal df-spl-modal fade" style="display:none;">
									<div class="scc-modal-content-videos">
										<span class="closevideo" data-dismiss="modal" aria-label="Close">&times;</span>
										<p>
											<div style="padding-top:15px;text-align:center;font-size:40px;font-weight:bold;color:#5bb3a7!important;">Pro Tip</div>
											<div style="padding-top:20px;text-align:center;font-size:20px;color:#484848;">Use a dropdown if you have many categories. You can find the settings on the "More Settings" menu</div>
										</p>
										<div style="margin-left: auto; margin-right: auto; width: max-content;">
											<img src="<?php echo SPL_URL . '/assets/images/tooltip-images/dropdown-categories.png'; ?>">		
										</div>
									</div>
								</div>
								<!-- End of Modal Video Tutorials -->
								<!-- The Modal for warning against not image file chosen for image -->
								<div id="not_an_image_warning" class="not_an_image_warning modal df-spl-modal fade" style="display:none;">
									<div class="scc-modal-content-videos">
										<span class="closevideo" data-dismiss="modal" aria-label="Close">&times;</span>
										<p>
											<div style="padding-top:15px;text-align:center;font-size:40px;font-weight:bold;color:#5bb3a7!important;">Not An Image</div>
											<div style="padding-top:20px;text-align:center;font-size:20px;color:#484848;">The file is not allowed. Please chose an image file.</div>
										</p>
									</div>
								</div>
								<!-- End of Modal Video Tutorials -->
								<!-- The Modal for warning against bad aspect ratio for image -->
								<div id="image_bad_aspect_ratio_warning" class="modal df-spl-modal fade" style="display:none;">
									<div class="scc-modal-content-videos">
										<span class="closevideo" data-dismiss="modal" aria-label="Close">&times;</span>
										<p>
											<div style="padding-top:15px;text-align:center;font-size:40px;font-weight:bold;color:#5bb3a7!important;">Bad aspect ratio</div>
											<div style="padding-top:20px;text-align:center;font-size:20px;color:#484848;">Please choose an image with an wider aspect ratio.</div>
										</p>
									</div>
								</div>
								<!-- End The Modal for warning against bad aspect ratio for image -->
								<!-- The Modal Contact Support-->
								<div id="myModalSupport" class="modalsupport">
									<div class="scc-modal-content-support">
										<span class="closesupport">&times;</span>
										<div style="padding-top:20px;text-align:center;font-size:40px;font-weight:bold;color:#5bb3a7!important;">Contact Support</div>
										<div style="padding-top:20px;text-align:center;font-size:20px;color:#484848;margin-bottom: 100px;">We're here to help!</div>
										<!--<br><hr><br>-->
										<p>
											<div style="text-align: center;">
												<div style="text-align: left;width:100%;max-width:700px;padding-bottom:20px;font-size:16px;">
													<div class="foot-url" style="font-size:24px;margin-top:20px">
														<span class="col-me"><a href="https://designful.freshdesk.com/en/support/solutions/folders/48000670844" target="_blank" style="text-decoration: none!important;">User Guides</a></span>
														<span> | </span>
														<span class="col-me" ><a style="text-decoration: none!important;" href="https://designful.freshdesk.com/en/support/solutions/folders/48000670795" target="_blank">FAQs</a></span>
														<span> | </span>
														<span><a href="https://stylishpricelist.com/support/" target="_blank" style="text-decoration: none!important;">Contact Support</a></span>
													</div>
												</div>
											</div>
											<div class="df-spl-row" style="margin-top:10px;">
			<!---<div class="col-sm-4 col-md-3">
			<a href="https://www.facebook.com/designful/" target="_blank" class="button button-primary video_tutorial_btn">FaceBook Message</a>
		</div>--->
		<div class="col-sm-4 col-md-3">
		</div><Br>
	</div>
</p>
</div>
</div>
<!-- End of Modal Video Tutorials -->
<style type="text/css">
	.foot-url span a {
		background: blue;
		padding: 3px 10px 3px 10px;
		color: white!important;
		font-color: white;
		border-radius: 10px;
		font-size: 15px;
	}
	.spl-header{
		display: inline-block;
	}
	.spl-header.logo{
		position: relative;
		top: -20px;
	}
	img.img-responsive1 {
		max-width: 100%;
		height: auto;
	}
	.foot-img-li .col-md-5 .spl-footer, .foot-img-li .col-md-5 ul.foot-li, .foot-img-li .col-md-5 ul.foot-li li {
		display: inline-block;
	}
	.foot-img-li .spl-footer {
		width: 100%;
	}
	.foot-img-li .spl-footer{
		width:100%;
	}
	.foot-img-li {
		margin-top: 30px;
	}
	ul.foot-li{
		width:100%;
		float:left;
	}
	ul.foot-li li a {
		list-style-type: none;
		text-decoration: none;
		padding: 6px;
		font-size: 12px;
		color: #5bb3a7;
	}
	ul.foot-li li{
		width:30%;
		float:left;
	}
	ul.foot-li li:after{
		content: "";
		width: 1px;
		height: 12px;
		background-color: #000;
		position: absolute;
		top: 16px;
	}
	ul.foot-li li:last-child:after{
		display:none;
	}
	.design, .design-2, .design-3{
		position:relative;
	}
	.foot-img-li .design:after, .design-2:after, .design-3:after {
		content: "";
		width: 2px;
		height: 65px;
		background-color: #9c9c9c;
		position: absolute;
		right: 3px;
		top: 0;
	}
	p.foot-social i.fa {
		width: 35px;
		font-size: 20px;
		color: #5bb3a7;
	}
	.foot-text-img p span img {
		width: 100%;
	}
	.foot-text-img p span {
		display: inline-block;
		width: 100%;
		float: left;
	}
	.foot-url {
		text-align: center;
	}
	.foot-url p.col-me {
		color: #5bb3a7;
	}
	.foot-url p {
		margin: 2px;
	}
	.foot-text-img a.plugin_text {
		font-size: 15px;
	}
	.foot-text-img p span img {
		width: 100px;
	}
	.price_wrapper {
		width: 100%;

	}
	.url-foot:after {
		content: "";
		width: 1px;
		height: 100px;
		background-color: #000;
		position: absolute;
		top: 0px;
	}
	.foot-text-img p {
		width: 100%;
		float: left;
		margin: 3px 0px;
		padding-left: 15px;
	}
			/*.foot-img-li a.spl-footer img {
			width: 100%;
			}*/
			.foot-img-li .foot-li {
				margin-top: 12px;
			}
			@media screen and (max-width:768px){
				.foot-img-li .col-md-1, .foot-img-li .design, .foot-img-li .design-2, .foot-img-li .design-3, .foot-img-li .col-md-3 {
					width: 100%;
					float: left;
				}
				.foot-img-li .spl-footer {
					width: 100%;
					float: left;
					max-width: 200px;
				}
				.foot-url {
					text-align: left;
					margin: 15px 0px;
				}
				.foot-text-img {
					width: 100%;
					float: left;
					margin-bottom: 16px;
				}
				.foot-text-img p {
					padding-left: 0px;
				}
				.foot-img-li .design:after, .design-2:after, .design-3:after{
					display:none;
				}
			}
			@media screen and (max-width:366px){
				ul.foot-li li {
					width: 100%;
					float: left;
				}
				ul.foot-li li:after {
					display:none;
				}
			}
		</style>
